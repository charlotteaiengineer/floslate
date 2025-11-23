import { getTodos } from "@/actions/todo-actions";
import { getUserProfile } from "@/actions/user-actions";
import { TodoList } from "./todo-list";
import { Button, Card, CardContent } from "@aliveui/ui";
import { X } from "lucide-react";

export default async function DashboardPage() {
  const { todos } = await getTodos();
  const user = await getUserProfile();

  return (
    <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl font-bold">
          {user?.name?.[0] || "U"}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Today's highlights</p>
          <h1 className="text-3xl font-bold">Hi, {user?.name || "User"}</h1>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="relative rounded-lg border bg-purple-50 p-6 text-purple-900">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2 text-purple-900 hover:bg-purple-100">
          <X className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-semibold mb-2">Welcome to the new homepage</h2>
        <p className="text-sm opacity-90">
          We're introducing a new way for you to get an overview of your work, so you can plan what to work on next. The homepage is now the default for you.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Merge requests", count: 0, desc: "Waiting for your review" },
          { label: "Merge requests", count: 0, desc: "Assigned to you" },
          { label: "Issues", count: 0, desc: "Assigned to you" },
          { label: "Issues", count: 0, desc: "Authored by you" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.count}</div>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pick up where you left off */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Pick up where you left off</h3>
        <Card>
           <CardContent className="p-6">
             <p className="text-sm text-muted-foreground">No recent activity.</p>
           </CardContent>
        </Card>
      </div>

      {/* Items that need your attention (Todos) */}
      <div>
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-lg font-semibold">Items that need your attention</h3>
        </div>
        <TodoList initialTodos={todos} />
      </div>
    </div>
  );
}
