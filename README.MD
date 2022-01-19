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

