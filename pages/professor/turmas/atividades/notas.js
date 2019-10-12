import React, { Component } from 'react';
import { Card, Message, Button, Form, Input, Table } from 'semantic-ui-react';
import { Link } from '../../../../routes';
import ludiex from '../../../../ethereum/ludiex';
import LayoutProfessor from '../../../../components/LayoutProfessor';
import web3 from '../../../../ethereum/web3';


/*
    Página que lista e permite atribuir as notas dos alunos em uma dada atividade
*/
class NotasAtividade extends Component {
    
    // Carrega e relaciona Atividade, Aluno e AtividadesRealizadas(notas)
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let turmaID = (props.query.id).toString(16);
        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

        const turma = await ludiex.methods.obterTurma(turmaID).call();

        const disciplina = await ludiex.methods.obterDisciplina(turma[1]).call();

        const alunosID = await ludiex.methods.obterParticipantes(turmaID).call();

        let idAtividade = (props.query.idatividade).toString(16);
        if(!isNaN(idAtividade) && idAtividade.length < 64)
            idAtividade = '0x' + '0'.repeat(64 - idAtividade.length) + idAtividade;

        const dadosAtividade = await ludiex.methods.obterAtividade(idAtividade).call();

        let notas = await Promise.all(
            Array(parseInt(alunosID.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAtividadeRealizada(idAtividade, alunosID[index]).call();
                })
        );

        notas.map((element) => {
            element[0] = element[0].toNumber();
        });

        let alunos = await Promise.all(
            Array(parseInt(alunosID.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAluno(alunosID[index]).call();
                })
        );
        
        alunos.map((element) => {
            element[1] = element[1].toNumber();
            element[2] = element[2].toNumber();
        });
        
        return {
            conta: conta,
            nome: entidade,
            atividade: idAtividade,
            disciplina: disciplina,
            turma: turma,
            alunos: alunos,
            alunosID: alunosID,
            notas: notas,
            nomeAtividade: dadosAtividade[2]
        };
    }

    state = {
        nota: 0,
        errorMessage: '',
        loading: false,
        loadingPage: false
    };

    carregar() {
        this.setState({ loadingPage: true });
    }

    onSubmit = async (indice, event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            await ludiex.methods.cadastrarAtividadeRealizada(this.props.atividade, this.props.alunosID[indice],
                parseInt(this.state.nota*100)).send({from: contas[0]});;

            window.location.reload();

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });

    };



    renderAlunos() {
        const {Row, Cell} = Table;
        let linhas = [];

        this.props.alunos.map((element, index) => {
            linhas.push(
                <Row key={index} positive={!!this.props.notas[index][0]} disabled={!!this.props.notas[index][0]}>

                    <Cell>{element[2]}</Cell>
                    <Cell>{element[0]}</Cell>
                    <Cell>
                        <Input 
                            placeholder={(this.props.notas[index][0] / 100.0).toFixed(1)}
                            onChange={event => this.setState({ nota: event.target.value })}
                        />
                    </Cell>
                    <Cell>
                    <Form onSubmit={this.onSubmit.bind(this, index)}>
                        <Button
                            key={index}
                            icon="checkmark"
                            color="green"
                            content="Dar nota"
                            loading={this.state.loading}
                        />
                    </Form>

                    </Cell>
                </Row>
                
            );
        });

        return linhas;
    }


    render() {
        const { Header, Row, HeaderCell, Body} = Table;

        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loadingPage}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Notas</b>
                        <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/atividades/show`}>
                                <Button
                                    floated="right"
                                    content="Voltar"
                                    color="blue"
                                />
                        </Link>
                    </center></h1>
                    <p><b>{this.props.turma[6]} - {this.props.disciplina[1]} {this.props.disciplina[3]} / Tarefa: {this.props.nomeAtividade}</b></p>


                    <Table>
                    <Header>
                        <Row>
                            <HeaderCell>Matrícula</HeaderCell>
                            <HeaderCell>Aluno</HeaderCell>
                            <HeaderCell>Nota</HeaderCell>
                            <HeaderCell>Avaliar</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderAlunos()}
                    </Body>
                    </Table>
                    <Message  hidden={!this.state.errorMessage} header="Oops!" content={this.state.errorMessage} />
            </LayoutProfessor>
        );
    };

};

export default NotasAtividade;