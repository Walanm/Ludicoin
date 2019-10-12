/*
    Script para a implantação dos contratos na blockchain.
*/

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledLudicoin = require('./build/Ludicoin.json');
const compiledLudiEx = require('./build/LudiEx.json');

const provider = new HDWalletProvider(
    'hospital whale female sing reason crew income prefer crane stock between float',
    'https://rinkeby.infura.io/v3/81097b295f724055b44caea8536046a2'
);
const OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
  };
const web3 = new Web3(provider, null, OPTIONS);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Tentando implantar a partir da conta', accounts[0]);

    const contratoLudicoin = await new web3.eth.Contract(JSON.parse(compiledLudicoin.interface))
        .deploy({ data: compiledLudicoin.bytecode })
        .send({ gas: '5000000', from: accounts[0] });
    
    console.log('Ludicoin implantado em', contratoLudicoin.options.address);

    const contratoLudiEx = await new web3.eth.Contract(JSON.parse(compiledLudiEx.interface))
    .deploy({ 
            data: compiledLudiEx.bytecode,
            arguments:['Universidade Federal de Sergipe', contratoLudicoin.options.address]
     })
    .send({ gas: '6500000', from: accounts[0] });

    console.log('LudiEx implantado em', contratoLudiEx.options.address);

    const instanciaLudicoin = new web3.eth.Contract (
        JSON.parse(compiledLudicoin.interface),
        contratoLudicoin.options.address
    );
    
    await instanciaLudicoin.methods.transferirPosse(contratoLudiEx.options.address).send({gas: '30000', from: accounts[0] });

    console.log('Ludicoin pronto');

    const instanciaLudiEx = new web3.eth.Contract (
        JSON.parse(compiledLudiEx.interface),
        contratoLudiEx.options.address
    );

    await instanciaLudiEx.methods.inicializar("José Luís Alves Teixeira", 6161399570, 1, "Computação")
                                 .send({ gas: '193156', from: accounts[0] });

    console.log('Professor inicial criado');

};
deploy();