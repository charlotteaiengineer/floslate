export type CalendarEvent = {
  id: string
  title: string
  start: Date
  end: Date
  desc?: string
  color?: string
  allDay?: boolean
}

export const EVENTS: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Sync',
    start: new Date(2025, 10, 24, 10, 0),
    end: new Date(2025, 10, 24, 11, 0),
    desc: 'Weekly team sync meeting',
    color: 'bg-blue-500',
  },
  {
    id: '2',
    title: 'Lunch Break',
    start: new Date(2025, 10, 24, 12, 30),
    end: new Date(2025, 10, 24, 13, 30),
    color: 'bg-orange-500',
  },
  {
    id: '3',
    title: 'Project Planning',
    start: new Date(2025, 10, 25, 14, 0),
    end: new Date(2025, 10, 25, 16, 0),
    desc: 'Q4 planning session',
    color: 'bg-purple-500',
  },
]
