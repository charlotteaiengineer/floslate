import { motion } from "framer-motion"
import { CalendarEvent } from "@/lib/events"
import { EventProps } from "react-big-calendar"

export function AnimatedEvent({ event, title }: EventProps<CalendarEvent>) {
  return (
    <motion.div
      layout
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      // transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="h-full w-full overflow-hidden"
    >
      <div className="font-semibold text-xs truncate">{title}</div>
      {event.desc && <div className="text-[10px] truncate opacity-80">{event.desc}</div>}
    </motion.div>
  )
}
