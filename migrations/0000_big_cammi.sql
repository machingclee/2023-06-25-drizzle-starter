CREATE TABLE `tasks` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int,
	`description` text NOT NULL,
	`created_at` timestamp DEFAULT (now()));
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password` varchar(256) NOT NULL);
--> statement-breakpoint
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;