import React from "react";
import './App.css'

function Header(props) { //* 'props' vem de Propriedades

    return (
        <header className='header'>
            <h1>{props.name}</h1>
            <ul className='menu'>
                <li>{props.links[0]}</li>
                <li>{props.links[1]}</li>
                <li>{props.links[2]}</li>
            </ul>
        </header>)


}

export default Header;