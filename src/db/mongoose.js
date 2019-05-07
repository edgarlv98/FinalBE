const mongoose = require('mongoose')

const config = require('../config.js')

var connectionURL = config.connectionURL || process.env.NODE_ENV

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
