import React from 'react'
import './header.css'
import logo from '../../logo.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IconButton from '@mui/material/IconButton'

export const Header = () => (
  <header className='header'>
    <nav className='navigation-bar'>
      <div className='left-elements'>
        <img className='logo-icon' src={logo}/>
        <span className='logo-text'>Logo</span>
      </div>
      <div className='right-elements'>
        <button className='login-button'>
          <IconButton style={{borderRadius: 0}}>
            <PersonOutlineIcon />
            <p className="login-button-description">Entrar</p>
          </IconButton>
        </button>
      </div>
    </nav>    
  </header>
)



