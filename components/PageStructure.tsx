import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'

export default function PageStructure(props: any) {
  const [aboutMeStyle, setAboutMeStyle] = useState<{}>({"height": "65px"})
  const [projectStyle, setProjectStyle] = useState<{}>({"height": "45px"})
  const [contactStyle, setContactStyle] = useState<{}>({"height": "45px"})

  function handleClick(e: any):void {
    if (e.target.id === 'aboutme') {
      setAboutMeStyle({"height": "65px"})
      setContactStyle({"height": "45px"})
      setProjectStyle({"height": "45px"})
    } else if (e.target.id === 'projects') {
      setProjectStyle({"height": "65px"}) 
      setAboutMeStyle({"height": "45px"})
      setContactStyle({"height": "45px"})
    } else {
      setContactStyle({"height": "65px"})
      setAboutMeStyle({"height": "45px"})
      setProjectStyle({"height": "45px"})
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.tabcontainer}>
        <Link href='/'>
          <div className={styles.tab} style={aboutMeStyle}><span className={styles.aboutme} id='aboutme' onClick={handleClick}>About me</span></div>
        </Link>
        <Link href='/projects'>
          <div className={styles.tab} style={projectStyle}><span className={styles.projects} id='projects' onClick={handleClick}>Projects</span></div>
        </Link>
        <Link href='/contact'>
          <div className={styles.tab} style={contactStyle}><span className={styles.contact} id='contact' onClick={handleClick}>Contact    </span></div>
        </Link>
      </div>
      <div className={styles.display}>
        {props.children}
      </div>
    </div>
  )
}
