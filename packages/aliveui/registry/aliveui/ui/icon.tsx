"use client"

import * as React from "react"
import {
  CheckCircleIcon,
  PoweroffIcon,
  CallIcon,
  MailIcon,
  CalendarIcon,
  SearchIcon,
  FilterIcon,
  DiscountIcon,
  UserCircleIcon,
  AddIcon,
  ViewModuleIcon,
  TeaIcon,
  HelpCircleIcon,
  ChatIcon,
  HeartIcon,
  BookIcon
} from "tdesign-icons-react"
import { cn } from "@aliveui/ui"

const icons = {
  power: PoweroffIcon,
  todo: CheckCircleIcon,
  phone: CallIcon,
  inbox: MailIcon,
  calendar: CalendarIcon,
  search: SearchIcon,
  filter: FilterIcon,
  tag: DiscountIcon,
  user: UserCircleIcon,
  plus: AddIcon,
  apps: ViewModuleIcon,
  chef: TeaIcon,
  quiz: HelpCircleIcon,
  chat: ChatIcon,
  weight: HeartIcon,
  journal: BookIcon,
  tea: TeaIcon,
}

export type IconName = keyof typeof icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName
  className?: string
}

export function Icon({ icon, className, ...props }: IconProps) {
  const IconComponent = icons[icon] as React.ElementType

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent

      strokeWidth={1.2}
      fillColor={["#ffffff41", "#ffffff"]}
      // strokeColor={["#ffffff", "#ffffff"]}
      className={cn(className, "w-full h-full")}
      {...props}
    />
  )
}
