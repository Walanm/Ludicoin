import React, { Component } from 'react';
import { Card, Grid, Button, Form, Header, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import ludiex from '../../ethereum/ludiex';
import ludicoin from '../../ethereum/ludicoin';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';


class Turma extends Component {
    
    static async getInitialProps(props) {
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();

        let ludicoins = await ludicoin.methods.balanceOf(conta).call();
        ludicoins = ludicoins.toString();
        if(ludicoins.length > 16)
            ludicoins = ludicoins.substr(0, (ludicoins.length - 16));
        else
            ludicoins = 0;
        ludicoins = parseInt(ludicoins, 10);

        let turmaID = (props.query.id).toString(16);

        if(!isNaN(turmaID) && turmaID.length < 64)
            turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;


        let turma = await ludiex.methods.obterTurma(turmaID).call();
        turma[5] = turma[5].toNumber();


        let disciplina = await ludiex.methods.obterDisciplina(turma[1]).call();
        disciplina[6] = disciplina[6].toNumber();

        const professor = await ludiex.methods.obterProfessor(turma[2]).call();
        const quantidadeUnidades = await ludiex.methods.obterUnidadesDaTurma(turmaID).call();

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

        let notas = await Promise.all(
            Array(parseInt(atividadesID.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterAtividadeRealizada(atividadesID[index], conta).call();
                })
        );

        notas.map((element) => {
            element[0] = element[0].toNumber();
        });

        const idUnidades = await ludiex.methods.obterIdUnidadesDaTurma(turmaID).call();

        let notasDasUnidades = await Promise.all(
            Array(parseInt(idUnidades.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.notaUnidade(conta, idUnidades[index]).call();
                })
        );

        let notasDasUnidadesNumber = [];
        notasDasUnidades.map((element) => {
            notasDasUnidadesNumber.push(element.toNumber());
        });

        let bonusLudicoinUnidades = await Promise.all(
            Array(parseInt(idUnidades.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.obterBonusLudicoin(idUnidades[index], conta).call();
                })
        );
        let bonusLudicoinNumber = [];
        bonusLudicoinUnidades.map((element) => {
            bonusLudicoinNumber.push(element.toNumber());
        });

        /*
        let unidadesID = [];
        let indice = 0;
        for(let i = 0; i < this.props.quantidadeUnidades; i++){
            for(let j = 0; j < i; j++)
                indice += this.props.atividadesPorUnidade[i];
            unidadesID.push(atividades[indice][1]);
        }*/



        /*
        let notaUnidade = await Promise.all(
            Array(parseInt(quantidadeUnidades.length))
                .fill()
                .map((element, index) => {
                    return ludiex.methods.notaUnidade(conta, conta).call();
                })
        );*/

        return {
            conta: conta,
            nome: entidade,
            turma: turma,
            disciplina: disciplina,
            professor: professor,
            atividades: atividades,
            quantidadeUnidades: quantidadeUnidades.toNumber(),
            atividadesPorUnidade: atividadesPorUnidade,
            notas: notas,
            ludicoins: ludicoins/100.0,
            unidades: idUnidades,
            notasDasUnidades: notasDasUnidadesNumber,
            bonusLudicoinUnidades: bonusLudicoinNumber
        };
    }

    state = {
        errorMessage: '',
        loading: false,
        unidade: '',
        quantidadeLudicoins: 0
    }


    renderAtividades(unidade) {
        let itens = [];
        let indice = 0;
        for(let i = 0; i < unidade; i++)
            indice += this.props.atividadesPorUnidade[i];
        for(let i = 0; i < this.props.atividadesPorUnidade[unidade]; i++){
            const atividade = {
                header: (`${this.props.atividades[indice+i][2]}`),
                meta: (`ID: ${parseInt(this.props.atividades[indice+i][0], 16)} -  Data: ${this.props.atividades[indice+i][4]}`),
                description: (
                    <span style={{"float": "right"}}>
                        <b>Nota: </b> {(this.props.notas[indice+i][0] / 100.0).toFixed(1)}
                        </span>
                ),
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

        return unidades;
    }

    colorirNota(indice, nota) {
        if(this.props.bonusLudicoinUnidades[indice] > 0) {
            return <font color="#61D871">{nota}</font>
        } else {
            return nota
        }
    }

    mostrarNotas() {
        let notas = [];
        let somatorioTotal = 0;
        let notaOficial = 0;

        for(let i = 0; i < this.props.quantidadeUnidades; i++){
            notaOficial = (this.props.notasDasUnidades[i] > 1000) ? 1000 : this.props.notasDasUnidades[i];
            somatorioTotal += notaOficial;
            notas.push(<div><b key={i}><h3><br />{i+1}ª Unidade: {this.colorirNota(i, (notaOficial/ 100.0).toFixed(1))}</h3></b></div>);
        }

        notas.push(<div><a><h3><br />Média: {(somatorioTotal / (100.0 * this.props.quantidadeUnidades)).toFixed(1)}</h3></a></div>);
        return notas;
    }

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

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const contas = await web3.eth.getAccounts();

            console.log(this.props.unidades[this.state.unidade]);
            //console.log(this.state.quantidadeLudicoins);
            console.log(web3.utils.toWei(this.state.quantidadeLudicoins, 'ether'));

            await ludiex.methods.gastarLudicoins(contas[0],
                    this.props.unidades[this.state.unidade], web3.utils.toWei(this.state.quantidadeLudicoins, 'ether'))
                .send({
                    from: contas[0]
                });
            
            window.location.reload();
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });

    };

    render() {
        return (
            <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh'}}>
                <Layout>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                                    <h2>{this.props.nome}</h2><hr />
                                    <h2><center><b>{this.props.disciplina[1]} - {this.props.disciplina[3]}</b>
                                        <Link route={`/aluno/${this.props.conta}/`}>
                                            <Button
                                                onClick={e => this.setState({ loading: true})}
                                                floated="left"
                                                color="blue"
                                                content="Voltar"
                                            />
                                        </Link>
                                        <Link route={`/aluno/${this.props.conta}/turma/${parseInt(this.props.turma[0], 16)}/verAlunos`}>
                                            <Button
                                                onClick={e => this.setState({ loading: true})}
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
                                    <Card.Group>
                                        <Card style={{ 'backgroundColor': 'orange', 'color': '#000000' }} fluid>
                                            <Header as='h1' icon>
                                                Atividades
                                            </Header>
                                            
                                        </Card>
                                    </Card.Group>
                                    {this.renderUnidades()}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                                    <center><h2>Notas</h2></center>
                                    {this.mostrarNotas()}
                                    <br />
                                    <Card.Group>
                                        <Card style={{ 'backgroundColor': '#5386ED', 'color': '#000000' }} fluid>
                                            <Header as='h1' icon>
                                                Ludicoins
                                            </Header>
                                        </Card>
                                    </Card.Group>
                                        <div>
                                            <br/><p><b>Saldo disponível: </b> {this.props.ludicoins.toFixed(2)} LDC</p>
                                            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                                                <Form.Field>
                                                    <label>Unidade</label>
                                                        <select defaultValue={'DEFAULT'} value={this.state.value} onChange={this.handleChange.bind(this)}>
                                                            <option disabled value="DEFAULT"> -- selecione uma unidade -- </option>
                                                            {this.criarItensSelect()}
                                                        </select>
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Quantidade de ludicoins</label>
                                                    <Input 
                                                        value={this.state.quantidadeLudicoins}
                                                        onChange={event => this.setState({ quantidadeLudicoins: event.target.value })}
                                                    />
                                                </Form.Field>
                                                <Message error header="Oops!" content={this.state.errorMessage} />
                                                <Button loading={this.state.loading} primary>Gastar</Button>
                                            </Form>
                                        </div>
                                   
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Layout>
            </div>
        );
    };

};

export default Turma;