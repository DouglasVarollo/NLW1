## Tecnologias

- [Node.js](https://nodejs.org)
- [Yarn](https://classic.yarnpkg.com/)

## Dependências

- [celebrate](https://yarnpkg.com/en/package/celebrate)
- [cors](https://yarnpkg.com/en/package/cors)
- [express](https://yarnpkg.com/en/package/express)
- [knex](https://yarnpkg.com/en/package/knex)
- [multer](https://yarnpkg.com/en/package/multer)
- [sqlite3](https://yarnpkg.com/en/package/sqlite3)

## Dependências de desenvolvimento

- [@types/cors](https://yarnpkg.com/en/package/@types/cors)
- [@types/express](https://yarnpkg.com/en/package/@types/express)
- [@types/hapi__joi](https://yarnpkg.com/en/package/@types/hapi__joi)
- [@types/multer](https://yarnpkg.com/en/package/@types/multer)
- [ts-node](https://yarnpkg.com/en/package/ts-node)
- [ts-node-dev](https://yarnpkg.com/en/package/ts-node-dev)
- [typescript](https://yarnpkg.com/en/package/typescript)

## Como iniciar

Faça um clone desse repositório e acesse a pasta server:

    git clone https://github.com/DouglasVarollo/NLW1.git
    cd NWL1/server

Agora nós precisamos instalar as dependências, podemos usar o yarn:

    yarn
    // ou npm install

Antes de executar a API, você precisa alterar o IP na propriedade **image_url** do arquivo **src/controllers/PointsController.ts** e adicionar o IP da sua máquina.

Para executar a API em modo de desenvolvimento nós usamos o comando:

    yarn dev
    // ou npm run dev
