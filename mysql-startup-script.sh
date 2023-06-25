mkdir -p ~/javafx/mysql
docker run --name javafx -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=ToDoList -p 3306:3306 -v ~/javafx/mysql:/var/lib/mysql -d mysql:8.0.33