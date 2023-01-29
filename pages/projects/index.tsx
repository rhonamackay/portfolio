import Link from 'next/link'
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
      <ul className={styles.projectList}>
        {allProjects.map((project, index) => {
        return <div key={index}>
            <Link href={`/projects/${project.name}`}><li>• &nbsp; {project.displayName}</li></Link>
          </div>
        })}
      </ul>
    </div>
  )
}

export default Projects