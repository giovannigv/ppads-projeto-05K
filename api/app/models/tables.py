from app import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)

class Restaurante(db.Model):
    __tablename__ = 'restaurantes'
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80))
    segmento = db.Column(db.String(40))
    imagem_url = db.Column(db.String(255), nullable=True)
    admin =     db.Column(db.Boolean)

class Produto(db.Model):
    __tablename__ = 'produtos'
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    nome = db.Column(db.String(50))
    descricao = db.Column(db.String(500))
    preco = db.Column(db.Float)
    imagem_url = db.Column(db.String(255), nullable=True)
    restaurant_id = db.Column(db.Integer)

class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(50))
    complete = db.Column(db.Boolean)
    user_id = db.Column(db.Integer)
