const mongoose = require('mongoose');
const config = require('../utils/config')

mongoose.set('strictQuery', false);

mongoose.
    connect(config.MONGODB_URI)
    .then(() => console.log('connected mongo db'))
    .catch((e) => console.log(e));