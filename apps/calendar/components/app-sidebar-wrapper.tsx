import { type IconName } from "@aliveui/ui/icon"

export const sidebarData: {
  user: {
    name: string
    email: string
    avatar: string
  }
  navMain: {
    title: string
    url: string
    icon: IconName
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
} = {
  user: {
    name: "Charlotte Bondarev",
    email: "charlotte@example.com",
    avatar: "https://media.gq-magazin.de/photos/67444f69e08fe3c8fb1a1be5/16:10/w_2240,c_limit/GQ0624_GER_Coverstory_Michele%20Lamy_4.jpg",
  },
  navMain: [
    {
      title: "Calendar",
      url: "/",
      icon: "calendar",
      isActive: true,
      items: [
        {
          title: "Month",
          url: "/month",
        },
        {
          title: "Week",
          url: "/week",
        },
        {
          title: "Day",
          url: "/day",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: "user",
      items: [],
    },
  ],
}
