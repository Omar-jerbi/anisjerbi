/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './Gallery.scss'
import images from '../gallery.json'
import { ref, getDownloadURL } from "firebase/storage";


export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesDW: []
    }
  }

  handleClickImg = (e) => {
    if (e.currentTarget.classList.contains("image-selected"))
      e.currentTarget.classList.remove("image-selected")
    else {
      document.querySelectorAll(".image").forEach(i => i.classList.remove("image-selected"))
      e.currentTarget.classList.add("image-selected")
    }
  }

  getImage = async (src) => {
    const imagesRef = ref(this.props.storageRef, src);
    let r = ''
    await getDownloadURL(imagesRef).then((url) => console.log(url))
    return r
  }


  componentDidMount = () => {
    images.map(i => {
      const imagesRef = ref(this.props.storageRef, i.src);
      getDownloadURL(imagesRef)
        .then((url) => {
          let arr = this.state.imagesDW
          arr.push({ img: <img src={url} />, n: i.name, a: i.available })
          this.setState({ imagesDW: arr })
        })
        .catch((error) => {

        });
    })
  }

  render() {
    return (
      <div className="gallery">
        {
          this.state.imagesDW.map((img, k) =>
            <div key={k} className="image" onClick={(e) => this.handleClickImg(e)}>
              {img.img}
              <div className="title">
                {img.n}
              </div>
              {!img.a &&
                <div className="ribbon">SOLD</div>
              }
            </div>
          )
        }
      </div>
    )
  }
}
