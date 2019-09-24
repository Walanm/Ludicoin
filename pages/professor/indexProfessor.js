import React, { Component } from 'react';
import ludiex from '../../ethereum/ludiex';
import LayoutProfessor from '../../components/LayoutProfessor';
import {Button,  Form } from 'semantic-ui-react';


class IndexProfessor extends Component {
    
    static async getInitialProps(props) {
        //this.carregar = this.carregar.bind(this);
        const conta = props.query.endereco;
        const entidade = await ludiex.methods.nomeEntidade().call();
        const professor = await ludiex.methods.obterProfessor(conta).call();

        return {
            entidade: entidade,
            conta: conta,
            nome: professor[0],
            cpf: professor[1].toNumber(),
            cadastro: professor[2].toNumber(),
            departamento: professor[3]
        };  
    }

    state = { loading: false}

    carregar() {
        this.setState({ loading: true });
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
            <LayoutProfessor endereco={this.props.conta} action={this.carregar.bind(this)} loading={this.state.loading}>
                <h2>{this.props.entidade}</h2><hr />
                <h1><center><b>PERFIL</b></center></h1>
                <p><b>Nome:</b> {this.props.nome}</p>
                <p><b>Conta:</b> {this.props.conta}</p>
                <p><b>CPF:</b> {this.formatarCPF(this.props.cpf)}</p>
                <p><b>Cadastro:</b> {this.props.cadastro}</p>
                <p><b>Departamento:</b> {this.props.departamento}</p>
                <Form><Button style={{ marginBottom: '10px' }} color={'yellow'} floated="right">Bem-vindo!</Button></Form>
            </LayoutProfessor>
        );
    };
};

export default IndexProfessor;