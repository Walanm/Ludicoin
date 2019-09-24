import React, { Component } from 'react';
import { Input, Label, Menu, Button } from 'semantic-ui-react';
import { Link, Router } from '../routes';


export default class MenuVertical extends Component {


  state = { activeItem: '' }

  onClick(event, indice) {
    console.log('Oi');
    let rota;
    if(indice == 0)
      rota = `/professor/${this.props.endereco}`;
    else if (indice == 1)
      rota = `/professor/${this.props.endereco}/disciplinas/show`;
    else if (indice == 2)
      rota = `/professor/${this.props.endereco}/turmas/show`;
    else if (indice == 3)
      rota = `/professor/${this.props.endereco}/professores/show`;
    
    if (rota != window.location.pathname)
      this.props.carregar.call();

    Router.pushRoute(rota);
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu color={'teal'} inverted vertical>
        <Menu.Item header><center>Menu</center></Menu.Item>

            <Menu.Item name='inicio' active={activeItem === 'inicio'} onClick={e => this.onClick(e, 0)}>
                Início
            </Menu.Item>

          <Menu.Item name='disciplinas' active={activeItem === 'disciplinas'} onClick={e => this.onClick(e, 1)}>
            Disciplinas
          </Menu.Item>

          <Menu.Item name='turmas' active={activeItem === 'turmas'} onClick={e => this.onClick(e, 2)}>
            Turmas
          </Menu.Item>

          <Menu.Item name='professores' active={activeItem === 'professores'} onClick={e => this.onClick(e, 3)}>
            Professores
          </Menu.Item>

      </Menu>
    )
  }
}