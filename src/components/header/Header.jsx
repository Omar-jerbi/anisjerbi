import React, { Component } from 'react'
import './Header.scss'
import { Link } from "react-router-dom"

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    setSelectedLink = (e) => {
        document.querySelectorAll('.link').forEach(l => { l.firstChild.style.color = 'white'; l.firstChild.style.fontWeight = 400 });
        e.currentTarget.style.color = 'darkgrey'
        e.currentTarget.style.fontWeight = 1000;
    }


    render() {
        return (
            <div className="header">
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
                <div>
                    <img src="/img/logo.png" alt="" srcset="" />
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
        )
    }
}
