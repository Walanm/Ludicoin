import web3 from './web3';
import Ludicoin from './build/Ludicoin.json';

const instancia = new web3.eth.Contract (
    JSON.parse(Ludicoin.interface),
    '0xdc9d659f520BA0f9a0f0d49342c2d13038109A80'
);

export default instancia;