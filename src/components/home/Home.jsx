import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
    document.addEventListener("scroll", (e) => this.scrollHandle(e))
  }

  scrollHandle = (e) => {
    if (window.scrollY >= 350) {
      document.querySelector("#BE").classList.add('animation')
      document.querySelector("#BETEXT").classList.add('animationText')
    }

    if (window.scrollY >= 900) {
      document.querySelector("#CM").classList.add('animation')
      document.querySelector("#CMTEXT").classList.add('animationText')
    }

    if (window.scrollY >= 1200) {
      document.querySelector("#PRESS").classList.add('animation')
      document.querySelector("#PRESSTEXT").classList.add('animationText')
    }
  }


  render() {
    return (
      <div className="home">
        <div className="welcome">
          <img src="/img/Jessica Chastain/Oil Painting of Jessica Chastain.jpg" alt="" srcset="" />
          <div className="msg" id='msgmobile'>
            <h1>Welcome <br />
              to <br />
              my<br />
              gallery</h1>
          </div>

          <div className='msg' id='msgdesk'>
            Welcome to my gallery
          </div>
        </div>

        <div className="whoami">
          <div className="wrapper">
            <img id='whoamiIMG' src="/img/Who_Am_I.png" alt="" />
            <img id='aboutIMG' src="/img/About_Paragraph.png" alt="" />
          </div>
        </div>


        <div className="image">
          <img id='BE' src="/img/Billie Eilish/Official photo of oil painting of Billie EIlish.jpg" alt="" srcset="" />
          <div className="link" id='BETEXT'>
            <Link to={'/gallery'}><h3>gallery</h3> <hr /></Link>
          </div>
        </div>


        <div className="image">
          <img id='CM' src="/img/sweet food oil painting.jpg" alt="" srcset="" />
          <div className="link" id='CMTEXT'>
            <Link to={'/contacts'}><h3>Contact me</h3><hr /></Link>
          </div>
        </div>


        <div className="image">
          <img id='PRESS' src="/img/Running out of time oil painting.jpg" alt="" srcset="" />
          <div className="link" id='PRESSTEXT'>
            <Link to={'/press'}><h3>Press</h3><hr /></Link>
          </div>
        </div>


        <div className="donations">
          <a href="https://www.paypal.me/anisjerbi" target={'_blank'} rel="noreferrer">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" /></svg>
              Support me with a one-time donation
            </button>
          </a>

          <a href="https://www.patreon.com/Anis_Jerbi_art" target={'_blank'} rel="noreferrer">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z" /></svg>
              Support me with a monthly donation
            </button>
          </a>
        </div>

      </div>
    )
  }
}
