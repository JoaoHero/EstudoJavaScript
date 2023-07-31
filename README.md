# Projeto Menu de Lanches com JavaScript

Este projeto é uma aplicação simples que exibe um menu de lanches com seus respectivos nomes e valores. Visei o aprendizado e o aprimoramento do uso dos métodos: `forEach`, `Map`, `Filter` e `Reduce` do JavaScript para diferentes funcionalidades.

## Funcionalidades

### 1. Mostrar o Menu de Lanches

Ao carregar a página, o menu de lanches é exibido através do uso do método `forEach`. Os dados dos lanches são armazenados em um array de objetos, onde cada objeto representa um lanche e possui as propriedades `nome` e `valor`. O `forEach` percorre esse array e exibe na interface o nome e o valor de cada lanche em uma lista.

### 2. Criar Desconto nos Lanches

Foi implementado um botão "Aplicar Desconto" que utiliza o método `Map`. Quando o botão é clicado, é chamada uma função que percorre o array de lanches com o `Map`. Nessa função, é criado um novo array com os mesmos lanches, porém com um valor de desconto aplicado a cada um.

### 3. Somar o Valor Total dos Itens no Cardápio

Foi criado um botão "Calcular Total" que utiliza o método `Reduce`. Quando o botão é clicado, é chamada uma função que percorre o array de lanches com o `Reduce`. Nessa função, é feita a soma dos valores de todos os lanches presentes no cardápio e o resultado é exibido na interface.

### 4. Filtrar Lanches Específicos

É chamada uma função que percorre o array de lanches com o `Filter`, verificando o objeto com o menu dos lanches e apenas exibindo em tela os lanches que forem vegano.

## Como executar o projeto

1. Clone ou baixe o repositório para sua máquina local.

2. Abra o arquivo `index.html` em seu navegador para executar a aplicação.

## Contribuições

Contribuições são bem-vindas! Se você deseja adicionar novas funcionalidades, melhorar o código existente ou corrigir problemas, sinta-se à vontade para abrir um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Autor

[Joao Ramos](https://github.com/JoaoHero)
