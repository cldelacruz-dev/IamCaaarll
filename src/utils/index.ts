import { Heading } from '@/lib/types'

export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  const daySuffix = getDaySuffix(day)

  return `${day}${daySuffix} ${month} ${year}`
}

// Full years between a YYYY-MM-DD date and now
export function getYearsSince(dateString: string, now = new Date()): number {
  const [year, month, day] = dateString.split('-').map(Number)
  const years = now.getFullYear() - year
  const beforeAnniversary =
    now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day)

  return beforeAnniversary ? years - 1 : years
}

function getDaySuffix(day: number): string {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export const getNestedHeadings = (headingElements: Element[]) => {
  const nestedHeadings: Heading[] = []

  headingElements.forEach((heading) => {
    const { textContent: title = '', id } = heading

    if (!title) return false

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3') {
      if (nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
          items: [],
        })
      } else {
        nestedHeadings.push({ id, title, items: [] })
      }
    }
  })

  return nestedHeadings
}

export function isInViewport(element: HTMLElement, callback: () => void, threshold = 0.4) {
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        console.log('Element has entered the viewport')
        callback()
      }
    },
    {
      threshold: threshold,
    },
  )

  observer.observe(element)

  return observer
}
