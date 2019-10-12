import React, { Component } from 'react';
import { Card, Grid, Button, Form } from 'semantic-ui-react';
import ludiex from '../../../../ethereum/ludiex';
import LayoutProfessor from '../../../../components/LayoutProfessor';
import { Router, Link } from '../../../../routes';
import web3 from '../../../../ethereum/web3';

/*
    Página para aceitação de matrícula de um aluno em uma turma
    Lista todas as solicitações de matrícula nessa turma
*/

class MatriculaNaTurma extends Component {
    
    // Carrega lista de dados de alunos que solicitaram matrícula na turma
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let turmaID = (props.query.id).toString(16);
        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;


        const requisicoes = await ludiex.methods.obterRequisicoesMatricula(turmaID).call();

        let alunos = await Promise.all(
            Array(parseInt(requisicoes.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAluno(requisicoes[index]).call();
                })
        );

        alunos.map((element) => {
            element[1] = element[1].toNumber();
            element[2] = element[2].toNumber();
        });

        return {
            conta: conta,
            nome: entidade,
            requisicoes: requisicoes,
            alunos: alunos,
            turma: turmaID
        };
    }

    state = {
        errorMessage: '',
        loading: false,
        loadingPage: false
    }

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

        try {
            const contas = await web3.eth.getAccounts();

            await ludiex.methods.matricularNaTurma(this.props.turma, indice)
                                    .send({from: contas[0]});

            window.location.reload();

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });

    };



    renderRequisicoes() {
        const itens = this.props.alunos.map((element, index) => {
            return {
                header: (`${element[0]}`),
                meta: (`Conta: ${this.props.requisicoes[index]}`),
                description: (
                    <div>
                        <p>CPF: {this.formatarCPF(element[1])} <br/>
                        Matrícula: {element[2]}<br/>
                        Curso: {element[3]}</p>
                    </div>
                ),
                extra: (
                    <Form onSubmit={this.onSubmit.bind(this, index)}>
                        <Button loading={this.state.loading} floated='right' basic color='green'>Aceitar matrícula</Button>
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

                    {this.renderRequisicoes()}
            </LayoutProfessor>
        );
    };

};

export default MatriculaNaTurma;