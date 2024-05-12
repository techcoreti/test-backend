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

2. Para iniciar o banco de dados, execute o seguinte comando na raiz do projeto:
```
sudo docker compose up -d
```

4. Ajustar o arquivo env seguindo o modelo .env.example:

5. Após o banco de dados estar em execução, crie o banco de dados executando o seguinte comando:
```
yarn db:create
```
## Migrações do Banco de Dados

1. Com o banco de dados criado, execute as migrações para criar as tabelas necessárias. Utilize o seguinte comando:
```
yarn migration:run
```
## Executando a Aplicação

Com as dependências instaladas e o banco de dados configurado, você está pronto para executar a aplicação. Utilize o seguinte comando: 
```
yarn start:dev
```

Isso iniciará a aplicação e estará pronta para uso.

## Documentação da API

A documentação da API está disponível através do Swagger. Você pode acessá-la através do path: 
```
/docs/swagger
```

## Breve descrição
1. Foi utilizado o Framework NestJs para construção do teste, hoje é o que temos de melhor em desenvolvimento ágil com typescript.
2. Utilizado o Clean Arch como base do desenvolvimento.
3. Foi atendido os requisitos:
	- O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.
	- O sistema deverá validar CPF e CNPJ digitados incorretamente.
	- A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda
	- Cada produtor pode plantar mais de uma cultura em sua Fazenda.
4. Não é permitido cadastrar dois Produtores com o mesmo CNPJ ou CPF.
5. Não é permitido cadastrar o mesmo Produtor com o mesmo nome e CNPJ/CPF
6. Não permitido cadastrar um Produtor com uma área de plantio maior que a área disponivel em hectares (area total menos área da vegetação).
7. Não é permitido cadastrar uma área de plantio maior que á área disponível em hectares, é somado o que já foi plantando com o que está sendo solicitado e se disponível, permite efetuar o cadastro.
