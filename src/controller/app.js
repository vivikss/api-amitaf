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

