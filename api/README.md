API MACKFOOD
============

Documentação
------------
https://documenter.getpostman.com/view/3112702/api-mackfood-development/RW1gCwQ4

## API

### Clientes

* `POST` `https://mackfood-api.herokuapp.com/api/users` - Cadastra Cliente
Exemplo:
```
curl --request POST \
  --url https://mackfood-api.herokuapp.com/api/users \
  --header 'Content-Type: application/json' \
  --data '{
	"nome":"Nome Sobrenome",
	"email":"email@email.com",
	"password":"senha"
}'
```


* `GET` `https://mackfood-api.herokuapp.com/api/users` - Lista clientes cadastrados
```
curl --request GET \
  --url https://mackfood-api.herokuapp.com/api/users \
  --header 'x-access-token: secret'
```


* `DELETE` `https://mackfood-api.herokuapp.com/api/users/<public_id>` - Remove um cliente
```
curl --request DELETE \
  --url https://mackfood-api.herokuapp.com/api/users/<public_id> \
  --header 'x-access-token: secret'
```

### Restaurantes

* `POST` `https://mackfood-api.herokuapp.com/api/restaurantes` - Cadastra Restaurante
Exemplo:
```
curl --request POST \
  --url https://mackfood-api.herokuapp.com/api/restaurantes \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Nome Restaurante",
	"email": "email@email.com",
	"segmento":"segmento",
	"imagem_url":"url_imagem.png",
	"password":"senha"
}'
```

* `GET` `https://mackfood-api.herokuapp.com/api/restaurantes` - Lista restaurantes cadastrados
```
curl --request GET \
  --url https://mackfood-api.herokuapp.com/api/restaurantes
```

* `GET` `https://mackfood-api.herokuapp.com/api/restaurantes/id` - Retorna detalhes de um restaurante
```
curl --request GET \
  --url https://mackfood-api.herokuapp.com/api/restaurantes/<id>
```

