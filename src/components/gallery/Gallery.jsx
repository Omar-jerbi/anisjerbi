import React, { Component } from 'react'
import './Gallery.scss'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: [],
    }
  }

  componentDidMount = () => {
    document.addEventListener("scroll", () => {
      document.querySelector("#img" + (Math.round(window.scrollY / 500))).style.opacity = 1

      document.querySelectorAll(".image").forEach(i => {
        if (i.querySelector("img").height === 0) {
          i.remove()
        }
      }
      )
    })

    let array = [];
    for (let i = 0; i < 1000; i++) {
      array.push(<img src={"/img/gallery/" + i + '.jpg'} id={"img" + i} alt="" srcset="" />)
    }

    this.setState({ imgs: array })
  }




  render() {
    return (
      <div className="gallery">
        {
          this.state.imgs.map((img, k) =>
            <div key={k} className="image">
              {img}
              <span className='serial'>#{k}</span>
            </div>
          )
        }
      </div>
    )
  }
}
