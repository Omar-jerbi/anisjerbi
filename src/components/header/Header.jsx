import React, { Component } from 'react'
import './Header.scss'
import { Link } from "react-router-dom"

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    setSelectedLink = (e) => {
        document.querySelectorAll('.link').forEach(l => {
            l.firstChild.style.color = '#575757';
            l.firstChild.style.textDecoration = "none";
            if(l.querySelector("h1"))l.querySelector("h1").style.scale = "1"
        });

        e.currentTarget.style.textDecoration = "underline";
        e.currentTarget.style.color = "floralwhite";
        e.currentTarget.querySelector("h1").style.scale = "1.3";

    }


    render() {
        return (
            <div className="header">
                <div className="burger-menu" onClick={() => {
                    if (document.querySelector("#toshow").classList.contains('menu-showing'))
                        document.querySelector("#toshow").classList.remove('menu-showing')
                    else
                        document.querySelector("#toshow").classList.add('menu-showing')
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>

                    <div className="menu" id='toshow'>
                        <div className='link'>
                            <Link to={"/"} onClick={(e) => this.setSelectedLink(e)}>
                                <h1>Home</h1>
                            </Link>
                        </div>
                        <div className='link'>
                            <Link to={"/contacts"} onClick={(e) => this.setSelectedLink(e)}>
                                <h1>Contacts</h1>
                            </Link>
                        </div>
                        <div className='link'>
                            <Link to={'/gallery'} onClick={(e) => this.setSelectedLink(e)}>
                                <h1>Gallery</h1>
                            </Link>
                        </div>
                        <div className='link'>
                            <Link to={'/press'} onClick={(e) => this.setSelectedLink(e)}>
                                <h1>Press</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="desktop-menu">
                    <div className='link'>
                        <Link to={"/"} onClick={(e) => this.setSelectedLink(e)}>
                            Home
                        </Link>
                    </div>
                    <div className='link'>
                        <Link to={"/contacts"} onClick={(e) => this.setSelectedLink(e)}>
                            Contacts
                        </Link>
                    </div>
                    <div className='img-wrapper'>
                        <img src="/img/logo.png" alt="" srcSet="" />
                    </div>
                    <div className='link'>
                        <Link to={'/gallery'} onClick={(e) => this.setSelectedLink(e)}>
                            Gallery
                        </Link>
                    </div>
                    <div className='link'>
                        <Link to={'/press'} onClick={(e) => this.setSelectedLink(e)}>
                            Press
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
