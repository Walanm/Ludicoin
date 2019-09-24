import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import { Router, Link } from '../routes';
import ludiex from '../ethereum/ludiex';

class CadastroProfessor extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        return {
            conta: conta,
            nome: entidade,
        };
    }

    state = {
        nomeAluno: '',
        cpf:'',
        matricula:'',
        curso:'',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            if(this.state.nomeAluno == '')
                this.setState({ errorMessage: 'Preencha seu nome completo'});
            else if (this.state.matricula == '' || this.state.matricula == 0)
                this.setState({ errorMessage: 'Matrícula deve ser diferente de 0'});
            else if (this.state.cpf == '' || this.state.curso == '')
                this.setState({ errorMessage: 'Todos os campos são obrigatórios'});
            else {
                await ludiex.methods.cadastrarAluno(this.state.nomeAluno,
                    this.state.cpf, this.state.matricula, this.state.curso)
                .send({
                    from: contas[0]
                });
            
                Router.pushRoute(`/`);
            }
            
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    render() {
        return (
                    <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh'}}>
                        <Layout>
                        <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}></Grid.Column>
                            <Grid.Column width={11} position="center" >
                                <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                                    <h2>{this.props.nome}</h2><hr />
                                    <h1><center><b>Cadastrar aluno</b></center></h1>
                                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                                            <Form.Field>
                                            <label>Nome completo</label>
                                            <Input 
                                                value={this.state.nomeAluno}
                                                onChange={event => this.setState({ nomeAluno: event.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>CPF</label>
                                            <Input 
                                                value={this.state.cpf}
                                                onChange={event => this.setState({ cpf: event.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Matrícula</label>
                                            <Input 
                                                value={this.state.matricula}
                                                onChange={event => this.setState({ matricula: event.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Curso</label>
                                            <Input 
                                                value={this.state.curso}
                                                onChange={event => this.setState({ curso: event.target.value })}
                                            />
                                        </Form.Field>
                                        <Message error header="Oops!" content={this.state.errorMessage} />
                                        <Button loading={this.state.loading} primary>Cadastrar</Button>
                                    </Form>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                        
                        </Layout>
                    </div>
        );
    };

};

export default CadastroProfessor;