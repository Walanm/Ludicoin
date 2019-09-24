import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';
import LayoutProfessor from '../../../components/LayoutProfessor';



class DisciplinaShow extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        const disciplinas = await ludiex.methods.obterDisciplinas().call();

        let resumoDisciplinas = await Promise.all(
            Array(parseInt(disciplinas.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterDisciplina(disciplinas[index]).call();
                })
        );

        
        resumoDisciplinas.map((element) => {
            element[2] = element[2].toNumber();
            element[6] = element[6].toNumber();
        });
        

        return {
            conta: conta,
            nome: entidade,
            disciplinas: disciplinas,
            itens: resumoDisciplinas
        };
    }

    state = { loading: false }

    carregar() {
        this.setState({ loading: true });
    }

    onClick(event, index) {
        this.setState({ loading: true});
        Router.pushRoute(`/professor/${this.props.conta}/disciplinas/${parseInt(this.props.disciplinas[index], 16)}/update`);
    }

    renderDisciplinas() {
        const itens = this.props.itens.map((element, index) => {
            return {
                onClick: e => this.onClick(e,index),
                header: (`${element[1]}  -  ${element[3]}`),
                meta: (`ID: ${parseInt(this.props.disciplinas[index], 16)}`),
                description: (
                    <div>
                    <p style={{"textAlign": "left", "color": "#000000"}}><b>Créditos: </b>{element[2]}
                        <span style={{"float": "right"}}>
                        <b>Cotação: </b> {element[6] / 100.0} LDC/ponto
                        </span>
                    </p></div>
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
                    <h1><center><b>Disciplinas</b>
                        <Link route={`/professor/${this.props.conta}/disciplinas/new`}>
                                <Button
                                    floated="right"
                                    content="Criar"
                                    icon="add circle"
                                    color="green"
                                />
                        </Link>
                    </center></h1>

                    {this.renderDisciplinas()}
            </LayoutProfessor>
        );
    };

};

export default DisciplinaShow;