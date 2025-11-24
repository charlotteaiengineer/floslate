import { BentoCard } from "@aliveui/ui/bento-card"
import { AppIcon } from "@aliveui/ui/app-icon"
import { Text } from "@aliveui/ui"

const apps = [
  {
    name: "Todo",
    icon: "todo" as const,
    color: "bg-blue-400",
    url: "http://localhost:3001"
  },
  {
    name: "Calendar",
    icon: "calendar" as const,
    color: "bg-red-400",
    url: "http://localhost:3002"
  },
  ,
  {
    name: "Mad Cooking",
    icon: "chef",
    color: "bg-orange-400",
    url: "http://localhost:3002"
  },
  {
    name: "Quiz Creator",
    icon: "quiz",
    color: "bg-purple-400",
    url: "http://localhost:3002"
  },
  {
    name: "Aspie Chat",
    icon: "chat",
    color: "bg-gray-500",
    url: "http://localhost:3002"
  }, {
    name: "Hypertrophy",
    icon: "weight",
    color: "bg-red-500",
    url: "http://localhost:3002"
  },
  {
    name: "Tea Creations",
    icon: "tea",
    color: "bg-pink-400",
    url: "http://localhost:3002"
  },
  // Future apps can be added here
]

export function AppsGridCard() {
  return (
    <BentoCard
      title="Apps"
      className="col-span-1 md:col-span-2"
    >
      <div className="grid grid-cols-5 gap-4 py-4">
        {apps.map((app) => (
          <a key={app.name} href={app.url}>
            <AppIcon
              icon={app.icon}
              label={app.name}
              // color={app.color}
              size="lg"
            />
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
