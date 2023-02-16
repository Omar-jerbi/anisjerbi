import React, { Component } from 'react'
import './Article.scss'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="article">
                <div className="img">
                    {this.props.img}
                </div>
                <div className="tit">{this.props.tit}</div>
            </div>
        )
    }
}
