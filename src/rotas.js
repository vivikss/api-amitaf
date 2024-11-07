import userController from './controller/user.js'
import appController from './controller/user.js'

export default function adicionarRotas(servidor) {
    servidor.use(userController)
    servidor.use(appController)
}