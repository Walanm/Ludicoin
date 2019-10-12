import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react';
import { Link } from '../../../../routes';
import ludiex from '../../../../ethereum/ludiex';
import LayoutProfessor from '../../../../components/LayoutProfessor';

/*
    Mostra alunos participantes de uma turma
*/

class MostrarMatriculados extends Component {
    
    // Relaciona Turma com uma lista de Alunos
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let turmaID = (props.query.id).toString(16);
        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

        const alunosID = await ludiex.methods.obterParticipantes(turmaID).call();

        const alunos = await Promise.all(
            Array(parseInt(alunosID.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAluno(alunosID[index]).call();
                })
        );
        
        alunos.map((element) => {
            element[1] = element[1].toNumber();
            element[2] = element[2].toNumber();
        });
        
        console.log(parseInt(turmaID, 16));

        return {
            conta: conta,
            nome: entidade,
            alunosID: alunosID,
            alunos: alunos,
            turma: turmaID
        };
    }

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
    }

    renderAlunos() {
        const itens = this.props.alunos.map((element, index) => {
            return {
                header: (`${element[0]}`),
                meta: (`Conta: ${this.props.alunosID[index]}`),
                description: (
                    <div>
                        <p style={{"textAlign": "left"}}>
                            Matrícula: {element[2]}
                            <span style={{"float": "right"}}>
                            Curso: {element[3]}
                            </span>
                        </p>
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
                    <h1><center><b>Alunos</b>
                    <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma, 16)}/participantes/matricula`}>
                            <Button
                                floated="right"
                                content="Matricular"
                                icon="add circle"
                                color="green"
                            />
                    </Link>
                    <Link route={`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma, 16)}/participantes/todasNotas`}>
                            <Button
                                floated="left"
                                content="Ver notas"
                                color="blue"
                            />
                    </Link>
                    </center></h1>

                    {this.renderAlunos()}
            </LayoutProfessor>
        );
    };

};

export default MostrarMatriculados;