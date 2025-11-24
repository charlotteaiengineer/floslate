import { BentoCard } from "@aliveui/ui/bento-card"
import { AppIcon } from "@aliveui/ui/app-icon"
import { Text } from "@aliveui/ui"

const apps = [
  {
    name: "Todo",
    icon: "todo" as const,
    color: "bg-gray-500",
    url: "http://localhost:3001"
  },
  // Future apps can be added here
]

export function AppsGridCard() {
  return (
    <BentoCard 
      title="Apps"
      className="col-span-1 md:col-span-2"
    >
      <div className="grid grid-cols-4 gap-4 py-4">
        {apps.map((app) => (
          <a key={app.name} href={app.url}>
            <AppIcon 
              icon={app.icon} 
              label={app.name} 
              color={app.color}
              size="lg"
            />
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
