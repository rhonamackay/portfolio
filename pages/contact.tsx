import React, { useEffect, useState } from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import styles from "../styles/contact.module.css"
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = {
  name: string,
  email: string,
  message: string
};

function Contact() {
  const { register, handleSubmit, reset, formState,
  formState: { isSubmitSuccessful } } = useForm<Inputs>();
  
  function onSubmit(data: Inputs) {
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message
    }
    toast.promise(
      send('service_yeuri8p', 'template_uoneglq', templateParams, 'NsOdJ-Qir32EnM10V'),
       {
         loading: 'Sending...',
         success: <b>Message sent, I&apos;ll get back to you soon!</b>,
         error: <b>Oops, there was an error and your message wasn&apos;t sent. Try again later.</b>,
       }
     );
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <div className={styles.contactPage}>
      <div><Toaster/></div>
      <h2>Want to get in touch?</h2>
      <p>You can connect with me on LinkedIn, or send me an email through the form below!</p>
      <div className={styles.licontainer}>
        <a href="https://www.linkedin.com/in/rhonamackay/" target="_blank" rel="noreferrer" data-tooltip-content="Connect with me on LinkedIn" id="linkedin-url">
          <AiFillLinkedin/>
          <Tooltip className={styles.tooltip} anchorId="linkedin-url"/>
        </a>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input id="name" placeholder='Your name' className={styles.textinput} {...register("name", {required: true})}></input>
        <label htmlFor="email">Contact email:</label>
        <input id="email" type='email' placeholder='name@email.com' className={styles.textinput} {...register("email", {required: true})}></input>
        <label htmlFor='message'>Message:</label>
        <textarea id="message" placeholder='Hi, I would love to give you a job...'{...register("message", {required: true})}></textarea>
        <input type="submit" />
        <span>* all fields are mandatory</span>
      </form>
    </div>
  )
}

export default Contact