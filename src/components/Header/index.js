import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header className='menu'>
            <Link to='/' className='logo'>Filmaria</Link>
            <Link to='/favoritos' className='favoritos'>Salvos</Link>
        </header>
    )
}