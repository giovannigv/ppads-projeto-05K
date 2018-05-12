from flask import request, jsonify, make_response, abort
from . import app
from . import db
from . import token_required
from app.models.tables import User
from werkzeug.security import generate_password_hash, check_password_hash
import uuid

@app.route('/api/users', methods=['GET'])
@token_required
def get_all_users(current_user):
    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})
    users = User.query.all()
    output = []
    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['nome'] = user.nome
        user_data['email'] = user.email
        user_data['admin'] = user.admin
        output.append(user_data)
    return jsonify({'users' : output})

@app.route('/api/users/<public_id>', methods=['GET'])
@token_required
def get_one_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})
    user = User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'message' : 'No user found!'})
    user_data = {}
    user_data['public_id'] = user.public_id
    user_data['nome'] = user.nome
    user_data['email'] = user.email
    user_data['admin'] = user.admin
    return jsonify({'user' : user_data})

@app.route('/api/users', methods=['POST'])
def create_user():
    if request.get_json() is None:
        abort(make_response(jsonify(message="Missing arguments"), 400))
    else:
        data = request.get_json()
    if data['email'] is None or data['password'] is None:
        abort(make_response(jsonify(message="Missing arguments"), 400))
    if User.query.filter_by(email=data['email']).first() is not None:
        abort(make_response(jsonify(message="User already exist"), 400))
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(public_id=str(uuid.uuid4()), nome=data['nome'], email=data['email'], password=hashed_password, admin=False)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message' : 'New user created!'})

@app.route('/api/users/<public_id>', methods=['PUT'])
@token_required
def promote_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})
    user = User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'message' : 'No user found!'})
    user.admin = True
    db.session.commit()
    return jsonify({'message' : 'The user has been promoted!'})

@app.route('/api/users/<public_id>', methods=['DELETE'])
@token_required
def delete_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})
    user = User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'message' : 'No user found!'})
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message' : 'The user has been deleted!'})
