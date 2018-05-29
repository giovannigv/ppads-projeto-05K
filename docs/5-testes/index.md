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
| 3 | Preencha o campo nome com "Tomate", email com "tomate@test.com", senha com "tomate123" e selecione a opção **Cadastrar** | Exibição de mensagem de cadastro com sucesso. |



**Nome do caso de uso:** Manter Cadastro Estabelecimento

**Preparação:**

* Não é necessário preparação.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Selecionar a opção **Registrar** | Apresentação da tela de Registro de cliente. |
| 3 | Selecionar a opção **Clique aqui e cadastre seu estabelecimento** | Apresentação da tela de Cadastro de estabelecimento. |
| 4 | Preencha o campo de nome do estabelecimento com "Verde", email com "verde@test.com, senha com "verde123", segmento com "Comidas Naturais", url da imagem com "https://cdn.colab55.com/images/1464357428/studio/product/11575/art/37045/stickers/fosco/standard/1.png" e selecione a opção **Cadastrar Estabelecimento** | Exibição de mensagem de cadastro com sucesso. |



**Nome do caso de uso:** Manter Cadastro Menu

**Preparação:**

* Criar no sistema o estabelecimento Verde.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL https://projeto-mackfood-05k.mybluemix.net/ | Apresentação da tela de login do sistema. |
| 2 | Preencher os campos **Email** com "verde@test.com" e **password** com "verde123".| Apresentação do painel do Estabelecimento |
| 3 | Selecionar a aba de **produtos** | Apresentação da tela de Produtos. |
| 4 | Clicar no botão **"+"**| Apresentação da tela de Cadastro de Produto. |
| 5 | Preencha o campo nome com "Suco Verde", descrição com "Suco natural que possue muitos benefícios, como grande quantidade de fibras, minerais, vitaminas e diferentes funções que ajudam no crescimento, desenvolvimento e na manutenção das atuações metabólicas que acontecem no nosso organismo.", preço com "12,00", imagem do produto com "https://abrilmdemulher.files.wordpress.com/2016/10/receita-suco-verde-detox-65701.jpg?quality=90&strip=info" e selecione a opção **Cadastrar Produto** | Exibição de mensagem de cadastro com sucesso. |
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
