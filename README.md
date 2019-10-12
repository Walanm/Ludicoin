# Ludicoin
Token de Blockchain para armazenar notas sobressalentes em disciplinas acadêmicas.

## Guia de pastas

As lista de dependências utilizadas na aplicação encontra-se no arquivo 'package.json'.

### /pages
Contém o código das páginas web da aplicação.

### /Telas
Contém prints de todas as páginas web da aplicação

### /ethereum
Contém os arquivos relacionados ao uso do Ethereum pela aplicação web.

- compile.js: é um script para a compilação dos contratos e salva a ABI e o bytecode dos contratos em arquivos JSON na pasta /ethereum/build.

- deploy.js: é um script para a implantação dos contratos na blockchain.

- web3.js: define o provedor web3 a ser utilizado.

- ludicoin.js e ludiex.js: exportam uma instância do smart contract Ludicoin e uma instância do smart contract LudiEx, respectivamente, em JavaScript, para serem utilizadas pela aplicação web.

- povoar.js: script para fazer um povoamento automatizado de registros na blockchain.

- teste.js: script para fazer teste de tempo de validação de transação.

#### /ethereum/build
Contém os arquivos JSON que possuem as ABIs e bytecodes dos contratos.

#### /ethereum/contracts
Contém o código em Solidity Ludicoin.sol que implementa todos os smart contracts do sistema.

### /components
Contém o código dos elementos visuais reutilizáveis feitos em React.

### /.next e /node_modules
Pastas contendo arquivos das dependências instaladas.

### /server.js: define o servidor next.js utilizado.

### /routes.js: define as rotas de navegação de páginas web.






