'use client'

import { Calendar, dateFnsLocalizer, Views, type View, type SlotInfo } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, addMinutes, differenceInMinutes } from 'date-fns'
import { enUS } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState, useCallback } from 'react'
import { DndContext, DragEndEvent, DragStartEvent, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { CalendarToolbar } from './calendar-toolbar'
import { EventDialog } from './event-dialog'
import { DraggableEvent } from './draggable-event'
import { EventDragOverlay } from './event-drag-overlay'
import { DroppableDateCell, DroppableTimeSlot } from './calendar-dnd'
import { EVENTS, type CalendarEvent } from '@/lib/events'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function CalendarView() {
  const [view, setView] = useState<View>(Views.MONTH)
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState<CalendarEvent[]>(EVENTS)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null)
  const [activeEvent, setActiveEvent] = useState<CalendarEvent | null>(null)
  const [activeEventStyle, setActiveEventStyle] = useState<React.CSSProperties | undefined>(undefined)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const draggedEvent = events.find((e) => e.id === event.active.id)
    setActiveEvent(draggedEvent || null)

    // Capture the size of the dragged element from dnd-kit's rect
    // @ts-ignore: active.rect is internal but available
    if (event.active?.rect?.current?.initial) {
      // @ts-ignore
      const { width, height } = event.active.rect.current.initial;
      setActiveEventStyle({ width, height })
    } else {
      setActiveEventStyle(undefined)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && activeEvent) {
      const overData = over.data.current as { type: string; date: Date } | undefined

      if (overData && overData.date) {
        const duration = differenceInMinutes(activeEvent.end, activeEvent.start)
        const newStart = overData.date
        const newEnd = addMinutes(newStart, duration)

        setEvents((prev) => {
          const filtered = prev.filter((ev) => ev.id !== activeEvent.id)
          return [...filtered, { ...activeEvent, start: newStart, end: newEnd }]
        })
      }
    }

    setActiveEvent(null)
    setActiveEventStyle(undefined)
  }

  const handleSelectSlot = useCallback(
    ({ start, end }: SlotInfo) => {
      setSelectedSlot({ start, end })
      setSelectedEvent(null)
      setIsDialogOpen(true)
    },
    []
  )

  const handleSelectEvent = useCallback(
    (event: CalendarEvent) => {
      setSelectedEvent(event)
      setSelectedSlot(null)
      setIsDialogOpen(true)
    },
    []
  )

  const handleSaveEvent = (event: CalendarEvent) => {
    setEvents((prev) => {
      const filtered = prev.filter((ev) => ev.id !== event.id)
      return [...filtered, event]
    })
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== eventId))
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="h-[calc(100vh-100px)] p-4 bg-background">
        {/* @ts-ignore: React 19 compatibility */}
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          views={['month', 'week', 'day']}
          components={{
            toolbar: CalendarToolbar,
            event: DraggableEvent,
            timeSlotWrapper: DroppableTimeSlot as any,
            dateCellWrapper: DroppableDateCell as any,
          }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={(event) => ({
            className: `${event.color || 'bg-blue-500'} text-white border-none rounded-md px-2 py-1 text-xs`,
          })}
        />

        <EventDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          event={selectedEvent}
          selectedSlot={selectedSlot}
        />
      </div>

      <EventDragOverlay event={activeEvent} style={activeEventStyle} />
    </DndContext>
  )
}
