# Plano de testes

Para cada caso de uso, elabore um **procedimento de teste** para testar o cenário principal.

Em cada procedimento de teste, siga o modelo abaixo:

**Nome do caso de uso:** Consultar tarefas

**Preparação:**

* Criar no sistema um usuário com o perfil de **Funcionário**.
* Cadastrar 5 tarefas para o usuário criado.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://teste.mackenzie.br | Apresentação da tela de login do sistema |
| 2 | Preencher os campos **login** e **password** com os dados de um usuário com perfil de **Funcionário**. | Apresentação do painel do Funcionário |
| 3 | Clicar no link **Listar todas as tarefas**. | Apresentação das 5 tarefas cadastradas para o funcionário. |



**Nome do caso de uso:** Manter Cadastro Cliente

**Preparação:**

* Não é necessário preparação.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Selecionar a opção **Registrar** | Apresentação da tela de Registro de cliente. |
| 3 | Preencher todos os campos corretamente e selecionar a opção **Cadastrar** | Exibição de mensagem de cadastro com sucesso. |



**Nome do caso de uso:** Manter Cadastro Estabelecimento

**Preparação:**

* Não é necessário preparação.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Selecionar a opção **Registrar** | Apresentação da tela de Registro de cliente. |
| 3 | Selecionar a opção **Clique aqui e cadastre seu estabelecimento** | Apresentação da tela de Cadastro de estabelecimento. |
| 4 | Preencher todos os campos corretamente e selecionar a opção **Cadastrar Estabelecimento** | Exibição de mensagem de cadastro com sucesso. |



**Nome do caso de uso:** Manter Cadastro Menu

**Preparação:**

* Criar no sistema um estabelecimento

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Preencher os campos **Email** e **password** com os dados de um usuário com perfil de **Estabelecimento**.| Apresentação do painel do Estabelecimento |
| 3 | Selecionar a aba de **produtos** | Apresentação da tela de Produtos. |
| 4 | Clicar no botão **"+"**| Apresentação da tela de Cadastro de Produto. |
| 5 | Preencher todos os campos corretamente e selecionar a opção **Cadastrar Produto** | Exibição de mensagem de cadastro com sucesso. |
***Revisar***



**Nome do caso de uso:** Verificar Pedido

**Preparação:**

* Criar no sistema um estabelecimento

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Preencher os campos **Email** e **password** com os dados de um usuário com perfil de **Estabelecimento**.| Apresentação do painel do Estabelecimento na aba de pedidos. |
| 3 | Selecionar o Pedido | Apresentação do pedido. |
***Revisar***


**Nome do caso de uso:** Verificar Pedido

**Preparação:**

* Criar no usuário do tipo **Cliente** no sistema.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Preencher os campos **Email** e **password** com os dados de um usuário com perfil de **Cliente**.| Apresentação do painel do Cliente. |
| 3 | Selecionar Produto | Apresentação da tela de pedidos com pedido incluso. |
***Incompleto***



**Nome do caso de uso:** Realizar pagamento

**Preparação:**

* Criar no usuário do tipo **Cliente** no sistema.
* Ter pedidos cadastrados no carrinho.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Preencher os campos **Email** e **password** com os dados de um usuário com perfil de **Cliente**.| Apresentação do painel do Cliente. |
| 3 | Selecionar a aba de **Pedidos** | Apresentação da tela de pedidos com pedido incluso. |
| 4 | Selecionar a opção **Realizar Pagamento** | Apresentação da tela de pagamento. |
| 5 | Selecionar a opção **Confirmar Pagamento** | Exibição de mensagem de pagamento com sucesso. |
