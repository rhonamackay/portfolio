import React, { useEffect, useState } from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import styles from "../styles/contact.module.css"
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';

type Inputs = {
  name: string,
  email: string,
  message: string
};

function Contact() {
  const { register, handleSubmit, watch, formState: { errors }, reset, formState,
  formState: { isSubmitSuccessful } } = useForm<Inputs>();
  
  function onSubmit(data: Inputs) {
    console.log(data);
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message
    }
    send('service_yeuri8p', 'template_uoneglq', templateParams, 'NsOdJ-Qir32EnM10V')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email sent successfully, I'll get back to you soon!")
      }, function(error) {
        console.log('FAILED...', error)
        alert("Oops, there was an error and the email wasn't sent. Try again later.");
     })
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <div className={styles.contactPage}>
      <h2>Want to get in touch?</h2>
      <p>You can connect with me on LinkedIn, or send me an email through the form below!</p>
      <div className={styles.licontainer}>
        <a href="https://www.linkedin.com/in/rhonamackay/" target="_blank" rel="noreferrer" data-tooltip-content="Connect with me on LinkedIn" id="linkedin-url">
          <AiFillLinkedin/>
          <Tooltip className={styles.tooltip} anchorId="linkedin-url"/>
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Your name' {...register("name", {required: true})}></input>
        <input type='email' placeholder='name@email.com' {...register("email", {required: true})}></input>
        <textarea placeholder='Hi, I want to hire you!'{...register("message", {required: true})}></textarea>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Contact