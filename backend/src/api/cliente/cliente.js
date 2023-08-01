const restful = require('node-restful')
const mongoose = restful.mongoose


const clienteSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    contato: {type: Number, require: true},
    email: {type: String, require: false},
    createAt:{type: Date, default: Date.now}
})

module.exports = restful.model('Cliente', clienteSchema)