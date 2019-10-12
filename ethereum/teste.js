/*
    Script para fazer teste de tempo de validação de transação.
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

//const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Tentando implantar a partir da conta', accounts[0]);

    const instanciaLudiEx = new web3.eth.Contract (
        JSON.parse(compiledLudiEx.interface),
        '0x6039bE94011b622f7263e62B54DBDE1140F16AB6'
    );

    console.time('Processamento');

    
    let transacoes = await Promise.all(
        Array(parseInt(0))
            .fill()
            .map((element, index) => {
                instanciaLudiEx.methods.inserirDisciplina("COMP0334", 4, "Programação Imperativa", 100)
                                 .send({ gas: '385221', from: accounts[0] });
                return 1;
            })
    );
    console.timeEnd('Processamento');

    console.time('Transação');
        
    await instanciaLudiEx.methods.inserirDisciplina("COMP0334", 4, "Programação Imperativa", 100)
            .send({ gas: '385221', from: accounts[0] });

    console.timeEnd('Transação');

};
deploy();