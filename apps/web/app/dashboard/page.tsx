import { getTodos } from "@/actions/todo-actions";
import { getUserProfile } from "@/actions/user-actions";
import { TodoList } from "./todo-list";

export default async function DashboardPage() {
  const todos = await getTodos();
  const user = await getUserProfile();

  return (
    <div className="container mx-auto p-4 max-w-2xl min-h-screen py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {user?.name ? `${user.name}'s Todos` : "My Todos"}
        </h1>
        <p className="text-muted-foreground">Manage your tasks securely with DynamoDB.</p>
      </div>
      <TodoList initialTodos={todos} />
    </div>
  );
}
