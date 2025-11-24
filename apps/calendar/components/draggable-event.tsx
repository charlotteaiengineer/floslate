import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { motion } from "framer-motion"
import { CalendarEvent } from "@/lib/events"
import { EventProps } from "react-big-calendar"

export function DraggableEvent({ event, title }: EventProps<CalendarEvent>) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: event.id,
    data: event,
  })

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isDragging ? 0.5 : 1, 
        scale: isDragging ? 0.95 : 1 
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`h-full w-full overflow-hidden cursor-grab active:cursor-grabbing ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="font-semibold text-xs truncate">{title}</div>
      {event.desc && <div className="text-[10px] truncate opacity-80">{event.desc}</div>}
    </motion.div>
  )
}
