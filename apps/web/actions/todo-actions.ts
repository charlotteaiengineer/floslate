"use server";

import { PutCommand, QueryCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import { dynamoDb, TABLE_NAME } from "@/lib/dynamo";
import { cognitoClient } from "@/lib/cognito";
import { getSessionToken } from "./auth-actions";
import { revalidatePath } from "next/cache";

async function getCurrentUserId() {
  const token = await getSessionToken();
  if (!token) throw new Error("Unauthorized");

  try {
    const command = new GetUserCommand({ AccessToken: token });
    const response = await cognitoClient.send(command);
    return response.Username; // This is the 'sub' (userId)
  } catch (error) {
    console.error("Auth error:", error);
    throw new Error("Unauthorized");
  }
}

export async function getTodos() {
  try {
    const userId = await getCurrentUserId();
    
    const command = new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
    });

    const response = await dynamoDb.send(command);
    return response.Items || [];
  } catch (error) {
    console.error("Failed to get todos:", error);
    return [];
  }
}

export async function createTodo(content: string) {
  const userId = await getCurrentUserId();
  const todoId = crypto.randomUUID();
  
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      userId,
      todoId,
      content,
      completed: false,
      createdAt: new Date().toISOString(),
    },
  });

  await dynamoDb.send(command);
  revalidatePath("/dashboard");
}

export async function toggleTodo(todoId: string, completed: boolean) {
  const userId = await getCurrentUserId();
  
  const command = new UpdateCommand({
    TableName: TABLE_NAME,
    Key: { userId, todoId },
    UpdateExpression: "set completed = :completed",
    ExpressionAttributeValues: {
      ":completed": completed,
    },
  });

  await dynamoDb.send(command);
  revalidatePath("/dashboard");
}

export async function deleteTodo(todoId: string) {
  const userId = await getCurrentUserId();
  
  const command = new DeleteCommand({
    TableName: TABLE_NAME,
    Key: { userId, todoId },
  });

  await dynamoDb.send(command);
  revalidatePath("/dashboard");
}
