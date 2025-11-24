import { getUserProfile } from "@/actions/user-actions";
import { Button, Card, CardContent } from "@aliveui/ui";
import { X } from "lucide-react";

export default async function DashboardPage() {
  const user = await getUserProfile();

  const apps = [
    {
      name: "Todo App",
      description: "Manage your daily tasks and stay organized.",
      url: "http://localhost:3001",
      icon: "📝",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Notes (Coming Soon)",
      description: "Capture your thoughts and ideas.",
      url: "#",
      icon: "📒",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Calendar (Coming Soon)",
      description: "Schedule your events and meetings.",
      url: "#",
      icon: "📅",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl font-bold">
          {user?.name?.[0] || "U"}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">App Store</p>
          <h1 className="text-3xl font-bold">Hi, {user?.name || "User"}</h1>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="relative rounded-lg border bg-purple-50 p-6 text-purple-900">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2 text-purple-900 hover:bg-purple-100">
          <X className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-semibold mb-2">Welcome to Floslate App Store</h2>
        <p className="text-sm opacity-90">
          Browse and launch your applications from here.
        </p>
      </div>

      {/* My Apps */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Apps</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <a key={i} href={app.url} target={app.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className={`h-12 w-12 rounded-lg ${app.color} flex items-center justify-center text-2xl`}>
                    {app.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{app.name}</h4>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
