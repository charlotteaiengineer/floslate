import { BentoCard } from "@aliveui/ui/bento-card"
import { Button, Text } from "@aliveui/ui"
import { Icon } from "@aliveui/ui/icon"
import { ChevronRight, Plus } from "lucide-react"

type Event = {
  id: string
  title: string
  time: string
  date: string
  color?: string
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Team Sync",
    time: "10:00 AM",
    date: "Today",
    color: "bg-blue-400",
  },
  {
    id: "2",
    title: "Design Review",
    time: "2:00 PM",
    date: "Today",
    color: "bg-purple-400",
  },
  {
    id: "3",
    title: "Project Planning",
    time: "11:00 AM",
    date: "Tomorrow",
    color: "bg-green-400",
  },
]

function EventItem({ event }: { event: Event }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className={`w-1 h-8 rounded-full ${event.color || "bg-gray-400"}`} />
      <div className="flex-1">
        <Text variant="medium" className="text-sm line-clamp-1">{event.title}</Text>
        <Text variant="regular" className="text-xs text-muted-foreground">
          {event.time} • {event.date}
        </Text>
      </div>
    </div>
  )
}

export function CalendarPreviewCard() {
  return (
    <BentoCard
      title="Calendar"
      icon={
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-400 text-white">
          <Icon icon="calendar" weight="fill" className="w-5 h-5" />
        </div>
      }
      action={
        <Button variant="ghost" size="icon" asChild>
          <a href="http://localhost:3002">
            <ChevronRight className="h-4 w-4" />
          </a>
        </Button>
      }
      className="col-span-1 md:col-span-1"
    >
      <div className="flex flex-col gap-1">
        {upcomingEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
        <Button variant="ghost" size="sm" className="mt-2 justify-start" asChild>
          <a href="http://localhost:3002">
            View schedule
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </div>
    </BentoCard>
  )
}
