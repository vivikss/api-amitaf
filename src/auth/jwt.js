import jwt from "jsonwebtoken"
const KEY = "SENHA"

export function gerarToken(user){
    return jwt.sign(user, KEY)
}

export function autenticar(req, resp, next){
    try {
        let token = req.headers["x-access-token"]
        if (token === undefined) {
            token = req.query["x-access-token"]
        }
        let sign = jwt.verify(token, KEY)
        req.user = sign
        next()
    } catch (e) {
        resp.status(401).end()
    }
}