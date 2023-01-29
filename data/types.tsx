export type allProjectsType = projectType[]

export interface projectType {
  name: string
  displayName: string
  desc: string
  stack: string[]
  deployedURL: string
  gitURL: string | string[]
  gallery: string[]
}

export type projectPagePropsType = {
    thisProject: projectType
}

export type projectPageParamsType = {
    params: {
        name: string
    }
}

export type projectIndexPagePropsType = {
    allProjects: allProjectsType
}

export type carouselPropsType = {
    images: string[]
}