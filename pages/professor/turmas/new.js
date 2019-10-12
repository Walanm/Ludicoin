import React, { Component } from 'react';
import LayoutProfessor from '../../../components/LayoutProfessor';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';
import ludiex from '../../../ethereum/ludiex';

/*
    Página de cadastro de nova turma
*/

class TurmaNova extends Component {
    
    //Carrega dados das disciplinas
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



        return {
            conta: conta,
            nome: entidade,
            disciplinas: resumoDisciplinas,
            quantidadeDisciplinas: disciplinas.length
        };
    }

    state = {
        idDisciplina:'',
        sala:'',
        horario:'',
        unidades: '',
        periodo: '',
        errorMessage: '',
        loading: false,
        loadingPage: false
    };

    carregar() {
        this.setState({ loadingPage: true });
    }

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            console.log(this.state.idDisciplina);

            await ludiex.methods.cadastrarTurma(this.state.idDisciplina,
                    this.state.horario, this.state.sala, this.state.unidades, this.state.periodo)
                .send({
                    from: contas[0]
                });
            
            Router.pushRoute(`/professor/${contas[0]}/turmas/show`);

        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    criarItensSelect() {
        let itens = [];         
        for (let i = 0; i < this.props.quantidadeDisciplinas; i++) {             
             itens.push(<option key={this.props.disciplinas[i][0]} value={this.props.disciplinas[i][0]}>{this.props.disciplinas[i][1]} - {this.props.disciplinas[i][3]}</option>);   
        }
        return itens;
    } 

    handleChange(event) {
        this.setState({idDisciplina: event.target.value});
    }

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loadingPage}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Nova turma</b></center></h1>

                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Disciplina</label>
                                <select defaultValue={'DEFAULT'} value={this.state.value} onChange={this.handleChange.bind(this)}>
                                    <option disabled value="DEFAULT"> -- selecione uma disciplina -- </option>
                                    {this.criarItensSelect()}
                                </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Período</label>
                            <Input 
                                placeholder='p. ex. 2019.1'
                                value={this.state.periodo}
                                onChange={event => this.setState({ periodo: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Horário</label>
                            <Input
                                placeholder='p. ex. 246M34' 
                                value={this.state.horario}
                                onChange={event => this.setState({ horario: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Sala</label>
                            <Input
                                placeholder='p. ex. DID 3 - 112' 
                                value={this.state.sala}
                                onChange={event => this.setState({ sala: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Quantidade de unidades</label>
                            <Input 
                                placeholder='p. ex. 2'
                                value={this.state.unidades}
                                onChange={event => this.setState({ unidades: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary>Criar</Button>
                    </Form>
            </LayoutProfessor>
        );
    };

};

export default TurmaNova;