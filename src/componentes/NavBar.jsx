import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <div>
                <img src={require('../img/logo.png')}></img>
                <button>Productos</button>
                <button>Objetivos</button>
                <button>Contacto</button>
                <CartWidget  />
            </div>
        </nav>
    )
}

export default NavBar