import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import { Router, Link } from '../routes';
import ludiex from '../ethereum/ludiex';

/*
    Página de cadastro de professor
*/

class CadastroProfessor extends Component {

    state = {
        nomeProfessor: '',
        cpf:'',
        cadastro:'',
        departamento:'',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            if(this.state.nomeProfessor == '')
                this.setState({ errorMessage: 'Preencha seu nome completo'});
            else if (this.state.cadastro == '' || this.state.cadastro == 0)
                this.setState({ errorMessage: 'Cadastro institucional deve ser diferente de zero'});
            else if (this.state.cpf == '' || this.state.departamento == '')
                this.setState({ errorMessage: 'Todos os campos são obrigatórios'});
            else {
                await ludiex.methods.requisitarCadastroProfessor(this.state.nomeProfessor,
                    this.state.cpf, this.state.cadastro, this.state.departamento)
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
                                    <h1><center><b>Cadastrar professor</b></center></h1>
                                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                                            <Form.Field>
                                            <label>Nome completo</label>
                                            <Input 
                                                value={this.state.nomeProfessor}
                                                onChange={event => this.setState({ nomeProfessor: event.target.value })}
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
                                            <label>Cadastro institucional</label>
                                            <Input 
                                                placeholder='Seu número de identificação na instituição, p. ex. 3216'
                                                value={this.state.cadastro}
                                                onChange={event => this.setState({ cadastro: event.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Departamento</label>
                                            <Input 
                                                value={this.state.departamento}
                                                onChange={event => this.setState({ departamento: event.target.value })}
                                            />
                                        </Form.Field>

                                        <Form.Field>
                                            <label>Você deve esperar até sua solicitação de cadastro ser aceita para poder entrar no sistema.</label>
                                        </Form.Field>

                                        <Message error header="Erro!" content={this.state.errorMessage} />
                                        <Button loading={this.state.loading} primary>Solicitar cadastro</Button>
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