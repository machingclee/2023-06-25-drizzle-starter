CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password` varchar(256) NOT NULL,
	`gender` varchar(1) NOT NULL);
