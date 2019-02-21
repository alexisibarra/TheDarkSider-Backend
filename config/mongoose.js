const mongoose = require('mongoose');
const { MONGO_SERVER_ADDRESS, MONGO_DB_NAME } = process.env;

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

mongoose.connect(`mongodb://${MONGO_SERVER_ADDRESS}/${MONGO_DB_NAME}`);
mongoose.set('debug', true);