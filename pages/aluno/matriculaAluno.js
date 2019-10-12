import React, { Component } from 'react';
import { Card, Grid, Button, Checkbox, Form, Table } from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import ludiex from '../../ethereum/ludiex';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';

/*
    Página para realizar matrícula do aluno nas turmas das disciplinas
*/


class MatriculaAluno extends Component {
    
    // Relaciona disciplinas, professores e turmas
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        const disciplinas = await ludiex.methods.obterDisciplinas().call();

        const resumoDisciplinas = await Promise.all(
            Array(parseInt(disciplinas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterDisciplina(disciplinas[index]).call();
                })
        );

        resumoDisciplinas.map((element) => {
            element[4] = element[4].toNumber();
        });

        const matrizTurmas = await Promise.all(
            Array(parseInt(disciplinas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterTurmasDaDisciplina(disciplinas[index]).call();
            })
        );

        let turmas = [];
        for(let i = 0; i < disciplinas.length; i++) {
            turmas = turmas.concat(matrizTurmas[i]);
        }


        let dadosTurmas = await Promise.all(
            Array(parseInt(turmas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterTurma(turmas[index]).call();
                })
        );

        dadosTurmas.map((element) => {
            element[5] = element[5].toNumber();
        });

        const professores = await Promise.all(
            Array(parseInt(turmas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterProfessor(dadosTurmas[index][2]).call();
                })
        );
        
        return {
            conta: conta,
            nome: entidade,
            disciplinas: resumoDisciplinas,
            turmas: dadosTurmas,
            professores: professores
        };
    }

    state = {
        errorMessage: '',
        loading: false,
        selecionados: []
    };


    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();
            console.log(this.state.selecionados);
            console.log(this.props.turmas);

            for(let i = 0; i < this.state.selecionados.length; i++) {
                await ludiex.methods.requisitarMatriculaNaTurma(this.props.turmas[this.state.selecionados[i]][0])
                    .send({
                        from: contas[0]
                    });
            }

            Router.pushRoute(`/aluno/${contas[0]}`);
            

        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    handleChange(event, optionID) {
        let selecao = this.state.selecionados;
        const indice = this.state.selecionados.indexOf(optionID);

        if(indice > -1){
            selecao.splice(indice, 1);
            this.setState({ selecionados: selecao});
            console.log('Deletar');
        } else {
            selecao.push(optionID);
            this.setState({ selecionados: selecao});
            console.log('Incluir');
        }

        console.log(this.state.selecionados);
    }

    renderLinhaTurma(index, ajusteDeIndice) {
        const {Row, Cell} = Table;
        let linhasTurma = [];

        for (let i = 0; i < this.props.disciplinas[index][4]; i++) {
            linhasTurma.push(
                <Row key={ajusteDeIndice+i}>
                    <Cell>{this.props.turmas[ajusteDeIndice-index-1+i][6]}</Cell>
                    <Cell>{parseInt(this.props.turmas[ajusteDeIndice-index-1+i][0], 16)}</Cell>
                    <Cell>{this.props.professores[ajusteDeIndice-index-1+i][0]}</Cell>
                    <Cell>{this.props.turmas[ajusteDeIndice-index-1+i][3]}</Cell>
                    <Cell>{this.props.turmas[ajusteDeIndice-index-1+i][4]}</Cell>
                    <Cell>
                        <Checkbox onChange={e => this.handleChange(e, ajusteDeIndice-index-1+i)} />
                    </Cell>
                </Row>
            );
        }


        return linhasTurma;
    }


    renderLinhaDisciplina() {
        const {Row, Cell} = Table;
        let linhasDisciplina = [];
        let indiceGeral = 0;

        this.props.disciplinas.map((element, index) => {
            indiceGeral = linhasDisciplina.length;
            linhasDisciplina.push(<Row key={indiceGeral}><Cell colSpan="6" style={{ 'backgroundColor': '#542CA9', 'color': '#ffffff' }}><b>{element[1]} - {element[3]}</b></Cell></Row>);
            let linhasTurma =  this.renderLinhaTurma(index, indiceGeral+1);
            for(let i = 0; i < linhasTurma.length; i++) {
                linhasDisciplina.push(linhasTurma[i]);
            }
        });

        return linhasDisciplina;
    }


    render() {
        const { Header, Row, HeaderCell, Body} = Table;

        return (
            <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh'}}>
                <Layout>
                    <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                        <h2>{this.props.nome}</h2><hr />
                            <h1><center><b>Todas as turmas</b>
                                <Link route={`/aluno/${this.props.conta}`}>
                                        <Button
                                            floated="right"
                                            content="Voltar"
                                            color="blue"
                                        />
                                </Link>
                            </center></h1>

                            <Table>
                            <Header>
                                <Row>
                                    <HeaderCell>Período</HeaderCell>
                                    <HeaderCell>ID</HeaderCell>
                                    <HeaderCell>Professor</HeaderCell>
                                    <HeaderCell>Horário</HeaderCell>
                                    <HeaderCell>Local</HeaderCell>
                                    <HeaderCell>Selecionar</HeaderCell>
                                </Row>
                            </Header>
                            <Body>
                                {this.renderLinhaDisciplina()}
                            </Body>
                        </Table>
                        <Button loading={this.state.loading} onClick={this.onSubmit} color='green' floated="right">Solicitar matrículas</Button>
                    </div>
                </Layout>
            </div>
        );
    };

};

export default MatriculaAluno;