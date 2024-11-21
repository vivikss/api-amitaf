import con from './connection.js'


export async function criarservico(servico) {
    let comando = "INSERT INTO procedimento (tipo, descricao, valor) VALUES (?, ?, ?)"
    let resposta = await con.query(comando, [servico.tipo, servico.descricao, servico.valor]);
    let info = resposta[0];

    let idservico = info.insertId;
    return idservico;
}

export async function modificarservico(servico, id) {
    let comando = "INSERT INTO procedimento (tipo, descricao, valor) VALUES (?, ?, ?) where id = ?"
    let resposta = await con.query(comando, [modificarservico.tipo, modificarservico.descricao, modificarservico.valor, id.id]);
    let info = resposta[0];

    let idservico = info.insertId;
    return idservico;
}

