import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import ludiex from '../../../../ethereum/ludiex';
import LayoutProfessor from '../../../../components/LayoutProfessor';
import web3 from '../../../../ethereum/web3';

/*
    Página que mostra dados da turma e lista as atividades cobradas
*/
class MostrarAtividades extends Component {
    
    // Carrega e combina dados da Turma, Unidades e Atividades
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();
        let turmaID = (props.query.id).toString(16);

        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;


        let turma = await ludiex.methods.obterTurma(turmaID).call();
        turma[5] = turma[5].toNumber();


        let disciplina = await ludiex.methods.obterDisciplina(turma[1]).call();
        disciplina[6] = disciplina[6].toNumber();

        const professor = await ludiex.methods.obterProfessor(turma[2]).call();
        const quantidadeUnidades = await ludiex.methods.obterUnidadesDaTurma(turmaID).call();


        console.log("unidades " + quantidadeUnidades);

        const matrizAtividadesID = await Promise.all(
            Array(parseInt(quantidadeUnidades))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterUnidadeTurma(turmaID, index).call();
                })
        );

        let atividadesID = [];
        let atividadesPorUnidade = [];

        for(let i = 0; i < quantidadeUnidades; i++) {
            atividadesID = atividadesID.concat(matrizAtividadesID[i]);
            atividadesPorUnidade.push(matrizAtividadesID[i].length);
        }

        
        const atividades = await Promise.all(
            Array(parseInt(atividadesID.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAtividade(atividadesID[index]).call();
                })
        );

        console.log("Atividades por Unidade " + atividadesPorUnidade);



        return {
            conta: conta,
            nome: entidade,
            turma: turma,
            disciplina: disciplina,
            professor: professor,
            atividades: atividades,
            quantidadeUnidades: quantidadeUnidades.toNumber(),
            atividadesPorUnidade: atividadesPorUnidade
        };
    }

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
    }

    onClick(event, index) {
        this.setState({ loading: true});
        Router.pushRoute(`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/atividades/${parseInt(this.props.atividades[index][0], 16)}/notas`);
    }


    renderAtividades(unidade) {
        let itens = [];
        let indice = 0;
        for(let i = 0; i < unidade; i++)
            indice += this.props.atividadesPorUnidade[i];
        for(let i = 0; i < this.props.atividadesPorUnidade[unidade]; i++){
            const atividade = {
                onClick: e => this.onClick(e,indice+i),
                header: (`${this.props.atividades[indice+i][2]}`),
                meta: (`ID: ${parseInt(this.props.atividades[indice+i][0], 16)} -  Data: ${this.props.atividades[indice+i][4]}`),
                fluid: true
            }

            itens = itens.concat(atividade);
        }

        return <Card.Group items={itens} />;
    }


    renderUnidades() {
        let unidades = [];
        for(let i = 0; i < this.props.quantidadeUnidades; i++){
            unidades.push(<div><a key={i}><h3><br />{i+1}ª Unidade</h3></a></div>);
            unidades.push(this.renderAtividades(i));
        }

        console.log(unidades);

        return unidades;
    }

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loading}>
                <h2>{this.props.nome}</h2><hr />
                    <h2><center><b>{this.props.disciplina[1]} - {this.props.disciplina[3]}</b>
                        <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/update`}>
                                <Button
                                    floated="left"
                                    icon="edit"
                                    color="blue"
                                    content="Editar"
                                />
                        </Link>
                        <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/participantes/matriculados`}>
                                <Button
                                    floated="right"
                                    content="Ver alunos"
                                    color="blue"
                                />
                        </Link>
                    </center></h2>
                <p><b>Período:</b> {this.props.turma[6]}</p>
                <p><b>ID: </b>{parseInt(this.props.turma[0], 16)}</p>
                <p><b>Horário:</b> {this.props.turma[3]}</p>
                <div>
                    <p style={{"textAlign": "left"}}><b>Sala:</b> {this.props.turma[4]}
                        <span style={{"float": "right"}}>
                        <b>Cotação: </b> {this.props.disciplina[6] / 100.0} LDC/ponto
                        </span>
                </p></div>
                <p><b>Professor:</b> {this.props.professor[0]}</p><hr />
                <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/atividades/new`}>
                    <Button
                        icon="add"
                        floated="right"
                        color="orange"
                    />
                </Link>
                <Card.Group>
                    <Card style={{ 'backgroundColor': 'orange', 'color': '#000000' }} fluid>
                        <Header as='h1' icon>
                            Atividades
                        </Header>
                        
                    </Card>
                </Card.Group>
                {this.renderUnidades()}  
            </LayoutProfessor>
        );
    };

};

export default MostrarAtividades;