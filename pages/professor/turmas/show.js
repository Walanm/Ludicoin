import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react';
import { Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';
import LayoutProfessor from '../../../components/LayoutProfessor';
import { Router } from "../../../routes";



class MostrarTurmas extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        const turmas = await ludiex.methods.obterTurmasDoProfessor(conta).call();

        let dadosTurmas = await Promise.all(
            Array(parseInt(turmas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterTurma(turmas[index]).call();
                })
        );

        const dadosDisciplinas = await Promise.all(
            Array(parseInt(turmas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterDisciplina(dadosTurmas[index][1]).call();
                })
        );

        const disciplinas = dadosDisciplinas.map((element) => {
            return element[3];
        });

        dadosTurmas.map((element) => {
            element[5] = element[5].toNumber();
        });
        

        return {
            conta: conta,
            nome: entidade,
            turmas: turmas,
            itens: dadosTurmas,
            disciplinas: disciplinas
        };
    }

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
    }

    onClick(event, index) {
        this.setState({ loading: true});
        Router.pushRoute(`/professor/${this.props.conta}/turmas/${parseInt(this.props.turmas[index], 16)}/atividades/show`);
    }

    renderTurmas() {
        const itens = this.props.itens.map((element, index) => {
            return {
                onClick: e => this.onClick(e,index),
                header: (`${this.props.disciplinas[index]}`),
                meta: (`${element[6]} / ID: ${parseInt(this.props.turmas[index], 16)}`),
                description: (
                    <div>
                        <p>Horário: {element[3]}<br/>
                        Local: {element[4]}<br/>
                        <i>{element[5]} alunos</i></p>
                    </div>
                ),
                fluid: true
            };
        });

        return <Card.Group items={itens} />;
    }

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loading}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Minhas Turmas</b>
                        <Link route={`/professor/${this.props.conta}/turmas/new`}>
                                <Button
                                    floated="right"
                                    content="Nova"
                                    icon="add circle"
                                    color="green"
                                />
                        </Link>
                        <Link route={`/professor/${this.props.conta}/turmas/showall`}>
                                <Button
                                    floated="right"
                                    content="Ver todas"
                                    color="blue"
                                />
                        </Link>
                    </center></h1>

                    {this.renderTurmas()}
            </LayoutProfessor>
        );
    };

};

export default MostrarTurmas;