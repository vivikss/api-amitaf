import './utils/global.js'

import 'dotenv/config.js'
import express from 'express';
import cors from 'cors';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`ta subindo na porta ${PORTA}`))