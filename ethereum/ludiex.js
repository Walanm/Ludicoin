import web3 from './web3';
import LudiEx from './build/LudiEx.json';

const instancia = new web3.eth.Contract (
    JSON.parse(LudiEx.interface),
    '0x1Cc92F7907e7AE54EA330d0375b3B4138B8E6cfC'
);

export default instancia;