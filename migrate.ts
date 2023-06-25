import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';
import process from 'node:process';

// create the connection
const poolConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'ToDoList',
  password: "123",
  multipleStatements: true
});

const db = drizzle(poolConnection, { logger: true });

migrate(db, { migrationsFolder: 'migrations-folder' }).then(() => {
  process.exit(0);
})

