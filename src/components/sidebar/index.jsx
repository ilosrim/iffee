import React from 'react'
import { Brand, Navbar, Sidebars, Title, NavLinks, UserBox } from '../styles/style'
import Logo from '../../img/logo.png';
import { BiHomeAlt } from 'react-icons/bi';
import { IoGridOutline } from 'react-icons/io5';
import { FiCreditCard } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { BiCalculator } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import User from '../../img/user.png';

export const Sidebar = () => {
  return (
    <Sidebars>
      <Brand src={Logo} alt='Logotip' />
      
      <Navbar>
        <Title>Menu</Title>
        <NavLinks>
          <li>
            <BiHomeAlt />
            <a href="/">Home</a>
          </li>
          <li>
            <IoGridOutline />
            <a href="/">Garage</a>
          </li>
          <li>
            <FiCreditCard />
            <a href="/">Service Menu</a>
          </li>
          <li>
            <FiUsers />
            <a href="/">Racers</a>
          </li>
          <li>
            <BiCalculator />
            <a href="/">Calculator</a>
          </li>
          <li>
            <FiSettings />
            <a href="/">Settings</a>
          </li>
        </NavLinks>
        <NavLinks>
            <li>
              <div className='circle blue'></div>
              <a href="/">MotoGP 2022</a>
            </li>
            <li>
              <div className='circle red'></div>
              <a href="/">Dynamics 22</a>
            </li>
            <li>
              <div className='circle lightblue'></div>
              <a href="/">Olympics</a>
            </li>
        </NavLinks>

        <UserBox>
          <img src={User} alt="Logo" />
          <select name="" id="">
            <option value="Killua">Killua</option>
            <option value="Jack">Jack</option>
            <option value="Kane">Kane</option>
          </select>
        </UserBox>
      </Navbar>
    </Sidebars>
  )
}
