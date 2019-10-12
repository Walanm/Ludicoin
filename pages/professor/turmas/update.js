import React, { Component } from 'react';
import LayoutProfessor from '../../../components/LayoutProfessor';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';

/*
    Página para atualização dos dados de uma turma
*/

class TurmaEdicao extends Component {
    
    // Carrega dados da turma
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let turmaID = (props.query.id).toString(16);
        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

        let turma = await ludiex.methods.obterTurma(turmaID).call();
        turma[5] = turma[5].toNumber();

        let unidades = await ludiex.methods.obterUnidadesDaTurma(turmaID).call();
        unidades = unidades.toNumber();

        const disciplina = await ludiex.methods.obterDisciplina(turma[1]).call();
        const professor = await ludiex.methods.obterProfessor(turma[2]).call();

        return {
            conta: conta,
            nome: entidade,
            disciplina: disciplina,
            professor: professor[0],
            turma: turma,
            unidades: unidades
        };
    }

    state = {
        sala: this.props.turma[4],
        horario: this.props.turma[3],
        periodo: this.props.turma[6],
        errorMessage: '',
        loading: false,
        loadingPage: false
    };

    carregar() {
        this.setState({ loadingPage: true });
    }

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            await ludiex.methods.atualizarTurma(this.props.turma[0],
                    this.state.horario, this.state.sala, this.state.periodo, true)
                .send({
                    from: contas[0]
                });
            
            Router.pushRoute(`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/atividades/show`);

        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    onClickAdd = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            await ludiex.methods.inserirUnidade(this.props.turma[0])
                .send({ from: contas[0]});

                window.location.reload();            
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    onClickMinus = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            if(this.props.unidades == 0)
                this.setState({ errorMessage: "Essa turma não possui nenhuma unidade." });
            else {
                await ludiex.methods.removerUnidade(this.props.turma[0]).send({ from: contas[0]});
                window.location.reload();
            }
                
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loadingPage}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Editar turma</b></center></h1>
                    <p><b>Disciplina: </b>{this.props.disciplina[1]} - {this.props.disciplina[3]}</p>
                    <p><b>Professor: </b> {this.props.professor}</p>

                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Período</label>
                            <Input 
                                value={this.state.periodo}
                                onChange={event => this.setState({ periodo: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Horário</label>
                            <Input 
                                value={this.state.horario}
                                onChange={event => this.setState({ horario: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Sala</label>
                            <Input 
                                value={this.state.sala}
                                onChange={event => this.setState({ sala: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <div><label><b>Quantidade de unidades: </b> {this.props.unidades} &emsp;</label>
                            <Button
                                size='mini'
                                icon="minus circle"
                                color="red"
                                onClick={this.onClickMinus}
                            />
                            <label>&nbsp;&nbsp;</label>
                            <Button
                                size='mini'
                                icon="add circle"
                                color="green"
                                onClick={this.onClickAdd}
                            />
                            
                            </div>
                        </Form.Field>

                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary>Criar</Button>
                    </Form>
            </LayoutProfessor>
        );
    };

};

export default TurmaEdicao;