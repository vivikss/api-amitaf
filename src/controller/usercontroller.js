import { criaruser } from "../repository/usuariorepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/criar', async (req, resp) => {
    let user = req.body;
    let id = await criaruser(user);

    resp.send({
        idUser: id
    })
})

export default endpoints; 