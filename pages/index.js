import React, { Component } from 'react';
import { Card, Grid, Message, Icon, Header } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link, Router } from "../routes";
import web3 from '../ethereum/web3';
import ludiex from '../ethereum/ludiex'; 

/*
    Página inicial da aplicação web
*/

class LudicoinIndex extends Component {
    state = {
        errorMessage: '',
        loading: false,
    };

    onClick = async (indice, event) => {
        event.preventDefault();

        this.setState({ errorMessage: '' });

        try {
            await ethereum.enable();
            const enderecos = await web3.eth.getAccounts();

            if(typeof enderecos[0] === 'undefined') {
                this.setState({ errorMessage: 'Você precisa estar logado no Metamask' });
            } else if (indice == 0) {
                const professor = await ludiex.methods.obterProfessor(enderecos[0]).call();

                if(professor[0] === '')
                    this.setState({ errorMessage: 'Você precisa estar cadastrado como professor e ter o cadastro aprovado' });
                else {
                    this.setState({ loading: true, errorMessage: '' });
                    Router.pushRoute(`/professor/${enderecos[0]}`);
                }
            } else if (indice == 1) {
                const aluno = await ludiex.methods.obterAluno(enderecos[0]).call();

                if(aluno[0] === '')
                    this.setState({ errorMessage: 'Você precisa estar cadastrado como aluno' });
                else {
                    this.setState({ loading: true, errorMessage: '' });
                    Router.pushRoute(`/aluno/${enderecos[0]}`);
                }
            } else if (indice == 2) {
                this.setState({ loading: true, errorMessage: '' });
                Router.pushRoute(`/cadastroProfessor`);
            } else if (indice == 3) {
                this.setState({ loading: true, errorMessage: '' });
                Router.pushRoute(`/cadastroAluno`);
            }

        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

    };

    renderCards() {
        return (
            <Card.Group centered>

                <Card onClick={this.onClick.bind(this, 0)} error={(!!this.state.errorMessage).toString()}
                    color='blue' style={{ 'backgroundColor': '#5386ED' }}>
                    <Header as='h2' icon>
                        <Icon circular inverted name='book' color='teal' />
                        Professor
                    </Header>
                </Card>
                
                <Card onClick={this.onClick.bind(this, 1)} color='blue' style={{ 'backgroundColor': '#5386ED' }}>
                    <Header as='h2' icon>
                        <Icon circular inverted name='address book' color='red' />
                        Aluno
                    </Header>
                </Card>

            </Card.Group>
            
        );
    }

    renderCadastros() {
        return (
            <Card.Group centered>
                <Card onClick={this.onClick.bind(this, 2)} error={(!!this.state.errorMessage).toString()}
                    color='blue' style={{ 'backgroundColor': '#b6e3ff' }}>
                    <Header as='h3' textAlign='center'>
                        Novo professor
                    </Header>
                </Card>
                
                <Card color='blue' onClick={this.onClick.bind(this, 3)} style={{ 'backgroundColor': '#b6e3ff' }}>
                    <Header as='h3' textAlign='center'>
                        Novo aluno
                    </Header>
                </Card>
            </Card.Group>
        );
    }

    // #b6e3ff

    render() {
        return (
        <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' }}>
          <Layout carregando={this.state.loading}>
            <h3><center>Escolha o seu tipo de acesso:</center></h3>
            <Grid position="center" >
              <Grid.Row>
                <Grid.Column width={16}>{this.renderCards()}</Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>{this.renderCadastros()}</Grid.Column>
                <Message hidden={!this.state.errorMessage} color='red' header="Erro!" content={this.state.errorMessage} />
              </Grid.Row>

                <Grid.Row width={38}>
                <Grid.Column>
                </Grid.Column>
                </Grid.Row>
            </Grid>
          </Layout>
        </div>

        );
    }
    
}


export default LudicoinIndex;