import { InferModel } from "drizzle-orm";
import { int, bigint, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  password: varchar('password', { length: 256 }).notNull()
});
export type User = Omit<InferModel<typeof users>, "id">;