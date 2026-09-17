'use client'

import { getYearsSince } from '@/utils'
import { useEffect, useState } from 'react'

interface YearsOfExperienceProps {
  since: string
  buildTimeYears: number
}

// The site is statically exported, so the years rendered at build time are
// recalculated in the browser to stay correct between deploys.
const YearsOfExperience: React.FC<YearsOfExperienceProps> = ({ since, buildTimeYears }) => {
  const [years, setYears] = useState(buildTimeYears)

  useEffect(() => {
    setYears(getYearsSince(since))
  }, [since])

  return <>{years}</>
}

export default YearsOfExperience
