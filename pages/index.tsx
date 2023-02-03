import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from '../styles/aboutme.module.css'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

function aboutMe() {
  return ( 
  <div className={styles.aboutme}>
      <div className={styles.titlecontainer}>
        <Image
        src={'/profile-pic.jpg'}
        alt='A picture of Rhona smiling at the camera'
        width={150}
        height={150}
        ></Image>
        <div>
          <h1>Hi, I&apos;m Rhona</h1>
          <h3>Full-stack software developer</h3>
        </div>
      </div>
      <p>I got a degree in History and Modern Languages and started my career working in the public sector, most recently working in a policy team for the Department of Health and Social Care. But after writing what felt like the same letter one too many times, I realised there was something missing...</p>
      <p>I started learning to code in early 2022, looking for a creative career that would also allow me to stretch my problem solving muscles. I recently completed a 16-week intensive full stack bootcamp and now I&apos;m looking for my first role in tech.</p>
      <p>Checkout some of my projects on the tab to the side!</p>
      Main tech stack:
      <div className={styles.tagcontainer}>
        <span className={styles.tag}>JavaScript</span> <span className={styles.tag}>TypeScript</span> <span className={styles.tag}>SQL</span> <span className={styles.tag}>MongoDB</span> <span className={styles.tag}>React</span> <span className={styles.tag}>Node.js</span> <span className={styles.tag}>Cypress</span> <span className={styles.tag}>Git</span> <span className={styles.tag}>Agile methodology</span>
      </div>
      <p>...but I&apos;m looking forward to learning even more! I&apos;m currently refreshing my knowledge of Python and learning how to develop mobile apps with React Native.</p>
      <div className={styles.iconcontainer}>
        <a href="https://github.com/rhonamackay/" target="_blank" rel="noreferrer" data-tooltip-content="Visit my GitHub profile" id="github-url">
          <AiFillGithub/>
          <Tooltip anchorId="github-url" className={styles.tooltip}/>
        </a>
        <a href="https://www.linkedin.com/in/rhonamackay/" target="_blank" rel="noreferrer" data-tooltip-content="Visit my LinkedIn profile" id="linkedin-url">
          <AiFillLinkedin/>
          <Tooltip anchorId="linkedin-url" className={styles.tooltip}/>
        </a>
      </div>
    </div>
  )
}

export default aboutMe