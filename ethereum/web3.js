import Web3 from 'web3';
import { type } from 'os';

var web3;

const OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
  };

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // Está rodando em um navegador & metamask está ativo.
    web3 = new Web3(window.web3.currentProvider, null, OPTIONS);
} else {
    // Está rodando no servidor OU o usuário não está utilizando metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/81097b295f724055b44caea8536046a2'
    );
    web3 = new Web3(provider, null, OPTIONS);
}

export default web3;