const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = 9006;
        this.calculadora = '/api/calculadora';
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }
    routes() {
        this.app.use(this.calculadora, require('../routes/calculadora'));
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio público
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: true }));
    }
    listen() {
        this.app.set('port', 9006 || 9010);
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en puerto', this.app.get('port'));
        })
    }
}
module.exports = Server;