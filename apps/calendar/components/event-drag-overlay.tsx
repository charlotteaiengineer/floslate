import { DragOverlay } from "@dnd-kit/core"
import { motion } from "framer-motion"
import { CalendarEvent } from "@/lib/events"

interface EventDragOverlayProps {
  event: CalendarEvent | null
}

export function EventDragOverlay({ event, style }: EventDragOverlayProps & { style?: React.CSSProperties }) {
  if (!event) return null

  return (
    <DragOverlay dropAnimation={null}>
      <motion.div
        initial={{ scale: 1, rotate: 0, opacity: 0.8 }}
        animate={{ scale: 1.05, rotate: 2, opacity: 1, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`${event.color || "bg-blue-500"} text-white border-none rounded-md px-3 py-2 cursor-grabbing`}
        style={{
          ...style,
        }}
      >
        <div className="font-semibold text-sm">{event.title}</div>
        {event.desc && <div className="text-xs opacity-90 mt-1">{event.desc}</div>}
      </motion.div>
    </DragOverlay>
  )
}
