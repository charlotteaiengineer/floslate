'use client'

import { Calendar, dateFnsLocalizer, Views, type View, type SlotInfo } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { useState, useCallback } from 'react'
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { CalendarToolbar } from './calendar-toolbar'
import { EventDialog } from './event-dialog'
import { DraggableEvent } from './draggable-event'
import { EventDragOverlay } from './event-drag-overlay'
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

const DnDCalendar = withDragAndDrop<CalendarEvent>(Calendar)

export default function CalendarView() {
  const [view, setView] = useState<View>(Views.MONTH)
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState<CalendarEvent[]>(EVENTS)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null)
  const [activeEvent, setActiveEvent] = useState<CalendarEvent | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    const draggedEvent = events.find((e) => e.id === event.active.id)
    setActiveEvent(draggedEvent || null)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveEvent(null)
  }

  const onEventResize = useCallback(
    ({ event, start, end }: any) => {
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end } as CalendarEvent]
      })
    },
    [setEvents]
  )

  const onEventDrop = useCallback(
    ({ event, start, end }: any) => {
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end } as CalendarEvent]
      })
    },
    [setEvents]
  )

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
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="h-[calc(100vh-100px)] p-4 bg-background">
        {/* @ts-ignore */}
        <DnDCalendar
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
          }}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
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

      {/* <EventDragOverlay event={activeEvent} /> */} // currently is breaking the implementation
    </DndContext>
  )
}
