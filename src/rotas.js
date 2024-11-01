import userController from './controller/usercontroller.js'

export default function adicionarRotas(servidor) {
    servidor.use(userController)
}