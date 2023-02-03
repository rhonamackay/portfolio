import React from 'react'
import { projectData } from '@/data/projects'
import { projectPageParamsType, projectPagePropsType } from '@/data/types'
import { ImArrowLeft2 } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import styles from "../../styles/project.module.css"
import ImageCarousel from '@/components/Carousel'


// This function gets called at build time
export async function getStaticPaths() {
    const projects = projectData
    // Get the paths we want to pre-render based on posts
    const paths = projects.map((proj) => ({
      params: { name: proj.name },
    }))
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

// This also gets called at build time
export async function getStaticProps({ params }: projectPageParamsType) {
    const allProjects = projectData
    let thisProject;
    for (let i=0;i<allProjects.length; i++) {
        if (allProjects[i].name===params.name) {
            thisProject = allProjects[i]
        }
    }
    // Pass post data to the page via props
    return { props: { thisProject } }
  }

function ProjectPage({thisProject}: projectPagePropsType) {
    return (
    <div className={styles.projContainer}>
        <div className={styles.titlearea}>
            <Link href='/projects'><ImArrowLeft2/></Link>
            <h1>{thisProject.displayName}</h1>
            <div className={styles.icons}>
                <a href={thisProject.deployedURL} target="_blank" rel="noreferrer" id="deployed-url" data-tooltip-content="Visit the deployed project">
                    <button className={styles.button}>
                        <RiExternalLinkLine/>
                    </button>
                    <Tooltip anchorId="deployed-url" />
                </a>
                {typeof(thisProject.gitURL)==='string' ? 
                    <a href={thisProject.gitURL} target="_blank" rel="noreferrer" data-tooltip-content="Visit the GitHub repo" id="github-url">
                        <button className={styles.button}>
                            <AiFillGithub/>
                        </button>
                        <Tooltip anchorId="github-url"/>
                    </a>
                    : <>
                        <a href={thisProject.gitURL[0]} target="_blank" rel="noreferrer" data-tooltip-content="Visit the front end GitHub repo" id="github-front">
                            <button className={styles.button}>
                                <AiFillGithub/>
                            </button>
                            <Tooltip anchorId="github-front"/>
                        </a> 
                        <a href={thisProject.gitURL[1]} target="_blank" rel="noreferrer" data-tooltip-content="Visit the back end GitHub repo" id="github-back">
                            <button className={styles.button}>
                                <AiFillGithub/>
                            </button>
                            <Tooltip anchorId="github-back"/>
                        </a>
                    </>}
                </div>
            </div>
        <p>{thisProject.desc}</p>
        <div className={styles.tagContainer}>
            {thisProject.stack.map((tag, index) => {
            return <p key={index} className={styles.tag}>{tag}</p>
            })}
        </div>
        <div className={styles.carouselContainer}>
            <ImageCarousel images={thisProject.gallery}/>
        </div>
    </div>
  )
}

export default ProjectPage