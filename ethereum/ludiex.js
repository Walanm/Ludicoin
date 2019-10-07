import web3 from './web3';
import LudiEx from './build/LudiEx.json';

const instancia = new web3.eth.Contract (
    JSON.parse(LudiEx.interface),
    '0x6cd1F3A2E5d81d482b1B894351FD29089eFd8703'
);

export default instancia;