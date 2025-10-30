import { useState } from 'react'
import './Header.css'
import Navbar from './Sidebar/Navbar';
import logo from '/novosti_vladivostok 1.svg'
import { GiHamburgerMenu } from "react-icons/gi"
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function Header() {
    const [ showNav, setShowNav] = useState(false)
    return (
    <div>
    
        <header className="header">
            {/* Лого слева */}
            <div className='header-left'>
                <GiHamburgerMenu onClick = {() => setShowNav(!showNav)}/>
                <img src={logo} className="logo" alt="Logo" />
            </div>
            
            {/* Навигация справа */}
            <nav className="nav">
                <a href="/Home" className="nav-link">Главная</a>
                <a href="/" className="nav-link">Организации</a>
                <a href="/" className="nav-link">Наши посты</a>
                <button className="login-button">Войти</button>
            </nav>
        </header>
        <Navbar show = {showNav}/>
    </div>
    );
}