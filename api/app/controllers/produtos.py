from flask import request, jsonify, make_response, abort
from . import app
from . import db
from . import token_required
from app.models.tables import Restaurante, Produto, User, Todo
from werkzeug.security import generate_password_hash, check_password_hash
import uuid

#produtos
@app.route('/api/restaurantes/<restaurante_id>/produtos', methods=['GET'])
def get_all_products(restaurante_id):
    products = Produto.query.filter_by(restaurant_id=restaurante_id).all()
    output = []
    for product in products:
        product_data = {}
        product_data['id'] = product.id
        product_data['nome'] = product.nome
        product_data['descricao'] = product.descricao
        product_data['preco'] = product.preco
        product_data['imagem_url'] = product.imagem_url
        output.append(product_data)
    return jsonify({'produtos' : output})

@app.route('/api/restaurantes/<int:restaurante_id>/produtos/<int:product_id>', methods=['GET'])
def get_one_product(restaurante_id,product_id):
    product = Produto.query.filter_by(id=product_id).first()
    product_data = {}
    product_data['id'] = product.id
    product_data['nome'] = product.nome
    product_data['descricao'] = product.descricao
    product_data['preco'] = product.preco
    product_data['imagem_url'] = product.imagem_url
    return jsonify({'produtos' : product_data})

@app.route('/api/restaurantes/<restaurante_id>/produtos', methods=['POST'])
@token_required
def create_product(current_user, restaurante_id):
    if current_user.id != int(restaurante_id):
        return jsonify({'message' : 'Permissão Negada!'})
    data = request.get_json()
    new_product = Produto(nome=data['nome'], descricao=data['descricao'], preco=data['preco'], imagem_url=data['imagem_url'], restaurant_id=restaurante_id)
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'menssagem' : "Produto criado!"})
