import { experiences, projects, skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ServiceSection from '@/components/Services/ServiceSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectSection from '@/components/Projects/ProjectSection'
import Skills from '@/components/Skills/Skills'

export default async function Home() {

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ExperienceSection experiences={experiences} />
        <ProjectSection projects={projects} />
        <ServiceSection />
        <ContactSection />
      </div>
    </main>
  )
}
