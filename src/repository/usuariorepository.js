import con from './connection.js'

export async function criaruser(user) {
    let comando = `
    INSERT INTO usuarios (nome, email, senha)
        VALUES (?, ?, ?)
    `
    let resposta = await con.query(comando, [user.nome, user.email, user.senha]);
    let info = resposta[0];

    let idUser = info.insertId;
    return idUser;
}

