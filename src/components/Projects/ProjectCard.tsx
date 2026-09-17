import { PersonalProject } from '@/lib/types'
import Image from 'next/image'
import { PreviewIcon } from '../../utils/icons'

interface ProjectCardProps {
  data: PersonalProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { title, tagline, year, status, desc, highlights, techStack, cover, livePreview } = data

  return (
    <div className="bg-secondary border-border relative flex flex-col gap-5 overflow-hidden rounded-[14px] border p-6">
      {/* accent top bar */}
      <span className="bg-accent absolute top-0 left-0 h-[3px] w-full" />

      {/* cover */}
      {cover && (
        <figure className="border-border mt-1 overflow-hidden rounded-xl border">
          <Image src={cover} alt={`${title} cover`} className="h-auto w-full" />
        </figure>
      )}

      {/* header */}
      <div className={`flex items-start justify-between gap-3 ${cover ? '' : 'pt-1'}`}>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-inter text-neutral text-lg leading-tight font-semibold">{title}</h3>
          <span className="text-accent font-inter text-sm font-medium">{tagline}</span>
        </div>
        {status && (
          <span className="font-inter bg-accent/15 text-accent mt-0.5 shrink-0 rounded-full px-3 py-1 text-xs font-medium">
            ● {status}
          </span>
        )}
      </div>

      {/* year */}
      <p className="font-inter text-tertiary-content -mt-2 text-xs">{year}</p>

      {/* description */}
      <div className="bg-primary rounded-xl px-4 py-3">
        <p className="font-inter text-primary-content text-sm leading-relaxed md:text-[15px]">
          {desc}
        </p>
      </div>

      {/* highlights */}
      {highlights && highlights.length > 0 && (
        <ul className="flex flex-col gap-2.5">
          {highlights.map((highlight, index) => (
            <li key={index} className="font-inter flex gap-3 text-sm">
              <span className="bg-accent mt-[7px] inline-block size-[5px] shrink-0 rounded-full" />
              <span className="text-tertiary-content leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* tech stack */}
      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="font-inter bg-primary border-border text-tertiary-content rounded-full border px-3 py-1 text-xs">
            {tech}
          </li>
        ))}
      </ul>

      {/* link */}
      {livePreview && (
        <div className="border-border mt-auto border-t pt-4">
          <a
            href={livePreview}
            className="text-accent font-inter flex w-fit items-center gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105"
            target="_blank"
            rel="noopener noreferrer">
            <PreviewIcon className="h-auto w-[18px]" />
            <span>Live Preview</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
