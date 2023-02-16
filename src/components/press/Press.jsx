import React, { Component } from 'react'
import Article from './Article'
import './Press.scss'

export default class Press extends Component {
  render() {
    return (
      <div className="press">
        <div className="title">
          <h1>
            Press articles and interviews
          </h1>
        </div>

        <Article
          img={
            <img src={'/img/Cattura.JPG'} alt={''} />
          }
          tit={<a href="https://www.voanews.com/amp/bypassing-digital-iron-curtain-activists-message-millions-in-russia/6511104.html" target={'_blank'} rel="noreferrer">
            https://www.voanews.com/amp/bypassing-digital-iron-curtain-activists-message-millions-in-russia/6511104.html
          </a>}
        />

        <Article
          img={
            <img src={'/img/article2.JPG'} alt={''} />
          }
          tit={<a href="https://omny.fm/shows/philippe-vincent-foisy/twitter-je-me-suis-abonn-le-14-d-cembre-et-il-ne-m" target={'_blank'} rel="noreferrer">
            https://omny.fm/shows/philippe-vincent-foisy/twitter-je-me-suis-abonn-le-14-d-cembre-et-il-ne-m
          </a>}
        />

      </div>
    )
  }
}
