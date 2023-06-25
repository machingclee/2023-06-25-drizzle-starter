import { InferModel, relations } from "drizzle-orm";
import { int, bigint, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";
import { tasks } from "./tasks";

export const users = mysqlTable('users', {
  id: int("id").primaryKey().autoincrement().notNull(),
  username: text('username').notNull(),
  password: varchar('password', { length: 256 }).notNull()
});
export type User = Omit<InferModel<typeof users>, "id">;

// virtual relationship, good to document the dependencies only
export const usersTasksRelation = relations(users, ({ many }) => ({ tasks: many(tasks) }));

