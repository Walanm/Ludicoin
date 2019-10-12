import React, { Component } from 'react';
import LayoutProfessor from '../../../components/LayoutProfessor';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';

/*
    Página para atualização dos dados de uma disciplina
*/

class DisciplinaEditar extends Component {
    
    // Carrega dados da disciplina
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let disciplinaID = (props.query.id).toString(16);
        if(!isNaN(disciplinaID) && disciplinaID.length < 64)
        disciplinaID = '0x' + '0'.repeat(64 - disciplinaID.length) + disciplinaID;

        let disciplina = await ludiex.methods.obterDisciplina(disciplinaID).call();
        disciplina[2] = disciplina[2].toNumber();
        disciplina[6] = disciplina[6].toNumber();

        return {
            conta: conta,
            nome: entidade,
            disciplina: disciplina
        };
    }

    state = {
        nomeDisciplina: this.props.disciplina[3],
        codigoDisciplina: this.props.disciplina[1],
        creditos: this.props.disciplina[2],
        taxaCambio: (this.props.disciplina[6]/100.0),
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


            await ludiex.methods.atualizarDisciplina(this.props.disciplina[0], this.state.codigoDisciplina,
                    this.state.creditos, this.state.nomeDisciplina, parseInt(this.state.taxaCambio*100))
                .send({
                    from: contas[0]
                });
            
            Router.pushRoute(`/professor/${contas[0]}/disciplinas/show`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    onClick = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();


            await ludiex.methods.removerDisciplina(this.props.disciplina[0])
                .send({
                    from: contas[0]
                });
            
            Router.pushRoute(`/professor/${contas[0]}/disciplinas/show`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loadingPage}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Editar disciplina</b>
                        <Button
                            floated="right"
                            icon="remove"
                            color="red"
                            content="Remover"
                            onClick={this.onClick}
                        />
                    </center></h1>

                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Nome</label>
                            <Input 
                                value={this.state.nomeDisciplina}
                                onChange={event => this.setState({ nomeDisciplina: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Código da disciplina</label>
                            <Input 
                                value={this.state.codigoDisciplina}
                                onChange={event => this.setState({ codigoDisciplina: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Créditos</label>
                            <Input 
                                value={this.state.creditos}
                                onChange={event => this.setState({ creditos: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Ludicoins por ponto na disciplina</label>
                            <Input 
                                value={this.state.taxaCambio}
                                onChange={event => this.setState({ taxaCambio: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary>Atualizar</Button>
                    </Form>
            </LayoutProfessor>
        );
    };

};

export default DisciplinaEditar;