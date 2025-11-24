import { Button, Text } from "@aliveui/ui"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ToolbarProps, View } from "react-big-calendar"
import { format } from "date-fns"
import { CalendarEvent } from "@/lib/events"

export function CalendarToolbar({
  date,
  view,
  onNavigate,
  onView,
  label,
}: ToolbarProps<CalendarEvent>) {
  return (
    <div className="flex items-center justify-between mb-4 p-2">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onNavigate("PREV")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => onNavigate("TODAY")}
        >
          Today
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onNavigate("NEXT")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Text variant="medium" className="ml-4 text-lg">
          {label}
        </Text>
      </div>

      <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
        {["month", "week", "day"].map((v) => (
          <Button
            key={v}
            variant={view === v ? "default" : "ghost"}
            size="sm"
            onClick={() => onView(v as View)}
            className="capitalize"
          >
            {v}
          </Button>
        ))}
      </div>
    </div>
  )
}
