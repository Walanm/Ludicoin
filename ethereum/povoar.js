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
        '0x1Cc92F7907e7AE54EA330d0375b3B4138B8E6cfC'
    );

    //POVOAMENTO RAPIDO
    
    await instanciaLudiEx.methods.inserirDisciplina("COMP0334", 4, "Programação Imperativa", 100)
                                 .send({ gas: '385221', from: accounts[0] });

    await instanciaLudiEx.methods.inserirDisciplina("COMP0478", 4, "Informática, Ética e Sociedade", 150)
                                 .send({ gas: '385221', from: accounts[0] });

    await instanciaLudiEx.methods.inserirDisciplina("COMP0410", 4, "Lógica para Computação", 200)
                                 .send({ gas: '385221', from: accounts[0] });

    await instanciaLudiEx.methods.inserirDisciplina("MAT0078", 4, "Algebra Linear I", 250)
                                 .send({ gas: '385221', from: accounts[0] });

    await instanciaLudiEx.methods.cadastrarTurma('0x0000000000000000000000000000000000000000000000000000000000000000', "24M34", "Did5 101", 3, "2019.1")
                                 .send({ gas: '606664', from: accounts[0] });

    await instanciaLudiEx.methods.cadastrarTurma('0x0000000000000000000000000000000000000000000000000000000000000001', "24T56", "Did4 102", 2, "2019.1")
                                 .send({ gas: '606664', from: accounts[0] });

    await instanciaLudiEx.methods.cadastrarTurma('0x0000000000000000000000000000000000000000000000000000000000000002', "35M12", "Did3 103", 2, "2019.2")
                                 .send({ gas: '606664', from: accounts[0] });

    console.log('Instância Povoada');

};
deploy();