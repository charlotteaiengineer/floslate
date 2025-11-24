import { Button, Input, Label, Text } from "@aliveui/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@aliveui/ui/dialog"
import { CalendarEvent } from "@/lib/events"
import { useState, useEffect } from "react"

interface EventDialogProps {
  isOpen: boolean
  onClose: () => void
  onSave: (event: CalendarEvent) => void
  onDelete: (eventId: string) => void
  event: CalendarEvent | null
  selectedSlot?: { start: Date; end: Date } | null
}

export function EventDialog({
  isOpen,
  onClose,
  onSave,
  onDelete,
  event,
  selectedSlot,
}: EventDialogProps) {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  useEffect(() => {
    if (event) {
      setTitle(event.title)
      setDesc(event.desc || "")
      setStart(event.start.toISOString().slice(0, 16))
      setEnd(event.end.toISOString().slice(0, 16))
    } else if (selectedSlot) {
      setTitle("")
      setDesc("")
      setStart(selectedSlot.start.toISOString().slice(0, 16))
      setEnd(selectedSlot.end.toISOString().slice(0, 16))
    }
  }, [event, selectedSlot, isOpen])

  const [error, setError] = useState("")

  const handleSave = () => {
    setError("")
    if (!title) {
      setError("Title is required")
      return
    }
    if (!start || !end) {
      setError("Start and end times are required")
      return
    }

    if (new Date(start) >= new Date(end)) {
      setError("End time must be after start time")
      return
    }

    const newEvent: CalendarEvent = {
      id: event?.id || Math.random().toString(36).substr(2, 9),
      title,
      desc,
      start: new Date(start),
      end: new Date(end),
      color: event?.color || "bg-blue-500", // Default color
    }

    onSave(newEvent)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event ? "Edit Event" : "Add Event"}</DialogTitle>
          <DialogDescription>
            {event ? "Make changes to your event here." : "Add a new event to your calendar."}
          </DialogDescription>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="start" className="text-right">
              Start
            </Label>
            <Input
              id="start"
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="end" className="text-right">
              End
            </Label>
            <Input
              id="end"
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="desc" className="text-right">
              Description
            </Label>
            <Input
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex justify-between sm:justify-between">
          {event && (
            <Button variant="destructive" onClick={() => { onDelete(event.id); onClose(); }}>
              Delete
            </Button>
          )}
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save changes</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
