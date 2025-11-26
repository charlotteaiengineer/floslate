import { BentoCard } from "@aliveui/ui/bento-card"
import { Button, Text, Checkbox } from "@aliveui/ui"
import { Icon } from "@aliveui/ui/icon"
import { ChevronRight, Plus } from "lucide-react"

// Import from todo app - these will need to be exposed as shared types
type Todo = {
  userId: string
  todoId: string
  content: string
  completed: boolean
  createdAt: string
}

// Mock function for now - will be replaced with actual API call
async function getTodayTodos(limit: number = 3): Promise<Todo[]> {
  // This will need to fetch from the todo app's API or database
  // For now, return empty array
  return []
}

function TodoPreviewItem({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Checkbox checked={todo.completed} disabled className="mt-0.5" />
      <div className="flex-1">
        <span className={`text-sm ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
          {todo.content}
        </span>
      </div>
    </div>
  )
}

export async function TodoPreviewCard() {
  const todos = await getTodayTodos(3)

  return (
    <BentoCard
      title="Todo"
      icon="todo"
      action={
        <Button variant="ghost" size="icon" asChild>
          <a href="http://localhost:3001">
            <ChevronRight className="h-4 w-4" />
          </a>
        </Button>
      }
      className="col-span-1 md:col-span-2"
    >
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-3">
            <Icon icon="calendar" className="w-6 h-6 text-muted-foreground" />
          </div>
          <Text variant="medium" className="text-sm">No tasks for today</Text>
          <Text variant="regular" className="text-xs text-muted-foreground mt-1">
            Add your first task to get started
          </Text>
          <Button variant="outline" size="sm" className="mt-4" asChild>
            <a href="http://localhost:3001">
              <Plus className="h-4 w-4 mr-2" />
              Add task
            </a>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {todos.map((todo) => (
            <TodoPreviewItem key={todo.todoId} todo={todo} />
          ))}
          {todos.length === 3 && (
            <Button variant="ghost" size="sm" className="mt-2 justify-start" asChild>
              <a href="http://localhost:3001">
                View all tasks
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          )}
        </div>
      )}
    </BentoCard>
  )
}
