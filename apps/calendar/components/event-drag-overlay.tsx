import { DragOverlay } from "@dnd-kit/core"
import { motion } from "framer-motion"
import { CalendarEvent } from "@/lib/events"

interface EventDragOverlayProps {
  event: CalendarEvent | null
}

export function EventDragOverlay({ event }: EventDragOverlayProps) {
  if (!event) return null

  return (
    <DragOverlay dropAnimation={null}>
      <motion.div
        initial={{ scale: 1, rotate: -2 }}
        animate={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`${event.color || "bg-blue-500"} text-white border-none rounded-md px-3 py-2 shadow-2xl cursor-grabbing`}
        style={{
          width: "200px",
          minHeight: "60px",
        }}
      >
        <div className="font-semibold text-sm">{event.title}</div>
        {event.desc && <div className="text-xs opacity-90 mt-1">{event.desc}</div>}
      </motion.div>
    </DragOverlay>
  )
}
