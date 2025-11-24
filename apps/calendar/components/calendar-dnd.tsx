'use client'

import { useDroppable } from '@dnd-kit/core'
import { format } from 'date-fns'
import React from 'react'

interface WrapperProps {
    value: Date
    children?: React.ReactNode
    className?: string
}

export const DroppableTimeSlot = ({ value, children, className }: WrapperProps) => {
    const { setNodeRef, isOver } = useDroppable({
        id: `time-slot-${value.toISOString()}`,
        data: {
            type: 'time-slot',
            date: value,
        },
    })

    return (
        <div
            ref={setNodeRef}
            className={`${className || ''} ${isOver ? 'bg-primary/10' : ''}`}
            style={{ flex: 1 }}
        >
            {children}
        </div>
    )
}

export const DroppableDateCell = ({ value, children }: WrapperProps) => {
    const { setNodeRef, isOver } = useDroppable({
        id: `date-cell-${value.toISOString()}`,
        data: {
            type: 'date-cell',
            date: value,
        },
    })

    return (
        <div
            ref={setNodeRef}
            className={`h-full w-full ${isOver ? 'bg-primary/10' : ''}`}
        >
            {children}
        </div>
    )
}
