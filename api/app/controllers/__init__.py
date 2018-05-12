from flask import request, jsonify, make_response, abort
from app import app
from app import db
from functools import wraps
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.tables import Restaurante, Produto, User

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message' : 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(public_id=data['public_id']).first()
            if not current_user:
                current_user = Restaurante.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message' : 'Token is invalid!'}), 401
        print(current_user)
        return f(current_user, *args, **kwargs)
    return decorated

@app.route('/api/token')
def get_token():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})
    user = User.query.filter_by(email=auth.username).first()
    # identifica tipo de usuário
    if user:
        if user.admin:
            user_type = 'admin'
        else:
            user_type = 'cliente'
    if not user:
        user = Restaurante.query.filter_by(email=auth.username).first()
        user_type = 'restaurante'
    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})
    if check_password_hash(user.password, auth.password):
        token = jwt.encode({'public_id' : user.public_id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token' : token.decode('UTF-8'), 'type' : user_type, 'id':user.id})
    return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})
