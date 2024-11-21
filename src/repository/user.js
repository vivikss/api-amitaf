import con from './connection.js'

export async function criaruser(user) {
    const comando = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)"
    let resposta = await con.query(comando, [user.nome, user.email, user.senha]);
    let info = resposta[0];

    let idUser = info.insertId;
    return idUser;
}

export async function verificarUser(user) {
    let comando = `select * from usuarios where email = ? and senha = ?`
    let [ [ resposta ] ] = await con.query(comando, [user.email, user.senha]);
    console.log(resposta);
    return resposta;
}

const database = require('../config/database');

const criarItem = async (nome, preco, forma_pagamento) => {
  // lógica para criar item no banco de dados
};

const listarItens = async () => {
  // lógica para listar itens no banco de dados
};

module.exports = {
  criarItem,
  listarItens,
};
