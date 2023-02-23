import React, { Component } from 'react'
import './Gallery.scss'
import images from '../gallery.json'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
    // window.onscroll = () => this.onscroll()
  }

  // onscroll = () => {
  //   document.querySelectorAll(".image").forEach(i => {
  //     if (i.querySelector("img").height === 0) {
  //       i.remove()
  //     }
  //   })
  // }

  handleClickImg = (e) => {
    if (e.currentTarget.classList.contains("image-selected"))
      e.currentTarget.classList.remove("image-selected")
    else {
      document.querySelectorAll(".image").forEach(i => i.classList.remove("image-selected"))
      e.currentTarget.classList.add("image-selected")
    }
  }


  render() {
    return (
      <div className="gallery">
        {
          images.map((img, k) =>
            <div className="image" onClick={(e) => this.handleClickImg(e)}>
              <img src={img.src} alt="" />
              <div className="title">
                {img.name}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
