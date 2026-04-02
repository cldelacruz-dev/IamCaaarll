export interface Project {
  title: string
  shortDescription: string
  priority: number
  cover: string
  livePreview?: string
  githubLink?: string
  visitors?: string
  earned?: string
  githubStars?: string
  ratings?: string
  numberOfSales?: string
  type: string
  siteAge?: string
}

export interface Experience {
  role: string
  company: string
  companylogo: string
  date: string
  desc: string
  descBullets: string[]
}

export interface Experience {
  role: string
  company: string
  companylogo: string
  date: string
  desc: string
  descBullets: string[]
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}
