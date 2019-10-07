pragma solidity ^0.4.17;

contract Posse {
    address public proprietario;
    function Posse() public {
        proprietario = msg.sender;
    }
    modifier somenteProprietario {
        require(msg.sender == proprietario);
        _;
    }
    function transferirPosse(address novoProprietario) somenteProprietario public {
        proprietario = novoProprietario;
    }
}

contract TokenERC20 {
    string public name;
    string public symbol;
    uint8 public decimals = 18;

    uint256 public totalSupply;

    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    event Burn(address indexed from, uint256 value);

    function TokenERC20(
        uint256 initialSupply,
        string tokenName,
        string tokenSymbol
    ) public {
        totalSupply = initialSupply * 10 ** uint256(decimals);  
        balanceOf[msg.sender] = totalSupply;                
        name = tokenName;                                   
        symbol = tokenSymbol;                               
    }

    function _transfer(address _from, address _to, uint _value) internal {
        
        require(_to != 0x0);
        
        require(balanceOf[_from] >= _value);

        require(balanceOf[_to] + _value > balanceOf[_to]);

        uint previousBalances = balanceOf[_from] + balanceOf[_to];

        balanceOf[_from] -= _value;

        balanceOf[_to] += _value;
        Transfer(_from, _to, _value);

        assert(balanceOf[_from] + balanceOf[_to] == previousBalances);
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);     // Check allowance
        allowance[_from][msg.sender] -= _value;
        _transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function burn(uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);   // Check if the sender has enough
        balanceOf[msg.sender] -= _value;            // Subtract from the sender
        totalSupply -= _value;                      // Updates totalSupply
        Burn(msg.sender, _value);
        return true;
    }

    function burnFrom(address _from, uint256 _value) public returns (bool success) {
        require(balanceOf[_from] >= _value);                // Check if the targeted balance is enough
        require(_value <= allowance[_from][msg.sender]);    // Check allowance
        balanceOf[_from] -= _value;                         // Subtract from the targeted balance
        allowance[_from][msg.sender] -= _value;             // Subtract from the sender's allowance
        totalSupply -= _value;                              // Update totalSupply
        Burn(_from, _value);
        return true;
    }
}
/******************************************/
/*       Token name: LUDICOIN
*/
/******************************************/
contract Ludicoin is Posse, TokenERC20 {

    mapping (address => bool) public frozenAccount;

    event FrozenFunds(address target, bool frozen);

    function Ludicoin() TokenERC20(0, "Ludicoin", "LDC") public {}

    function _transfer(address _from, address _to, uint _value) internal {
        require (_to != 0x0);                               
        require (balanceOf[_from] >= _value);               
        require (balanceOf[_to] + _value >= balanceOf[_to]); 
        require(!frozenAccount[_from]);                     
        require(!frozenAccount[_to]);                       
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        Transfer(_from, _to, _value);
    }


    function mintToken(address target, uint256 mintedAmount) public somenteProprietario {
        balanceOf[target] += mintedAmount;
        totalSupply += mintedAmount;
        Transfer(0, this, mintedAmount);
        Transfer(this, target, mintedAmount);
    }

    function freezeAccount(address target, bool freeze) public somenteProprietario{
        frozenAccount[target] = freeze;
        FrozenFunds(target, freeze);
    }
    
    function transfer(address _to, uint256 _value) public somenteProprietario returns (bool success) {
        return super.transfer(_to, _value);
    }
    
    function gastar(address usuario, uint valor) public somenteProprietario {
        _transfer(usuario, msg.sender, valor);
    }
    
}

