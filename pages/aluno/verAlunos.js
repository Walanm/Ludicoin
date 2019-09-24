import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react';
import { Link } from '../../routes';
import ludiex from '../../ethereum/ludiex';
import Layout from '../../components/Layout';


class VerAlunos extends Component {
    
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

    renderAlunos() {
        const itens = this.props.alunos.map((element, index) => {
            return {
                header: (`${element[0]}`),
                meta: (`Conta: ${this.props.alunosID[index]}`),
                description: (
                    <div>
                        <p style={{"textAlign": "left"}}>
                            Matrícula: {element[1]}
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
            <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh'}}>
                <Layout>
                    <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                        <h2>{this.props.nome}</h2><hr />
                            <h1><center><b>Alunos</b>
                            <Link route={`/aluno/${this.props.conta}/turma/${parseInt(this.props.turma, 16)}`}>
                                        <Button
                                            floated="right"
                                            content="Voltar"
                                            color="blue"
                                        />
                                </Link>
                            </center></h1>

                            {this.renderAlunos()}
                    </div>
                </Layout>
            </div>
        );
    };

};

export default VerAlunos;