import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { projectData } from '@/data/projects'
import { projectIndexPagePropsType } from '@/data/types'
import styles from "../../styles/project.module.css"

export async function getStaticProps() {
  const allProjects = projectData
  return {
    props: {
      allProjects,
    },
}}

function Projects({ allProjects }: projectIndexPagePropsType) {
  return (
    <div>
      <h2>Check out some of my projects:</h2>
      <div className={styles.projectList}>
        {allProjects.map((project, index) => {
        return <div key={index} >
            <Link href={`/projects/${project.name}`} className={styles.projectItem}>
            <Image
                src={project.gallery[0]}
                alt={project.name}
                width={300}
                height={200}
            ></Image>
            <span className={styles.caption}>{project.displayName}</span></Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects