const dotenv = require('dotenv');

dotenv.config();

const MySQL = require('mysql2');

const config_SQL = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //PORT: process.env.DB_PORT,
    connectionLimit: 10
}

const Connection_DB = MySQL.createConnection(config_SQL);

Connection_DB.connect(() => {
    console.log("a")
})

module.exports = Connection_DB;