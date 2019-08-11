const fs = require('fs')
exports.products = JSON.parse(fs.readFileSync(`${__dirname}/Products.json`, 'utf8'))