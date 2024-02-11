import React, { useRef }from 'react';
import { useNavigate} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './stylecontact.css';

const ContactUs = () => {
const navigate = useNavigate();

  const form = useRef(); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ojok14', 'template_b2zytjl', form.current, 'Z2njvmvcI-wjo7maa')
      .then((result) => {
          console.log(result.text);
          navigate(-1);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="head">
      <form ref={form} id="form" onSubmit={sendEmail}>
        <h1>VSB ENG COLLEGE</h1>
        <label id="e-mail" htmlFor="fname">
          E-Mail ID:
        </label>
        <br />
        <input
          id="email"
          type="text"
          name="E-Mail Id"
          placeholder="E-mail ID"
          style={{ width: 300, margin: '5px' }}
          required
        />
        <br />
        <label id="q" htmlFor="lname">
          Questions:
        </label>
        <br />
        <textarea
          id="qa"
          type="text"
          name="Doubt"
          placeholder="Type Your Questions"
          style={{ width: 300, height: 150, margin: '5px' }}
          required
        />
        <br />
        <br />
        <input id="b" type="submit" value="Submit" />
        <h4>
          ©copyright by <span id="t">Tele</span><span>Vein</span>
        </h4>
      </form>
    </div>
  );
};

export default ContactUs;