import { InferModel, relations, } from "drizzle-orm";
import { int, mysqlTable, serial, text, varchar, timestamp } from "drizzle-orm/mysql-core";
import { users } from "./users";

export const tasks = mysqlTable('tasks', {
  id: int("id").primaryKey().autoincrement().notNull(),
  userId: int('user_id').references(() => users.id),
  description: text('description').notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow()
});
export type Task = Omit<InferModel<typeof tasks>, "id">;

export const taskUserRelation = relations(tasks, ({ one }) => ({
  user: one(users, {
    fields: [tasks.userId],
    references: [users.id]
  })
}))