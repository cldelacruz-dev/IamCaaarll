import { Experience } from '@/lib/types'

interface ExperienceCardProps {
  data: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const { role, company, date, desc, descBullets } = data
  const isCurrent = date.toLowerCase().includes('present')

  return (
    <div className="bg-secondary border-border relative flex flex-col gap-5 overflow-hidden rounded-[14px] border p-6">
      {/* accent top bar */}
      <span className="bg-accent absolute top-0 left-0 h-[3px] w-full" />

      {/* header */}
      <div className="flex items-start justify-between gap-3 pt-1">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-inter text-neutral text-lg font-semibold leading-tight">{role}</h3>
          <span className="text-accent font-inter text-sm font-medium">{company}</span>
        </div>
        <span
          className={`font-inter mt-0.5 shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
            isCurrent
              ? 'bg-accent/15 text-accent'
              : 'bg-primary text-tertiary-content'
          }`}>
          {isCurrent ? '● Current' : date.split('–')[1]?.trim() ?? date}
        </span>
      </div>

      {/* date */}
      <p className="font-inter text-tertiary-content -mt-2 text-xs">{date}</p>

      {/* description */}
      <div className="bg-primary rounded-xl px-4 py-3">
        <p className="font-inter text-primary-content text-sm leading-relaxed md:text-[15px]">
          {desc}
        </p>
      </div>

      {/* bullets */}
      <ul className="flex flex-col gap-2.5">
        {descBullets.map((bullet, index) => (
          <li key={index} className="font-inter flex gap-3 text-sm">
            <span className="bg-accent mt-[7px] inline-block size-[5px] shrink-0 rounded-full" />
            <span className="text-tertiary-content leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard
