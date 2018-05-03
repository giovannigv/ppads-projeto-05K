from flask import request, jsonify, make_response, abort
from . import app
from . import db
from app.models.tables import User
from werkzeug.security import generate_password_hash, check_password_hash
import uuid

@app.route('/api/users', methods=['POST'])
def create_user():
    if request.get_json() is None:
        abort(make_response(jsonify(message="Faltam argumentos"), 400))
    else:
        data = request.get_json()
    if data['email'] is None or data['password'] is None:
        abort(make_response(jsonify(message="Faltam argumentos"), 400))
    if User.query.filter_by(email=data['email']).first() is not None:
        abort(make_response(jsonify(message="Usuário já existe!"), 400))
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(public_id=str(uuid.uuid4()), nome=data['nome'], email=data['email'], password=hashed_password, admin=False)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'mensagem' : 'Novo usuário criado!'})

@app.route('/api/users', methods=['GET'])
def get_all_users():
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
