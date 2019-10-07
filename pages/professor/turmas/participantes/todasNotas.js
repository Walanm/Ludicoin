import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header, Table } from 'semantic-ui-react';
import { Link } from '../../../../routes';
import ludiex from '../../../../ethereum/ludiex';
import LayoutProfessor from '../../../../components/LayoutProfessor';
import web3 from '../../../../ethereum/web3';



class TodasNotas extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let turmaID = (props.query.id).toString(16);
        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;


        const alunos = await ludiex.methods.obterParticipantes(turmaID).call();

        let dadosAlunos = await Promise.all(
            Array(parseInt(alunos.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAluno(alunos[index]).call();
                })
        );

        dadosAlunos.map((element) => {
            element[1] = element[1].toNumber();
            element[2] = element[2].toNumber();
        });

        const turma = await ludiex.methods.obterTurma(turmaID).call();
        const disciplina = await ludiex.methods.obterDisciplina(turma[1]).call();
        const idUnidades = await ludiex.methods.obterIdUnidadesDaTurma(turmaID).call();

        let alunoUnidade = [];
        for(let i = 0; i < alunos.length; i++){
            for(let j = 0; j < idUnidades.length; j++) {
                alunoUnidade.push([alunos[i], idUnidades[j]]);
            }
        }

        let notas = await Promise.all(
            Array(parseInt(alunoUnidade.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.notaUnidade(alunoUnidade[index][0], alunoUnidade[index][1]).call();
                })
        );

        let notasNumber = [];
        notas.map((element) => {
            notasNumber.push(element.toNumber());
        });

        let bonusLudicoinUnidades = await Promise.all(
            Array(parseInt(alunoUnidade.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterBonusLudicoin(alunoUnidade[index][1], alunoUnidade[index][0]).call();
                })
        );

        let bonusLudicoinNumber = [];
        bonusLudicoinUnidades.map((element) => {
            bonusLudicoinNumber.push(element.toNumber());
        });

                
        return {
            conta: conta,
            nome: entidade,
            turma: turma,
            disciplina: disciplina,
            alunos: dadosAlunos,
            unidades: idUnidades,
            notas: notasNumber,
            bonusLudicoinUnidades: bonusLudicoinNumber
        };
    }

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
    }

    colorirNota(indice, nota) {
        if(this.props.bonusLudicoinUnidades[indice] > 0) {
            return <font color="#61D871">{nota}</font>
        } else {
            return nota
        }
    }


    renderLinha() {
        const {Row, Cell} = Table;
        let linha = [];
        let indiceGeral = 0;
        let notaOficial = 0;
        let somatorioTurma = 0;

        this.props.alunos.map((element, index) => {
            let unidades = [];
            somatorioTurma = 0;

            for(let i = 0; i < this.props.unidades.length; i++){
                notaOficial = (this.props.notas[indiceGeral] > 1000) ? 1000 : this.props.notas[indiceGeral];
                unidades.push(<Cell>{this.colorirNota(indiceGeral, (notaOficial/ 100.0).toFixed(1))}</Cell>);
                indiceGeral++;
                somatorioTurma += notaOficial;
            }

            unidades.push(<Cell>{(somatorioTurma / (100.0 * this.props.unidades.length)).toFixed(1)}</Cell>);

            linha.push(
                <Row key={index}>
                    <Cell>{element[2]}</Cell>
                    <Cell>{element[0]}</Cell>
                    {unidades}
                </Row>
            );

        });

        return linha;
    }

    renderHeaderCell(){
        const {HeaderCell} = Table;
        let headers = [];
        for(let i = 0; i < this.props.unidades.length; i++)
            headers.push(<HeaderCell>{i+1}</HeaderCell>);

        return headers;
    }


    render() {
        const { Header, Row, HeaderCell, Body} = Table;

        return (
                 <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loading}>
                    <h2>{this.props.nome}</h2><hr />
                        <h1><center><b>Notas</b>
                            <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/participantes/matriculados`}>
                                    <Button
                                        floated="right"
                                        content="Voltar"
                                        color="blue"
                                    />
                            </Link>
                        </center></h1>
                        <p><b>{this.props.disciplina[1]} - {this.props.disciplina[3]} ({this.props.turma[6]} - ID: {parseInt(this.props.turma[0], 16)})</b></p>
                        <Table>
                        <Header>
                            <Row>
                                <HeaderCell>Matrícula</HeaderCell>
                                <HeaderCell>Nome</HeaderCell>
                                {this.renderHeaderCell()}
                                <HeaderCell>Média</HeaderCell>
                            </Row>
                        </Header>
                        <Body>
                            {this.renderLinha()}
                        </Body>
                    </Table>
                </LayoutProfessor>
        );
    };

};

export default TodasNotas;