import React, { Component } from 'react'
import './Header.scss'
import { Link } from "react-router-dom"

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            burgerOpen: false
        }
    }


    setSelectedLink = (e) => {
        document.querySelectorAll('.link').forEach(l => {
            l.classList.remove('selected-link')
        });

        e.currentTarget.classList.add(`selected-link`)
    }

    componentDidMount = () => {
        document.addEventListener('scroll', () => {
            if (this.state.burgerOpen) {
                window.scrollTo(0, 0)
            }
        })
    }

    componentWillUnmount = () => {
        document.removeEventListener("scroll", () => { })
    }


    render() {
        return (
            <div className="header">
                <div className="burger-menu" onClick={() => {
                    if (document.querySelector("#toshow").classList.contains('menu-showing')) {
                        document.querySelector("#toshow").classList.remove('menu-showing')
                        this.setState({ burgerOpen: false })
                    }
                    else {
                        document.querySelector("#toshow").classList.add('menu-showing')
                        this.setState({ burgerOpen: true })
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>

                    <div className="menu" id='toshow'>
                        <div className={'link' + (window.location.pathname === '/' ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                            <Link to={"/"} >
                                <h1>Home</h1>
                            </Link>
                        </div>
                        <div className={'link' + (window.location.pathname.includes('contacts') ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                            <Link to={"/contacts"} >
                                <h1>Contacts</h1>
                            </Link>
                        </div>
                        <div className={'link' + (window.location.pathname.includes('gallery') ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                            <Link to={'/gallery'} >
                                <h1>Gallery</h1>
                            </Link>
                        </div>
                        <div className={'link' + (window.location.pathname.includes('press') ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                            <Link to={'/press'}>
                                <h1>Press</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="desktop-menu">
                    <div className={'link' + (window.location.pathname === '/' ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                        <Link to={"/"}>
                            <h1> Home</h1>
                        </Link>
                    </div>
                    <div className={'link' + (window.location.pathname.includes('contacts') ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                        <Link to={"/contacts"} >
                            <h1> Contacts</h1>
                        </Link>
                    </div>
                    <div className='img-wrapper'>
                        <img src="/img/logo.png" alt="" srcSet="" />
                    </div>
                    <div className={'link' + (window.location.pathname.includes('gallery') ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                        <Link to={'/gallery'}>
                            <h1> Gallery</h1>
                        </Link>
                    </div>
                    <div className={'link' + (window.location.pathname.includes('press') ? " selected-link" : '')} onClick={(e) => this.setSelectedLink(e)}>
                        <Link to={'/press'}>
                            <h1> Press</h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
