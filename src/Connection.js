const mysql2 = require("mysql2");

// Configuración de la base de datos MySQL
const db = mysql2.createConnection({
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME
});