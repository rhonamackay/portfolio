import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import { useRouter } from 'next/router'

export default function PageStructure(props: any) {
  const [aboutMeStyle, setAboutMeStyle] = useState<{}>({"height": "65px"})
  const [projectStyle, setProjectStyle] = useState<{}>({"height": "45px"})
  const [contactStyle, setContactStyle] = useState<{}>({"height": "45px"})
  const router: {asPath: string} = useRouter()

  useEffect(()=> {
    const path: string[] = router.asPath.split('/')
    if (path[1] === '') {
      setAboutMeStyle({"height": "65px"})
      setContactStyle({"height": "45px"})
      setProjectStyle({"height": "45px"})
    } else if (path[1]=== 'projects') {
      setProjectStyle({"height": "65px"}) 
      setAboutMeStyle({"height": "45px"})
      setContactStyle({"height": "45px"})
    } else if (path[1]=== 'contact') {
      setContactStyle({"height": "65px"})
      setAboutMeStyle({"height": "45px"})
      setProjectStyle({"height": "45px"})
    }
  },[router])

  return (
    <div className={styles.page}>
      <div className={styles.tabcontainer}>
        <Link href='/'>
          <div className={styles.tab} style={aboutMeStyle}><span className={styles.aboutme} id='aboutme' >About me</span></div>
        </Link>
        <Link href='/projects'>
          <div className={styles.tab} style={projectStyle}><span className={styles.projects} id='projects' >Projects</span></div>
        </Link>
        <Link href='/contact'>
          <div className={styles.tab} style={contactStyle}><span className={styles.contact} id='contact' >Contact    </span></div>
        </Link>
      </div>
      <div className={styles.display}>
        {props.children}
      </div>
    </div>
  )
}
