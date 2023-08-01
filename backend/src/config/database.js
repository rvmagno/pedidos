const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = 
    // mongoose.connect('mongodb://root:Mongo123@localhost/todo')
    mongoose.connect('mongodb://root:Mongo123@localhost/pedidos', {
        'auth':{
            "authSource": "admin"
        },
        'user':'root',
        'pass':'Mongo123'
    })