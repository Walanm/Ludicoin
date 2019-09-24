import React, { Component } from 'react';
import LayoutProfessor from '../../../../components/LayoutProfessor';
import { Message, Grid, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../../../../ethereum/web3';
import { Router, Link } from '../../../../routes';
import ludiex from '../../../../ethereum/ludiex';

class NovaAtividade extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let turmaID = (props.query.id).toString(16);
        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

        const quantidadeUnidades = await ludiex.methods.obterUnidadesDaTurma(turmaID).call();
        const turma = await ludiex.methods.obterTurma(turmaID).call();

        const disciplina = await ludiex.methods.obterDisciplina(turma[1]).call();


        return {
            conta: conta,
            nome: entidade,
            turma: turma,
            disciplina: disciplina,
            quantidadeUnidades: quantidadeUnidades.toNumber()
        };
    }

    state = {
        unidade:'',
        nomeAtividade:'',
        errorMessage: '',
        prazo: '',
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

            if (this.state.nomeAtividade == '')
                this.setState({ errorMessage: 'Preencha o nome da atividade'});
            else if (this.state.unidade == '')
                this.setState({ errorMessage: 'Selecione uma unidade'});
            else {
                await ludiex.methods.cadastrarAtividade(this.props.turma[0], this.state.nomeAtividade, 
                    this.state.unidade, this.state.prazo)
                    .send({
                        from: contas[0]
                    });

                Router.pushRoute(`/professor/${this.props.conta}/turmas/${parseInt(this.props.turma[0], 16)}/atividades/show`);
            }


        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    criarItensSelect() {
        let itens = [];         
        for (let i = 0; i < this.props.quantidadeUnidades; i++) {             
             itens.push(<option key={i} value={i}>{i+1}</option>);   
        }
        return itens;
    } 

    handleChange(event) {
        this.setState({unidade: event.target.value});
    }

    render() {
        return (
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loadingPage}>
                <h2>{this.props.nome}</h2><hr />
                    <h1><center><b>Cadastrar atividade</b></center></h1>
                    <p><b>{this.props.disciplina[1]} - {this.props.disciplina[3]}</b></p>
                    <p><b>Turma: </b>{parseInt(this.props.turma[0], 16)}</p>

                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Unidade</label>
                                <select defaultValue={'DEFAULT'} value={this.state.value} onChange={this.handleChange.bind(this)}>
                                    <option disabled value="DEFAULT"> -- selecione uma unidade -- </option>
                                    {this.criarItensSelect()}
                                </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Nome da atividade</label>
                            <Input 
                                value={this.state.nomeAtividade}
                                onChange={event => this.setState({ nomeAtividade: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Prazo</label>
                            <Input
                                placeholder='p. ex. 30/09' 
                                value={this.state.prazo}
                                onChange={event => this.setState({ prazo: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header="Erro!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary>Cadastrar</Button>
                    </Form>
            </LayoutProfessor>
        );
    };

};

export default NovaAtividade;