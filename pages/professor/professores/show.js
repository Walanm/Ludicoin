import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react';
import { Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';
import LayoutProfessor from '../../../components/LayoutProfessor';

/*
    Página que lista todos os professores participantes
*/

class MostrarProfessores extends Component {
    
    // Carrega dados dos professores
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        const professores = await ludiex.methods.obterProfessores().call();

        const dadosProfessores = await Promise.all(
            Array(parseInt(professores.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterProfessor(professores[index]).call();
                })
        );
        
        const cadastro = dadosProfessores.map((element) => {
            return element[2].toNumber();
        });
        

        return {
            conta: conta,
            nome: entidade,
            professores: professores,
            itens: dadosProfessores,
            cadastro: cadastro
        };
    }

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
    }

    renderProfessores() {
        const itens = this.props.itens.map((element, index) => {
            return {
                header: (`${element[0]}`),
                meta: (`Conta: ${this.props.professores[index]}`),
                description: (
                    <div>
                        <p>Cadastro: {this.props.cadastro[index]}<br/>Departamento: {element[3]}</p>
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
                    <h1><center><b>Professores</b>
                        <Link route={`/professor/${this.props.conta}/professores/new`}>
                                <Button
                                    floated="right"
                                    content="Aceitar"
                                    icon="add circle"
                                    color="green"
                                />
                        </Link>
                    </center></h1>

                    {this.renderProfessores()}
            </LayoutProfessor>
        );
    };

};

export default MostrarProfessores;