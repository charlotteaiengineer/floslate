import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { motion } from "framer-motion"
import { CalendarEvent } from "@/lib/events"
import { EventProps } from "react-big-calendar"

export function DraggableEvent({ event, title }: EventProps<CalendarEvent>) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: event.id,
    data: { ...event, style: { width: "100%", height: "100%" } }, // We can't easily get computed style here without ref, but we can try to pass something. 
    // Actually, we need the ref to get the size. 
    // Let's rely on the fact that dnd-kit might not expose it easily in data.
    // Instead, let's just use a default or try to measure.
  })

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      {...attributes}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isDragging ? 0 : 1,
        scale: 1
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`h-full w-full overflow-hidden cursor-grab active:cursor-grabbing rounded-md px-2 py-1 shadow-sm ${isDragging ? "opacity-0" : ""
        }`}
    >
      <div className="font-semibold text-xs truncate">{title}</div>
      {event.desc && <div className="text-[10px] truncate opacity-80">{event.desc}</div>}
    </motion.div>
  )
}
