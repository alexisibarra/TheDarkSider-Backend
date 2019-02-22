const jwt = require('express-jwt');

const getTokenFromHeaders = ({ headers: { authorization } }) =>
  (authorization && authorization.split(' ')[0] === 'Token')
    ? authorization.split(' ')[1]
    : null;


const auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;