import React from 'react'
import { Bodys, Top } from '../styles/style'
import { BsSearch } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai'

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
      </Top>
    </Bodys>
  )
}
