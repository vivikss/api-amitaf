import * as db from "../repository/app.js";
import { autenticar } from "../auth/jwt.js";
 
import { Router } from "express";
const endpoints = Router();

endpoints.post('/criar', autenticar, async (req, resp) => {
    let user = req.body;
    let id = await db.criaruser(user);

    resp.send({
        idUser: id
    })
})

export default endpoints;

endpoints.post('/add/servico', autenticar, async (req, resp) => {
    let servico = req.body;
    let id = await db.criarservico(servico);

    resp.send({
        idservico: id
    })
})

endpoints.put('/mudar/servico', autenticar, async (req, resp) => {
    let id = req.query
    let servico = req.body;
    let resposta = await db.criarservico(servico, id);

    resp.send({
        idservico: resposta
    })
})

