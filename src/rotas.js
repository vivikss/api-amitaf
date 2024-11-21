import userController from './controller/user.js'
import appController from './controller/app.js'

export default function adicionarRotas(servidor) {
    servidor.use(userController)
    servidor.use(appController)
}

const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.criarItem);
router.get('/', itemController.listarItens);

module.exports = router;