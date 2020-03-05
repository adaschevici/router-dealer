'use strict'

const dateFormat = require('dateformat')
const winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({
      timestamp: () => dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss'),
      colorize: true,
    }),
  ],
})
