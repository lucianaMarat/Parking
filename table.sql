CREATE DATABASE IF NOT EXISTS managerParking

CREATE TABLE IF NOT EXISTS `users` (
    `userId` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `firstname` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role` varchar(255) NOT NULL,
    PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `spaces` (
    `spaceId` int(11) NOT NULL AUTO_INCREMENT,
    `numberSpace` int(10) NOT NULL,
    `occupied` BOOLEAN DEFAULT false,
    `timeOccupied` varchar(255) NOT NULL,
    `userId` int REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (`spaceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;