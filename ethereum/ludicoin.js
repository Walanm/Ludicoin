import web3 from './web3';
import Ludicoin from './build/Ludicoin.json';

const instancia = new web3.eth.Contract (
    JSON.parse(Ludicoin.interface),
    '0x36b75Da7206baeBE343ff0Ab27693C6d383Fb799'
);

export default instancia;