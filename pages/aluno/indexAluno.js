import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Header, Form } from 'semantic-ui-react';
import { Link } from '../../routes';
import ludiex from '../../ethereum/ludiex';
import ludicoin from '../../ethereum/ludicoin';
import Layout from '../../components/Layout';
import { Router } from "../../routes";



class IndexAluno extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();
        let aluno = await ludiex.methods.obterAluno(conta).call();
        aluno[1] = aluno[1].toNumber();
        aluno[2] = aluno[2].toNumber();

        let ludicoins = await ludicoin.methods.balanceOf(conta).call();
        ludicoins = ludicoins.toString();
        if(ludicoins.length > 16)
            ludicoins = ludicoins.substr(0, (ludicoins.length - 16));
        else
            ludicoins = 0;
        ludicoins = parseInt(ludicoins, 10);

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

        const disciplinas = dadosDisciplinas.map((element) => {
            return element[3];
        });

        dadosTurmas.map((element) => {
            element[5] = element[5].toNumber();
        });
        

        return {
            conta: conta,
            nome: entidade,
            aluno: aluno,
            turmas: aluno[4],
            itens: dadosTurmas,
            disciplinas: disciplinas,
            ludicoins: ludicoins/100.0
        };
    }

    state = {
        loading: false
    }

    onClick(event, index) {
        this.setState({ loading: true});
        Router.pushRoute(`/aluno/${this.props.conta}/turma/${parseInt(this.props.turmas[index], 16)}`)
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

    formatarCPF(entrada) {
        let cpfStr = entrada.toString();
        if(!isNaN(cpfStr) && cpfStr.length < 11)
            cpfStr = '0'.repeat(11 - cpfStr.length) + cpfStr;
        cpfStr = cpfStr.slice(0,3) + "." + cpfStr.slice(3,6) + "." + cpfStr.slice(6,9) + "-" + cpfStr.slice(9);
        return cpfStr;
    }

    render() {
        return (
            <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh'}}>
                <Layout carregando={this.state.loading}>
                    <Grid>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column width={12}>
                                <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                                    <h2>{this.props.nome} - Aluno</h2><hr />
                                    <p><b>Nome:</b> {this.props.aluno[0]}</p>
                                    <p><b>Conta:</b> {this.props.conta}</p>
                                    <p><b>CPF:</b> {this.formatarCPF(this.props.aluno[1])}</p>
                                    <p><b>Matrícula:</b> {this.props.aluno[2]}</p>
                                    <p><b>Curso:</b> {this.props.aluno[3]}</p>
                                    <Link route={`/aluno/${this.props.conta}/boletim`}>
                                        <Form><Button onClick={e => this.setState({ loading: true})} style={{ marginBottom: '10px' }} color={'green'} floated="right">Ver notas</Button></Form>
                                    </Link>
                                    <Link route={`/aluno/${this.props.conta}/matriculaAluno`}>
                                        <Form><Button onClick={e => this.setState({ loading: true})}  style={{ marginBottom: '10px' }} color={'yellow'} floated="right">Realizar Matrícula</Button></Form>
                                    </Link>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Card
                                    color='blue' style={{ 'backgroundColor': '#5386ED', marginBottom: '35px' }}>
                                    <Header as='h2' icon>
                                        <Icon circular inverted name='dollar sign' color='teal'/>
                                        {this.props.ludicoins.toFixed(2)} LDC
                                    </Header>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={12} position="center" >
                            <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                                <Card.Group>
                                    <Card style={{ 'backgroundColor': 'orange', 'color': '#000000' }} fluid>
                                        <Header as='h1' icon>
                                            Minhas Turmas
                                        </Header>          
                                    </Card>
                                </Card.Group>
                                {this.renderTurmas()}
                            </div>
                             </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Layout>
            </div>
        );
    };

};

export default IndexAluno;