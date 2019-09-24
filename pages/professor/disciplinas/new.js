import React, { Component } from 'react';
import LayoutProfessor from '../../../components/LayoutProfessor';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';

class DisciplinaNova extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        return {
            conta: conta,
            nome: entidade,
        };
    }

    state = {
        nomeDisciplina: '',
        codigoDisciplina:'',
        creditos:'',
        taxaCambio:'',
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

            if (this.state.codigoDisciplina == '' || this.state.creditos == '' || this.state.nomeDisciplina == '' || this.state.taxaCambio == '')
                this.setState({ errorMessage: 'Todos os campos são obrigatórios'});
            else if (this.state.taxaCambio > 3)
                this.setState({ errorMessage: 'O valor máximo de Ludicoins por disciplina é 3.0'});
            else {
                await ludiex.methods.inserirDisciplina(this.state.codigoDisciplina,
                    this.state.creditos, this.state.nomeDisciplina, parseInt(this.state.taxaCambio*100))
                .send({
                    from: contas[0]
                });
            
                Router.pushRoute(`/professor/${contas[0]}/disciplinas/show`);
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
                    <h1><center><b>Nova disciplina</b></center></h1>

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
                                placeholder='p. ex. 1.5' 
                                value={this.state.taxaCambio}
                                onChange={event => this.setState({ taxaCambio: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary>Criar</Button>
                    </Form>
            </LayoutProfessor>
        );
    };

};

export default DisciplinaNova;