contract LudiEx {
    
    address public admin;
    string public nomeEntidade;
    address public ludicoin;
    
    struct Aluno {
        string nomeCompleto;
        uint cpf;
        uint matricula;
        string curso;
        bytes32[] turmas;
    }
    
    struct Professor {
        string nomeCompleto;
        uint cpf;
        uint cadastro;
        string departamento;
        bytes32[] turmas;
    }
    
    struct Requisicao {
        address conta;
        string nomeCompleto;
        uint cpf;
        uint cadastro;
        string departamento;
    }
    
    struct Disciplina {
        bytes32 idDisciplina;
        string  codigoDaDisciplina;
        uint  creditos;
        string  nome;
        bytes32[] turmas;
        uint indice;
        uint taxaCambio;
    }
    
    struct Turma {
        bytes32 idTurma;
        bytes32 idDisciplina;
        address professor;
        string horario;
        string sala;
        bool aberta;
        bytes32[] unidades;
        address[] participantes;
        uint indice;
        string periodo;
    }
    
    struct Unidade {
        bytes32 idUnidade;
        bytes32 idTurma;
        bytes32[] atividades;
        mapping(address => uint) bonusLudicoin;
    }
    
    struct Atividade {
        bytes32 idAtividade;
        bytes32 idUnidade;
        string nome;
        mapping(address => AtividadeRealizada) atividadesRealizadas;
        uint indice;
        string prazo;
    }
    
    struct AtividadeRealizada {
        uint nota;
        uint data;
    }
    
    
    
    mapping(address => Aluno) alunos;
    address[] alunoIndice;
    
    mapping(address => Professor) professores;
    address[] professorIndice;
    
    Requisicao[] requisicoesProfessor;
    
    mapping(bytes32 => Disciplina) disciplinas;
    bytes32[] disciplinaIndice;
    
    mapping(bytes32 => Turma) turmas;
    bytes32[] turmaIndice;
    
    mapping(bytes32 => Unidade) unidades;
    
    mapping(bytes32 => Atividade) atividades;
    bytes32[] atividadeIndice;
    
    mapping(bytes32 => address[]) requisicoesDeMatricula;
    
    modifier somenteProfessor() {
        require(ehProfessor(msg.sender));
        _;
    }
    
    function LudiEx(string _nome, address _ludicoin) public {
        admin = msg.sender;
        nomeEntidade = _nome;
        ludicoin = _ludicoin;
    }
    
    
    //INICIO ALUNO
    
    function cadastrarAluno(string nomeCompleto, uint cpf,
        uint matricula, string curso) public {

        alunos[msg.sender].nomeCompleto = nomeCompleto;
        alunos[msg.sender].cpf = cpf;
        alunos[msg.sender].matricula = matricula;
        alunos[msg.sender].curso = curso;
        alunoIndice.push(msg.sender);
    }
    
    function obterAlunos() public view returns (address[]) {
        require(alunos[msg.sender].cpf != 0);
        return alunoIndice;
    }
    
    function obterAluno(address conta) public view returns (string, uint, uint, string, bytes32[]) {

        return (alunos[conta].nomeCompleto,
                alunos[conta].cpf,
                alunos[conta].matricula,
                alunos[conta].curso,
                alunos[conta].turmas
        );
    }
    
    function ehAluno(address conta) public view returns (bool) {
        return alunos[conta].matricula != 0;
    }
    
    function atualizarAluno(string nomeCompleto, uint cpf,
        uint matricula, string curso) public {
            alunos[msg.sender].nomeCompleto = nomeCompleto;
            alunos[msg.sender].cpf = cpf;
            alunos[msg.sender].matricula = matricula;
            alunos[msg.sender].curso = curso;
    }
    
    function inserirTurmaEmAluno(address aluno, bytes32 idTurma) private {
        alunos[aluno].turmas.push(idTurma);
    }
    
    //FIM ALUNO
    
    //INICIO PROFESSOR
    
    function inicializar(string nomeCompleto, uint cpf,
        uint cadastro, string departamento) public {
        require(msg.sender == admin && turmaIndice.length == 0);
        professores[msg.sender].nomeCompleto = nomeCompleto;
        professores[msg.sender].cpf = cpf;
        professores[msg.sender].cadastro = cadastro;
        professores[msg.sender].departamento = departamento;
        professorIndice.push(msg.sender);
    }
    
    function requisitarCadastroProfessor(string nomeCompleto, uint cpf,
        uint cadastro, string departamento) public {

        requisicoesProfessor.push(Requisicao(
            msg.sender,
            nomeCompleto, 
            cpf, 
            cadastro, 
            departamento)
        );
    }
    
    function aceitarProfessor(uint indice) public {
        require(professores[msg.sender].cadastro != 0);
        
        professores[requisicoesProfessor[indice].conta].nomeCompleto = requisicoesProfessor[indice].nomeCompleto;
        professores[requisicoesProfessor[indice].conta].cpf = requisicoesProfessor[indice].cpf;
        professores[requisicoesProfessor[indice].conta].cadastro = requisicoesProfessor[indice].cadastro;
        professores[requisicoesProfessor[indice].conta].departamento = requisicoesProfessor[indice].departamento;
        
        professorIndice.push(requisicoesProfessor[indice].conta);
        requisicoesProfessor[indice] = requisicoesProfessor[requisicoesProfessor.length-1];
        requisicoesProfessor.length--;
    }
    
    function ehProfessor(address conta) public view returns (bool) {
        return professores[conta].cadastro != 0;
    }
    
    function obterProfessores() public view returns (address[]) {
        return professorIndice;
    }
    
    function obterRequisicoesProfessorComprimento() public view returns (uint) {
        return requisicoesProfessor.length;
    }
    
    function obterRequisicaoProfessorPorIndice(uint indice) public view returns (
        address, string, uint, uint, string) {
        return (
            requisicoesProfessor[indice].conta,
            requisicoesProfessor[indice].nomeCompleto,
            requisicoesProfessor[indice].cpf,
            requisicoesProfessor[indice].cadastro,
            requisicoesProfessor[indice].departamento
        );
    }
    
    function obterProfessor(address conta) public view returns (string, uint, uint, string) {
        return (professores[conta].nomeCompleto,
                professores[conta].cpf,
                professores[conta].cadastro,
                professores[conta].departamento
        );
    }
    
    function atualizarProfessor(address conta, string nomeCompleto, uint cpf,
        uint cadastro, string departamento) public {
            require(msg.sender == conta);
            professores[conta].nomeCompleto = nomeCompleto;
            professores[conta].cpf = cpf;
            professores[conta].cadastro = cadastro;
            professores[conta].departamento = departamento;
    }
    
    function obterTurmasDoProfessor(address professor) public view returns (bytes32[]) {
        return professores[professor].turmas;
    }
    
    //FIM PROFESSOR
    
    //INICIO Disciplina
    
    uint32 private proximoIDDisciplina = 0;
    
    function inserirDisciplina(string codigoDaDisciplina, uint creditos,
        string nome, uint taxaCambio) public somenteProfessor {
        require(taxaCambio <= 300);
            
        bytes32 novoID = bytes32(proximoIDDisciplina);
        
        disciplinas[novoID].idDisciplina = novoID;
        disciplinas[novoID].codigoDaDisciplina = codigoDaDisciplina;
        disciplinas[novoID].creditos = creditos;
        disciplinas[novoID].nome = nome;
        disciplinas[novoID].indice = disciplinaIndice.push(novoID)-1;
        disciplinas[novoID].taxaCambio = taxaCambio;
        proximoIDDisciplina++;
    }
    
    function obterDisciplinas() public view returns (bytes32[]) {
        return disciplinaIndice;
    }
    
    function obterDisciplina(bytes32 id) public view returns (bytes32, string, uint,
        string, uint, uint, uint) {
        return (disciplinas[id].idDisciplina,
                disciplinas[id].codigoDaDisciplina,
                disciplinas[id].creditos,
                disciplinas[id].nome,
                disciplinas[id].turmas.length,
                disciplinas[id].indice,
                disciplinas[id].taxaCambio
        );
    }
    
    function obterTurmasDaDisciplina(bytes32 id) public view returns (bytes32[]) {
        return disciplinas[id].turmas;
    }
    
    function atualizarDisciplina(bytes32 id, string codigoDaDisciplina, uint creditos,
        string nome, uint taxaCambio) public somenteProfessor {
            require(taxaCambio <= 300);
            disciplinas[id].codigoDaDisciplina = codigoDaDisciplina;
            disciplinas[id].creditos = creditos;
            disciplinas[id].nome = nome;
            disciplinas[id].taxaCambio = taxaCambio;
    }
    
    function removerDisciplina(bytes32 id) public somenteProfessor {
        require(disciplinas[id].turmas.length == 0);
        
        uint indiceRemover = disciplinas[id].indice;
        bytes32 ultimaDisciplina = disciplinaIndice[disciplinaIndice.length-1];
        disciplinaIndice[indiceRemover] = ultimaDisciplina;
        disciplinas[ultimaDisciplina].indice = indiceRemover;
        disciplinaIndice.length--;
    }
    
    //FIM DISCIPLINA
    
    //INICIO TURMA
    
    uint private proximoIDTurma = 0;
    
    function cadastrarTurma(bytes32 idDisciplina, string horario, string sala, uint quantidadeUnidades, string periodo)
        public somenteProfessor {
            
        inserirTurma(idDisciplina, msg.sender, horario, sala, quantidadeUnidades, periodo);
        bytes32 idTurma = turmaIndice[turmaIndice.length-1];
        disciplinas[idDisciplina].turmas.push(idTurma);
        professores[msg.sender].turmas.push(idTurma);
    }
    
    uint private proximoIDUnidade = 0;
    
    function inserirUnidade(bytes32 idTurma) public {
        require(msg.sender == turmas[idTurma].professor 
                || msg.sender == address(this));
        bytes32 novoID = bytes32(proximoIDUnidade);
        
        unidades[novoID].idUnidade = novoID;
        unidades[novoID].idTurma = idTurma;
        
        turmas[idTurma].unidades.push(novoID);
        
        proximoIDUnidade++;
    }
    
    function inserirTurma(bytes32 idDisciplina, address professor,
        string horario, string sala, uint quantidadeUnidades, string periodo) private {
            
        bytes32 novoID = bytes32(proximoIDTurma);
        
        turmas[novoID].idTurma = novoID;
        turmas[novoID].idDisciplina = idDisciplina;
        turmas[novoID].professor = professor;
        turmas[novoID].horario = horario;
        turmas[novoID].sala = sala;
        turmas[novoID].aberta = true;
        turmas[novoID].periodo = periodo;
        turmas[novoID].indice = turmaIndice.push(novoID) - 1;
        for (uint i=0; i<quantidadeUnidades; i++) {
            inserirUnidade(novoID);
        }

        proximoIDTurma++;
    }
    
    function obterTurmas() public view returns (bytes32[]) {
        return turmaIndice;
    }
    
    function comprimentoTurmas() public view returns (uint) {
        return turmaIndice.length;
    }
    
    function obterIDTurma(uint indice) public view returns(bytes32) {
        return turmaIndice[indice];
    }
    
    function obterTurma(bytes32 id) public view returns (bytes32, bytes32, address,
        string, string, uint, string) {
            
        return (turmas[id].idTurma,
                turmas[id].idDisciplina,
                turmas[id].professor,
                turmas[id].horario,
                turmas[id].sala,
                turmas[id].participantes.length,
                turmas[id].periodo
        );
    }
    
    function obterUnidadesDaTurma(bytes32 id) public view returns (uint) {
        return turmas[id].unidades.length;
    }
    
    function obterUnidadeTurma(bytes32 idTurma, uint unidade) public view returns (bytes32[]) {
        bytes32 idUnidade = turmas[idTurma].unidades[unidade];
        
        return (
            unidades[idUnidade].atividades
        );
    }
    
    function obterIdUnidadesDaTurma(bytes32 idTurma) public view returns (bytes32[]) {
        return turmas[idTurma].unidades;
    }
    
    function obterBonusLudicoin(bytes32 idUnidade, address aluno) public view returns (uint) {
        return unidades[idUnidade].bonusLudicoin[aluno];
    }
    
    function obterParticipantes(bytes32 idTurma) public view returns (address[]) {
        return turmas[idTurma].participantes;
    }
    
    function obterIndiceTurma(bytes32 id) public view returns (uint) {
        return turmas[id].indice;
    }
    
    function atualizarTurma(bytes32 id, 
        string horario, string sala, string periodo, bool aberta) public {
            require(msg.sender == turmas[id].professor);
            
            turmas[id].horario = horario;
            turmas[id].sala = sala;
            turmas[id].periodo = periodo;
            turmas[id].aberta = aberta;
    }
    
    function requisitarMatriculaNaTurma(bytes32 idTurma) public {
        require(alunos[msg.sender].matricula != 0);
        
        requisicoesDeMatricula[idTurma].push(msg.sender);
    }
    
    function matricularNaTurma(bytes32 idTurma, uint indice) public somenteProfessor {
        require(msg.sender == turmas[idTurma].professor);
        
        turmas[idTurma].participantes.push(requisicoesDeMatricula[idTurma][indice]);
        inserirTurmaEmAluno(requisicoesDeMatricula[idTurma][indice], idTurma);
        
        requisicoesDeMatricula[idTurma][indice] = requisicoesDeMatricula[idTurma][requisicoesDeMatricula[idTurma].length-1];
        requisicoesDeMatricula[idTurma].length--;
    }
    
    function obterRequisicoesMatricula(bytes32 idTurma) public view returns (address[]) {
        return requisicoesDeMatricula[idTurma];
    }
    
    
    function removerUnidade(bytes32 idTurma) public  {
        require(msg.sender == turmas[idTurma].professor
                    || msg.sender == address(this));
        
        bytes32 unidade = turmas[idTurma].unidades[turmas[idTurma].unidades.length-1];
        require(unidades[unidade].atividades.length == 0);
        
        turmas[idTurma].unidades.length--;
    }
    
    /*
    function removerTurma(address _professor, uint indiceTurmaProfessor) public {
        
        bytes32 idTurma = professores[_professor].turmas[indiceTurmaProfessor];
        
        require(turmas[idTurma].unidades.length == 0 
                    && turmas[idTurma].participantes.length == 0);
        require(msg.sender == turmas[idTurma].professor
                    || msg.sender == address(this));
                    
                    
        turmaIndice[turmas[idTurma].indice] = turmaIndice[turmaIndice.length-1];
        turmaIndice.length--;
                    
        professores[_professor].turmas[indiceTurmaProfessor] = professores[_professor].turmas[professores[_professor].turmas.length-1];
        professores[_professor].turmas.length--;
    }*/
    
    //FIM TURMA
    
    //INICIO ATIVIDADE
    
    uint private proximoIDAtividade = 0;
    
    function cadastrarAtividade (bytes32 idTurma, string nome, uint unidade, string prazo) public {
        bytes32 idUnidade = turmas[idTurma].unidades[unidade];
        inserirAtividade(idUnidade, nome, prazo);
        unidades[idUnidade].atividades.push(atividadeIndice[atividadeIndice.length-1]);
    }
    
    function inserirAtividade(bytes32 idUnidade, string nome, string prazo) private {
            
        bytes32 novoID = bytes32(proximoIDAtividade);
        
        atividades[novoID].idAtividade = novoID;
        atividades[novoID].idUnidade = idUnidade;
        atividades[novoID].nome = nome;
        atividades[novoID].prazo = prazo;
        atividadeIndice.push(novoID);
        proximoIDAtividade++;
    }
    
    function obterAtividades() public view returns (bytes32[]) {
        return atividadeIndice;
    }
    
    function obterAtividade(bytes32 id) public view returns (bytes32, bytes32, string,
        uint, string) {
            
        return (atividades[id].idAtividade,
                atividades[id].idUnidade,
                atividades[id].nome,
                atividades[id].indice,
                atividades[id].prazo
        );
    }
    
    function cadastrarAtividadeRealizada(bytes32 atividade, address aluno,
        uint nota) public {
        
        require(alunos[aluno].matricula != 0 
                && atividades[atividade].atividadesRealizadas[aluno].nota == 0);
            
        gerarLudicoins(aluno, atividade, nota);
            
        atividades[atividade].atividadesRealizadas[aluno].nota = nota;
        atividades[atividade].atividadesRealizadas[aluno].data = now;
    }
    
    function obterAtividadeRealizada(bytes32 idAtividade, address aluno) public view returns (uint, uint) {
        return (
            atividades[idAtividade].atividadesRealizadas[aluno].nota,
            atividades[idAtividade].atividadesRealizadas[aluno].data
        );
    }
    

    function notaUnidade(address aluno, bytes32 idUnidade) public view returns (uint) {
        uint somatorio = 0;
        bytes32 idAtividade;

        for (uint i=0; i<unidades[idUnidade].atividades.length; i++) {
            idAtividade = unidades[idUnidade].atividades[i];
            somatorio += atividades[idAtividade].atividadesRealizadas[aluno].nota;
        }
        
        somatorio += unidades[idUnidade].bonusLudicoin[aluno];
        
        return somatorio;
    }
    
    
    function gerarLudicoins(address aluno, bytes32 atividade, uint novaNota) private {
        bytes32 idTurma = unidades[atividades[atividade].idUnidade].idTurma;
        bytes32 idDisciplina = turmas[idTurma].idDisciplina;
        bytes32 idUnidade = atividades[atividade].idUnidade;
        
        uint taxaCambio = disciplinas[idDisciplina].taxaCambio;
        uint acumuladoNaUnidade = notaUnidade(aluno, idUnidade);
        uint magnitude = 10 ** 16;
        
        if(acumuladoNaUnidade > 1000) {
            Ludicoin(ludicoin).mintToken(aluno,(novaNota*magnitude/100)*taxaCambio);
        } else if(acumuladoNaUnidade + novaNota > 1000) {
            Ludicoin(ludicoin).mintToken(aluno,((acumuladoNaUnidade + novaNota - 1000)*magnitude/100)*taxaCambio);
        }
        
    }
    
    
    function gastarLudicoins(address aluno, bytes32 idUnidade, uint quantidadeLudicoins) public {
        bytes32 idTurma = unidades[idUnidade].idTurma;
        bytes32 idDisciplina = turmas[idTurma].idDisciplina;
        
        uint taxaCambio = disciplinas[idDisciplina].taxaCambio;
        uint ludicoinsGastos = quantidadeLudicoins;
        
        uint nota = notaUnidade(aluno, idUnidade);
        require(nota < 1000);
        
        uint magnitude = 10 ** 16;
        uint previa = ((ludicoinsGastos / taxaCambio) * 100)/magnitude;
        

        if(nota + previa > 1000)
            ludicoinsGastos = (1000 - nota)*magnitude / 100 * taxaCambio;
            
        require(unidades[idUnidade].bonusLudicoin[aluno] + ((ludicoinsGastos / taxaCambio) * 100)/magnitude <= 300);
        Ludicoin(ludicoin).gastar(aluno, ludicoinsGastos);
        unidades[idUnidade].bonusLudicoin[aluno] += ((ludicoinsGastos / taxaCambio) * 100)/magnitude;
    }
    
}