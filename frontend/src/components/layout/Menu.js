import React from 'react';
import { Link } from "react-router-dom";




const Menu = () => {

    function onToggleHandler(){
        const toggle = document.querySelector('.toggle');
        document.querySelector('.mobile').classList.toggle('active');
        toggle.classList.toggle('on');
    }

    return(
        <>
            <header className="header">
                <div className="container">
                    <h1 className="h">ONLINE SHOP</h1>
                    <nav className="navbar">
                        <div className="wrapper">
                            <span><Link to="/" className="brand">HOME</Link></span>
                            <ul className="menu">
                                <li><a className="menu-link" href={"#filter"}>FILTER</a></li>
                                <li><Link className="menu-link" to={"orders/me"}>ORDERS</Link></li>
                                <li><Link className="menu-link" to={"/me"}>PROFILE</Link></li>
                                <li><a className="menu-link" href={"#contacts"}>CONTACTS</a></li>
                                <li><a className="menu-link" href={"http://shop.com"} target={'blank'}>MORE</a>
                                </li>
                            </ul>
                        </div>
                        <div className="toggle" onClick={() => onToggleHandler()}>
                            <div className="span span-one"/>
                            <div className="span span-two"/>
                            <div className="span span-three"/>
                        </div>
                    </nav>
                    <div className="mobile">
                        <ul className="menu">
                            <li><a className="menu-link" href={"#filter"}>FILTER</a></li>
                            <li><a className="menu-link" href={"#categories"}>CATEGORIES</a></li>
                            <li><a className="menu-link" href={"#ratings"}>RATINGS</a></li>
                            <li><a className="menu-link" href={"#contacts"}>CONTACTS</a></li>
                            <li><a className="menu-link" href={"http://shop.com"} target={'blank'}>MORE</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Menu;
