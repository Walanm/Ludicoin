import React, { Component } from 'react';
import { Card, Grid, Button, Form } from 'semantic-ui-react';
import ludiex from '../../../ethereum/ludiex';
import LayoutProfessor from '../../../components/LayoutProfessor';
import { Router, Link } from '../../../routes';
import web3 from '../../../ethereum/web3';

class AceitarProfessor extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();
        const quantidadeRequisicoes = await ludiex.methods.obterRequisicoesProfessorComprimento().call();

        let dadosProfessores = await Promise.all(
            Array(parseInt(quantidadeRequisicoes))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterRequisicaoProfessorPorIndice(index).call();
                })
        );
        
        dadosProfessores = dadosProfessores.map((element, index) => {
            element[2] = element[2].toNumber();
            element[3] = element[3].toNumber();
            return element;
        });

        return {
            conta: conta,
            nome: entidade,
            quantidadeRequisicoes: quantidadeRequisicoes,
            itens: dadosProfessores,
        };
    }

    state = {
        errorMessage: '',
        loading: false,
        loadingPage: false
    };

    carregar() {
        this.setState({ loadingPage: true });
    }

    formatarCPF(entrada) {
        let cpfStr = entrada.toString();
        if(!isNaN(cpfStr) && cpfStr.length < 11)
            cpfStr = '0'.repeat(11 - cpfStr.length) + cpfStr;
        cpfStr = cpfStr.slice(0,3) + "." + cpfStr.slice(3,6) + "." + cpfStr.slice(6,9) + "-" + cpfStr.slice(9);
        return cpfStr;
    }

    onSubmit = async (indice, event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        console.log("Apertou");

        try {
            const contas = await web3.eth.getAccounts();

            await ludiex.methods.aceitarProfessor(indice)
                                    .send({from: contas[0]});

            window.location.reload();

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });

    };



    renderProfessores() {
        const itens = this.props.itens.map((element, index) => {
            return {
                header: (`${element[1]}`),
                meta: (`Conta: ${element[0]}`),
                description: (
                    <div>
                        <p>CPF: {this.formatarCPF(element[2])} <br/>
                        Cadastro: {element[3]}<br/>
                        Departamento: {element[4]}</p>
                    </div>
                ),
                extra: (
                    <Form onSubmit={this.onSubmit.bind(this, index)}>
                        <Button loading={this.state.loading} floated='right' basic color='green'>Aceitar</Button>
                    </Form>
                ),
                fluid: true
            };
        });

        return <Card.Group items={itens} />;
    }

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loadingPage}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Solicitações</b></center></h1>

                    {this.renderProfessores()}
            </LayoutProfessor>
        );
    };

};

export default AceitarProfessor;