import React from 'react'
import { Brand, Navbar, Sidebars, Title } from '../styles/style'
import Logo from '../../img/logo.png';
import { HomeOutlined } from '@material-ui/icons';


export const Sidebar = () => {
  return (
    <Sidebars>
      <Brand src={Logo} alt='Logotip' />
      
      <Navbar>
        <Title>Menu</Title>
        <ul>
          <li>
            <HomeOutlined />
            <a href="/">Home</a>
          </li>
        </ul>
      </Navbar>
    </Sidebars>
  )
}
