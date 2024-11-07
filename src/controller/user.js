import * as db from "../repository/user.js";
import { autenticar, gerarToken } from "../auth/jwt.js";
 
import { Router } from "express";
const endpoints = Router();

endpoints.post('/criar', autenticar, async (req, resp) => {
    let user = req.body;
    let id = await db.criaruser(user);

    resp.send({
        idUser: id
    })
})

endpoints.post('/logar', async (req, resp) => {
    try{
        let user = req.body;
        let verify_user = await db.verificarUser(user);
        
        if (verify_user) {
            let token = gerarToken(verify_user)
            resp.send({
                "token": token
            })
        }
    }
    catch{
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints; 