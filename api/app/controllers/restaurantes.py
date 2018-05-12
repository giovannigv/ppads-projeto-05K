from flask import request, jsonify, make_response, abort
from . import app
from . import db
from . import token_required
from app.models.tables import Restaurante, Produto, User, Todo
from werkzeug.security import generate_password_hash, check_password_hash
import uuid

@app.route('/api/restaurantes', methods=['GET'])
def get_all_restaurants():
    restaurants = Restaurante.query.all()
    output = []
    for restaurant in restaurants:
        restaurant_data = {}
        restaurant_data['id'] = restaurant.id
        restaurant_data['nome'] = restaurant.nome
        restaurant_data['segmento'] = restaurant.segmento
        restaurant_data['imagem_url'] = restaurant.imagem_url
        output.append(restaurant_data)
    return jsonify({'restaurants' : output})

@app.route('/api/restaurantes/<restaurante_id>', methods=['GET'])
def get_one_restaurante(restaurante_id):
    restaurant = Restaurante.query.filter_by(id=restaurante_id).first()
    if not restaurant:
        return jsonify({'message' : 'No restaurant found!'})
    restaurant_data = {}
    restaurant_data['id'] = restaurant.id
    restaurant_data['nome'] = restaurant.nome
    restaurant_data['segmento'] = restaurant.segmento
    restaurant_data['imagem_url'] = restaurant.imagem_url
    return jsonify({'restaurant' : restaurant_data})

@app.route('/api/restaurantes', methods=['POST'])
def create_restaurant():
    if request.get_json() is None:
        abort(make_response(jsonify(message="Missing arguments"), 400))
    else:
        data = request.get_json()
    if data['email'] is None or data['password'] is None:
        abort(make_response(jsonify(message="Missing arguments"), 400))
    if Restaurante.query.filter_by(email=data['email']).first() is not None:
        abort(make_response(jsonify(message="Restaurant already exist"), 400))
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_restaurant = Restaurante(public_id=str(uuid.uuid4()), nome=data['nome'], email=data['email'], segmento=data['segmento'], password=hashed_password, imagem_url=data['imagem_url'], admin=False)
    db.session.add(new_restaurant)
    db.session.commit()
    return jsonify({'message' : 'New restaurant created!'})
