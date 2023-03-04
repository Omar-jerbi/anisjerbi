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



      </div>
    )
  }
}
