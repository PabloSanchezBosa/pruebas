//Importamos de la librería mysq12 el método que nos sirve para conectarnos con la base de datos
const mysql = require('mysq12/promise')

//Credenciales de la base de datos
const config = {
    db: {
        host: "192.168.1.200",
        user: "root",
        password: "holitas",
        database: "mibasededatos",
        port: 3306,
        connectTimeout: 60000
    },
}

//1. Creamos la conexión con la base de datos (mysql.createConnection) con las credenciales proporcionadas
//en config.db
//2. Ejecutamos la consulta

const connection = await mysql.createConnection(config.db)
const [results, ] = await connection. execute(`INSERT INTO mitabla (nombre, marca) VALUES ('coche', 'seat' )`)
return results