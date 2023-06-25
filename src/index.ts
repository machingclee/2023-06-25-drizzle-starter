import { drizzle } from 'drizzle-orm/mysql2';
import mysql from "mysql2/promise";

import { User, users } from './db/schema/users';



const main = async () => {
  // create the connection
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ToDoList',
    password: "123"
  });

  const db = drizzle(connection);

  console.log("running ...")
}

main();

