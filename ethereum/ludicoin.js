/*
    Exporta uma instância JavaScript do smart contract Ludicoin para ser utilizada pela aplicação web.
*/

import web3 from './web3';
import Ludicoin from './build/Ludicoin.json';

const instancia = new web3.eth.Contract (
    JSON.parse(Ludicoin.interface),
    '0x14F6C9F9529F14584918Efe3DB6DCB8E135cF2B0'
);

export default instancia;