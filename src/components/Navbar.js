import React from 'react'
import {FaPiedPiper} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <Link to='/'>
        <div className='navbar'>
            <FaPiedPiper className='icon' />
            <h1>Coin<span className='purple'> Pieper</span></h1>
        </div>
    </Link>

  )
}

export default Navbar