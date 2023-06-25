import { drizzle } from 'drizzle-orm/mysql2';

import mysql from 'mysql2/promise';
import { User, users } from '../src/db/schema/users';




(async () => {
  // create the connection
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ToDoList',
    password: "123"
  });

  const db = drizzle(connection);

  const user: User = { username: "James Lee 2", password: "1243" };
  await db.insert(users).values(user);
})();
