import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';
import LayoutProfessor from '../../../components/LayoutProfessor';
import web3 from '../../../ethereum/web3';



class MostrarTodasTurmas extends Component {
    
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

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
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
                    <Cell>{this.props.turmas[ajusteDeIndice-index-1+i][5]} alunos</Cell>
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
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loading}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Todas as turmas</b>
                        <Link route={`/professor/${this.props.conta}/turmas/new`}>
                                <Button
                                    floated="right"
                                    content="Nova"
                                    icon="add circle"
                                    color="green"
                                />
                        </Link>
                        <Link route={`/professor/${this.props.conta}/turmas/show`}>
                                <Button
                                    floated="right"
                                    content="Minhas turmas"
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
                            <HeaderCell>Matriculados</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderLinhaDisciplina()}
                    </Body>
                </Table>
            </LayoutProfessor>
        );
    };

};

export default MostrarTodasTurmas;