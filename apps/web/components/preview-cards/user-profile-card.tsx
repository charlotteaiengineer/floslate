import { BentoCard } from "@aliveui/ui/bento-card"
import { Avatar, AvatarFallback, AvatarImage, Button, Text } from "@aliveui/ui"
import { ChevronRight } from "lucide-react"

interface UserProfileCardProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <BentoCard className="col-span-1">
      <div className="flex flex-row items-center gap-4 py-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQHjmIQToFk9tg/profile-displayphoto-crop_800_800/B4EZobySK6KoAI-/0/1761402760103?e=1765411200&v=beta&t=Xn3poQbRJph6LIAAM1cfdOQnEPvPWzVR2eL6Bxf9qBY" alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="text-center flex flex-col text-left">
          <Text size="2xl" variant="bold">{user.name}</Text>
          <Text size="sm" variant="regular" className="text-muted-foreground">{user.email}</Text>
          <Text size="xs" variant="regular" className="text-muted-foreground mt-1">Floslate</Text>
        </div>
      </div>
    </BentoCard>
  )
}
