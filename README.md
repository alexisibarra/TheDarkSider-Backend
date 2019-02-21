# The Darksider: Backend

Wanna join the darkside? register and sign in for some force knowledge

## Requirements

This project assumes the following tools are installed:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)
- [Foreman](https://github.com/strongloop/node-foreman)
- [MongoDB](https://www.mongodb.com)

## Installation

1. Clone the base from the repo:

```
git clone git@bitbucket.org:alexisibarra/thedarksider_backend.git
```

2. Install all the dependencies

```
yarn
```

3. Copy the `env-example` file to `.env` and set the values acording your needs

```
cp env-example .env
```

## Execution

Execute the proyect using [Foreman](https://github.com/strongloop/node-foreman):

    $ nf start

This will load the `.env` file and set the necessary environment variables for the app to run properly.


## Built With

* [Node.js](https://nodejs.org) - The backend framework used
* [Express.js](https://github.com/expressjs/express) - Node.js framework used
* [MongoDB](https://www.mongodb.com/) - Database platform used
