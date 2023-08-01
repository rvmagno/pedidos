const express = require('express')
const cors = require('cors')

module.exports= function(server){

    // API ROutes
    const router = express.Router()
    server.use(cors())
    server.use('/api', router)
    
    // TODO
    // const todoService = require('../api/todo/todoService')
    // todoService.register(router, '/todos')
    
    // cliente
    const clienteService = require('../api/cliente/clienteService')
    clienteService.register(router, '/cliente')
}