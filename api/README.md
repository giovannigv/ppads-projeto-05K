API MACKFOOD 
============
É necessário informar o cabeçalho "Accept: application/json" nas requisições, sem exceção!
A API tem os recursos orientados pela URL e utiliza os Status Codes para indicar os erros.

Documentação
------------

- POST **https://api-mackfood.herokuapp.com/api/users**

    Registra um novo usuário.<br>
    O conteúdo da solicitação deve conter um objeto JSON com a definição dos campos 'nome', 'email' e 'password'.<br>
    
    Respostas:
    Sucesso --> 201<br>
    Falha --> 400 (bad request)<br>
    
    Observação:
    - A senha é criptografada antes de ser armazenada no banco de dados. Uma vez criptografada, a senha original é descartada.

- GET **https://api-mackfood.herokuapp.com/api/users/ &lt;int:id&gt;**

    Retorna um usuário.<br>
    
    Respostas:
    Sucesso --> 201<br>
    Falha --> 400 (bad request)<br>
    
- GET **https://api-mackfood.herokuapp.com/api/token**

    Retorna um token de autenticação.<br>
    A solicitação deve ser autenticada (Basic Auth) informando os campos email e password no header.
    
    Respostas:
    Sucesso --> retorna um objeto JSON object com um campo `token` e `duration`(segundos) <br>
    Falha --> 401 (unauthorized)

- GET **https://api-mackfood.herokuapp.com/api/resource**

    Retorna um conteúdo protegido de exemplo<br>
    
    Respostas:
    Sucesso --> 201<br>
    Falha --> 401 (unauthorized)
    
 - GET **https://api-mackfood.herokuapp.com/logout**
 
   Descarta o token registrado<br>
  
