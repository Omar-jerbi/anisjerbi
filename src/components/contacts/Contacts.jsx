import React, { Component } from 'react'
import './Contacts.scss'
import axios from 'axios'

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      emailcontent: ''
    }
  }


  sendMail = async () => {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: `service_m4q4nqp`,
      template_id: 'template_m2hwlmq',
      user_id: 'CeIIbCh-H-5Kdau7P',
      template_params: {
        name_client: this.state.name,
        email_client: this.state.email,
        text_client: this.state.emailcontent
      }
    })
      .then((response) => {
        console.log(response.data)

        this.setState = {
          name: '',
          email: '',
          emailcontent: ''
        }

        alert("Your message was sent successfully")
      })
      .catch(error =>
        console.error(error))
  }

  textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
  }

  render() {
    return (
      <div className="contacts">
        <form className='formcontact'>
          <h1>Reach out to me here</h1>
          <div><input value={this.state.name} type="text" placeholder='Your name...' onChange={(e) => this.setState({ name: e.target.value })} /></div>
          <div><input value={this.state.email} type="text" placeholder='Your email address...' onChange={(e) => this.setState({ email: e.target.value })} /></div>
          <div><textarea value={this.state.emailcontent} onKeyUp={(e) => this.textAreaAdjust(e.target)} rows={"10"} cols="30" placeholder='How may I help you?' onChange={(e) => this.setState({ emailcontent: e.target.value })}></textarea></div>
          <div className='button-wrapper'><button onClick={(e) => { e.preventDefault(); this.sendMail() }}>Send message</button></div>
        </form>
      </div>
    )
  }
}
