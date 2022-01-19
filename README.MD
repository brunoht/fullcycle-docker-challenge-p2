# Full Cycle Docker Challenge 2

## Instruções do desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 

- A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 

- Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

- O retorno da aplicação node.js para o nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```

- Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

- Suba tudo em um repositório e faça a entrega.

## Como utilizar esta aplicação

Para rodar a aplicação basta executar o seguinte comando:

```bat
docker-compose up -d
```

### Controlando individualmente cada container

Caso prefira executar individualmente cada container, você poderá fazê-lo, seguindo as intruções contidas em cada um dos projetos dessa aplicação.

> Leia o arquivo README contido em cada diretório desta aplicação para obter toda a instrução necessária sobre o container.

## Pré-requisitos

- Você só precisar ter o GIT e Docker instalado em seu computador. Todas as dependências para o desenvolvimento e execução da aplicação já estão dentro dos containers.

- Espera-se que você possua conhecimentos prévios sobre GIT, Docker, Docker Compose, Node, NPM, MySQL e NGINX (o suficiente para você poder baixar este repositório e colocar a aplicação para rodar).

## O que esperar deste projeto?

Aqui possui tudo o que é necessário para desenvolver e executar uma aplicação NodeJs com banco de dados MySQL.

- Ao rodar o docker-compose tudo o que é necessário para abrir a aplicação no navegador, por exemplo, será automaticamente executado. Basta iniciar e sair usando o que já tem pronto!

- Ao mesmo tempo, você terá todas as ferramentas necessárias para continuar a desenvolver esse projeto. Dentro de cada container o ambiente de desenvolvimento já estão o Node e o NPM. Se precisar adicionar novas dependências ao projeto, basta entrar no container e executar a instalação da dependência. Quando não precisar usar mais, basta sair e voltar a editar o seu código na sua máquina mesmo.

## O que não esperar deste projeto?

Este ambiente foi estruturado para servir localmente sua aplicação, seja para testes ou desenvolvimento. Portanto, não espere que ela seja adequada para colocar para rodar num servidor em produção!