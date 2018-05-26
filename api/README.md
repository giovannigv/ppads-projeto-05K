API MACKFOOD
============

Documentação
------------
https://documenter.getpostman.com/view/3112702/api-mackfood-development/RW1gCwQ4

## API

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
