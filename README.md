# Projeto Semana OmniStack 11

## Descrição

Este é um projeto de um sistema web e mobile de uma aplicação para cadastro de ONGs.

Nele, é possível cadastrar uma nova ONG, um caso para esta ONG e o gerenciamento dessas informações em geral.

## Tecnologias

Como tecnologias utilizadas nesse projeto utilizei a seguinte stack:

- NodeJS
- ReactJS
- React Native

## Diário de bordo

23/03/2020 - Apresentação da stack e visão geral do sistema num todo

24/03/2020 - Desenvolvimento do back-end do sistema com NodeJS. Nesta etapa configuramos todas as rotas do nosso sistema e as regras de negócio utilizadas em cada uma delas.

25/03/2020 - Desenvolvimento do front-end da parte web do sistema com ReactJS. Nesta etapa desenvolvemos todas as views do sistema, com página de login, página de cadastro e página de apresentação (listagem).

26/03/2020 - Desenvolvimento do Mobile com React Native. Criamos duas páginas, uma de visualização geral dos casos e outra página para abrir detalhes de um caso específico aonde o usuário pode entrar em contato com a ONG por e-mail ou whatsapp dentro do prórpio aplicativo.

27/03/2020 - Nesta etapa do desenvolvimento vimos alguns conceito avançados. Um deles foi a validação realizada no back-end para que haja integridade dos dados que vamos salvar no banco de dados ou mostrar no front-end antes de cada requisição. Para isso, utilizamos a ferramente "Celebrate" e fizemos a validação no arquivo de rotas, onde passamos a validação como um dos parâmetros. Outra funcionalidade que vimo foi o TDD (Test-driven Develompent), que são testes feitos antes mesmo de terminarmos nossa aplicação. Durante o desenvolvimento do nosso back-end podemos pré-definir uma série de testes em um banco de dados a parte para validar os processos.

## Agradecimentos

Quero agradecer à @RocketSeat e ao Diego Fernandes pela incrível semana que tivemos durante o desenvolvimento dessa aplicação.