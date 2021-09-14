import React from 'react';
import { Bodys, Top } from '../styles/style';
import { BsSearch } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import User from '../../img/user.png';

export const Body = () => {
  return (
    <Bodys>
      <Top>
        <div className="inputOne">
          <BsSearch />
          <input type="text" placeholder='Search for a race, car or racer' />
        </div>
        <div className="inputTwo">
          <select name="" id="">
            <option value="" default>Choose a car</option>
            <option value="">BMW</option>
            <option value="">Nexia</option>
          </select>
        </div>
        <div className="register">
          <IoNotificationsOutline />
          <AiOutlineUser />
          <img src={User} alt='User pic.' />
        </div>
      </Top>
    </Bodys>
  )
}
