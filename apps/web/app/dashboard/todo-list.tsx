"use client";

import { useRef } from "react";
import { createTodo, toggleTodo, deleteTodo } from "@/actions/todo-actions";
import { Button, Input, Card, CardContent } from "@aliveui/ui";

export function TodoList({ initialTodos }: { initialTodos: any[] }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="space-y-4">
      <form 
        action={async (formData) => {
          const content = formData.get("content") as string;
          if (!content) return;
          await createTodo(content);
          formRef.current?.reset();
        }} 
        ref={formRef}
        className="flex gap-2"
      >
        <Input name="content" placeholder="Add a new todo..." required />
        <Button type="submit">Add</Button>
      </form>

      <div className="space-y-2">
        {initialTodos.map((todo) => (
          <Card key={todo.todoId}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.todoId, !todo.completed)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className={todo.completed ? "line-through text-muted-foreground" : ""}>
                  {todo.content}
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => deleteTodo(todo.todoId)}
                className="text-destructive hover:text-destructive/90"
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
        {initialTodos.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No todos yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}
