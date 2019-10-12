/*
    Exporta uma instância JavaScript do smart contract LudiEx para ser utilizada pela aplicação web.
*/

import web3 from './web3';
import LudiEx from './build/LudiEx.json';

const instancia = new web3.eth.Contract (
    JSON.parse(LudiEx.interface),
    '0xC25Da2558a6752154639E8396987773CA22e671A'
);

export default instancia;