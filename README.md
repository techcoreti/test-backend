# Guia de Instalação e Execução

Este guia fornece instruções passo a passo para instalar e executar a aplicação.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados na sua máquina:

- Node.js v18.18.0
- Yarn (última versão)
- Docker
- Docker Compose
- Rodar a aplicação no linux preferêncialmente

## Instalação

1. Clone este repositório para sua máquina local

2. Navegue até o diretório da aplicação

3. Instale as dependências utilizando Yarn

## Configuração do Banco de Dados

1. Antes de executar a aplicação, é necessário iniciar o banco de dados. Certifique-se de ter o Docker em execução.

2. Para iniciar o banco de dados, execute o seguinte comando na raiz do projeto: sudo docker compose up -d

3. Após o banco de dados estar em execução, crie o banco de dados executando o seguinte comando: yarn db:create


## Migrações do Banco de Dados

1. Com o banco de dados criado, execute as migrações para criar as tabelas necessárias. Utilize o seguinte comando:
```
**yarn migration:run**
```
## Executando a Aplicação

Com as dependências instaladas e o banco de dados configurado, você está pronto para executar a aplicação. Utilize o seguinte comando: yarn start:dev

Isso iniciará a aplicação e estará pronta para uso.

## Documentação da API

A documentação da API está disponível através do Swagger. Você pode acessá-la através do path: /docs/swagger 

