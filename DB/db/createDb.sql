CREATE DATABASE IF NOT EXISTS Forum CHARACTER SET = utf8mb4;

CREATE USER IF NOT EXISTS 'forum_user'@'localhost' IDENTIFIED BY '8QXzqCZS34eJ!qB';

GRANT SELECT, INSERT, UPDATE, DELETE ON Forum.* TO 'forum_user'@'localhost';