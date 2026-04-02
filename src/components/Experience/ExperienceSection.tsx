import { Experience } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ExperienceCard from './ExperienceCard'

interface ExperienceSectionProps {
  experiences: Experience[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience">
      <SectionHeading title="// Experience" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} data={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
