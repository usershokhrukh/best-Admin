import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/block/sidebar.scss"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        <li>
          <NavLink className={"sidebar__link"} to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink className={"sidebar__link"} to={"/users"}>Users</NavLink>
        </li>
        <li>
          <NavLink className={"sidebar__link"} to={"/cars"}>Cars</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar