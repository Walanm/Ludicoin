import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header, Table } from 'semantic-ui-react';
import { Link } from '../../routes';
import ludiex from '../../ethereum/ludiex';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';



class Boletim extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let aluno = await ludiex.methods.obterAluno(conta).call();
        aluno[1] = aluno[1].toNumber();
        aluno[2] = aluno[2].toNumber();

        let dadosTurmas = await Promise.all(
            Array(parseInt(aluno[4].length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterTurma(aluno[4][index]).call();
                })
        );

        const dadosDisciplinas = await Promise.all(
            Array(parseInt(aluno[4].length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterDisciplina(dadosTurmas[index][1]).call();
                })
        );

        const matrizUnidades = await Promise.all(
            Array(parseInt(aluno[4].length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterIdUnidadesDaTurma(dadosTurmas[index][0]).call();
            })
        );

        let unidades = [];
        let unidadesPorTurma = [];
        let maxUnidades = 0;

        for(let i = 0; i < aluno[4].length; i++) {
            unidades = unidades.concat(matrizUnidades[i]);
            unidadesPorTurma = unidadesPorTurma.concat(matrizUnidades[i].length);
            if(matrizUnidades[i].length > maxUnidades)
                maxUnidades = matrizUnidades[i].length
        }

        let notasDasUnidades = await Promise.all(
            Array(parseInt(unidades.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.notaUnidade(conta, unidades[index]).call();
                })
        );

        let notasDasUnidadesNumber = [];
        notasDasUnidades.map((element) => {
            notasDasUnidadesNumber.push(element.toNumber());
        });

        let bonusLudicoinUnidades = await Promise.all(
            Array(parseInt(unidades.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterBonusLudicoin(unidades[index], conta).call();
                })
        );
        let bonusLudicoinNumber = [];
        bonusLudicoinUnidades.map((element) => {
            bonusLudicoinNumber.push(element.toNumber());
        });



                
        return {
            conta: conta,
            nome: entidade,
            disciplinas: dadosDisciplinas,
            turmas: dadosTurmas,
            notasDasUnidades: notasDasUnidadesNumber,
            bonusLudicoinUnidades: bonusLudicoinNumber,
            maxUnidades: maxUnidades,
            unidadesPorTurma: unidadesPorTurma
        };
    }

    colorirNota(indice, nota) {
        if(this.props.bonusLudicoinUnidades[indice] > 0) {
            return <font color="green">{nota}</font>
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

        this.props.turmas.map((element, index) => {
            let unidades = [];
            somatorioTurma = 0;

            for(let i = 0; i < this.props.unidadesPorTurma[index]; i++){
                notaOficial = (this.props.notasDasUnidades[indiceGeral] > 1000) ? 1000 : this.props.notasDasUnidades[indiceGeral];
                unidades.push(<Cell>{this.colorirNota(indiceGeral, (notaOficial/ 100.0).toFixed(1))}</Cell>);
                indiceGeral++;
                somatorioTurma += notaOficial;
            }

            for(let j = 0; j < this.props.maxUnidades - this.props.unidadesPorTurma[index]; j++)
                    unidades.push(<Cell>-</Cell>);
            unidades.push(<Cell>{(somatorioTurma / (100.0 * this.props.unidadesPorTurma[index])).toFixed(1)}</Cell>);

            linha.push(
                <Row key={index}>
                    <Cell>{element[6]}</Cell>
                    <Cell>{this.props.disciplinas[index][1]}</Cell>
                    <Cell>{this.props.disciplinas[index][3]}</Cell>
                    {unidades}
                </Row>
            );

        });

        return linha;
    }

    renderHeaderCell(){
        const {HeaderCell} = Table;
        let headers = [];
        for(let i = 0; i < this.props.maxUnidades; i++)
            headers.push(<HeaderCell>{i+1}</HeaderCell>);

        return headers;
    }


    render() {
        const { Header, Row, HeaderCell, Body} = Table;

        return (
            <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh'}}>
                <Layout>
                    <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                        <h2>{this.props.nome}</h2><hr />
                            <h1><center><b>Minhas Notas</b>
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
                                    <HeaderCell>Código</HeaderCell>
                                    <HeaderCell>Disciplina</HeaderCell>
                                    {this.renderHeaderCell()}
                                    <HeaderCell>Média</HeaderCell>
                                </Row>
                            </Header>
                            <Body>
                                {this.renderLinha()}
                            </Body>
                        </Table>
                    </div>
                </Layout>
            </div>
        );
    };

};

export default Boletim;