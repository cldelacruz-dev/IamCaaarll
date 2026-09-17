import { PersonalProject } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: PersonalProject[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  if (projects.length === 0) return null

  return (
    <section id="projects">
      <SectionHeading title="// Personal Projects" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} data={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
