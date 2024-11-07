import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
});

console.log(`Host: ${process.env.HOST}
User: ${process.env.USER}
Senha: ${process.env.PSW}
Database: ${process.env.DB}`);
export default con;