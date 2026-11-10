# Produtos Web - Thinking in React

Implementação prática do guia [Thinking in React](https://react.dev/learn/thinking-in-react) da documentação oficial do React, desenvolvida com Vite, TypeScript e CSS Modules.

## Tecnologias utilizadas

- **React 18**
- **TypeScript**
- **Vite**
- **CSS Modules**

## Estrutura de Componentes

- `FilterableProductTable`: Componente principal que armazena o estado de busca (`filterText` e `inStockOnly`).
- `SearchBar`: Formulário com filtro por texto e checkbox para produtos em estoque.
- `ProductTable`: Tabela que filtra e renderiza as categorias e linhas de produtos.
- `ProductCategoryRow`: Cabeçalho de cada categoria de produto.
- `ProductRow`: Linha individual com nome e preço do produto (destacando em vermelho itens fora de estoque).

## Como executar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar a versão de produção:
   ```bash
   npm run build
   ```

