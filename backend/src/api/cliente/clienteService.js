const cliente = require('./cliente')

cliente.methods(['get', 'post', 'put', 'delete'])
cliente.updateOptions({new: true, runValidators: true})

module.exports = cliente