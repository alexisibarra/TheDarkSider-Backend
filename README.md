# The Darksider: Backend

Wanna join the darkside? register and sign in for some force knowledge

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Requirements

This project assumes the following tools are installed:

- [Docker](https://www.docker.com/)

## Installation

First lone the base from the repo:

```
git clone git@bitbucket.org:alexisibarra/thedarksider_backend.git
```

We have two ways to run the local dev environment:

### 1) Using docker compose

To use docker compose you need to have [Docker](https://docs.docker.com/install/#supported-platforms) installed

```
docker-compose up -d
docker exec -it the-darksider yarn
```

### 2) Manual Instalation

As prerequisites you need to have running in your local environment:

- MongoDB
- NodeJS 8.x

and run

```
npm install
```

3. Copy the `env-example` file to `.env` and set the values acording your needs

```
cp env-example .env
```

## Execution

 1 - Run the following (If you did not install the app via docker-compose skip this step):

```
docker exec -it the-darksider bash
```

3 - Execute the proyect using [Foreman](https://github.com/strongloop/node-foreman):

    $ nf start

This will load the `.env` file and set the necessary environment variables for the app to run properly.

## Built With

* [Node.js](https://nodejs.org)
* [Express.js](https://github.com/expressjs/express)
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)
