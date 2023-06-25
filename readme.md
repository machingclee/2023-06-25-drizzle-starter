- This is a barebone project for using drizzle as a mysql db migration tool.

- To start up a mysql server, run `sh mysql-startup-script.sh`, the volume is mounted at `~/javafx` (because at that time I am developing a javafx program).

- To create and alter table, you are free to copy and modify the `src/db/schema/users.ts` file. A new table or any adjustment to the tables take place when we use

  ```typescript
  yarn tsx generate && yarn tsx migrate
  ```

- More documentation on different database: [Link](https://orm.drizzle.team/docs/installation-and-db-connection).

- Create all schema from existing database: [Link](https://orm.drizzle.team/kit-docs/commands#introspect--pull)
