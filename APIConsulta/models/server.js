const express = require('express');
const cors = require('cors');
//Modelos de bases de datos
const DB = require('../config/db');


class Server {
    constructor() {
        this.app = express();
        this.path = {
            consulta: '/api/consulta'
        }
        this.configDB();
        this.middlewares();
        this.routes();
    }

    routes() {

        this.app.use(this.path.consulta, require('../routes/consulta'));
    }
    configDB() {
        this.connectionDDBB();
    }
    async connectionDDBB() {
        try {
            //modelos bases de datos
            await DB.authenticate();
            console.log('Conexion a la base de datos completada');
        } catch (error) {

            console.log('Hubo un error al conectar a DB:', error);

        }

    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: true }));
    }
    listen() {
        this.app.set('port', process.env.PORT || 9007);
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en el puerto', this.app.get('port'));
        });
    }
}

module.exports = Server;