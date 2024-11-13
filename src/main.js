import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor)

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--> a api esta subindo na porta ${PORTA}`))

