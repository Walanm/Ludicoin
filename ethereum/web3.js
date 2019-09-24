import Web3 from 'web3';
import { type } from 'os';

var web3;

const OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
  };

//const web3 = new Web3(provider, null, OPTIONS);

//const web3 = new Web3(provider);

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are on the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider, null, OPTIONS);
} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/81097b295f724055b44caea8536046a2'
    );
    web3 = new Web3(provider, null, OPTIONS);
}

export default web3;