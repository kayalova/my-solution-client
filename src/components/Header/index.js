import React from 'react'
import { Link } from 'react-router-dom'
import './Header.sass'

const Header = () => (
    <header className='header'>
        <Link to='/snippets' className='link'>
            <h1 className='header__logo'>My Solution</h1>
        </Link>
    </header>
)

export default Header
