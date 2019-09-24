import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes';

class Header extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu style={{ marginTop: '0px' }} color={'blue'} inverted>
        <Link route='/'>
          <a className="item"><b>Ludicoin</b></a>
        </Link>

        <Menu.Menu position="right">
          <Link route='/'>
            <a className="item">Início</a>
          </Link>

        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;