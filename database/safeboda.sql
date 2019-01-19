-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 19, 2019 at 03:06 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safeboda`
--

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
CREATE TABLE IF NOT EXISTS `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area_name` varchar(255) NOT NULL,
  `radius` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`id`, `area_name`, `radius`, `createdAt`, `updatedAt`) VALUES
(1, 'Nairobi CBD', '[[36.77761,-1.33852],[36.75176,-1.30985],[36.75,-1.28264],[36.7654,-1.26573],[36.79459,-1.25217],[36.82514,-1.25509],[36.8463,-1.27037],[36.84618,-1.29183],[36.83884,-1.32788],[36.81269,-1.33989],[36.77761,-1.33852]]', '2019-01-18 00:00:00', '2019-01-18 00:00:00'),
(3, 'Ruaka Area', '[[36.75598,-1.21925],[36.74644,-1.21005],[36.74858,-1.20017],[36.7539,-1.18661],[36.76678,-1.18198],[36.79012,-1.18129],[36.79562,-1.19433],[36.80111,-1.21321],[36.78188,-1.22831],[36.76636,-1.22584],[36.75598,-1.21925]]', '2019-01-19 06:11:49', '2019-01-19 06:25:24');

-- --------------------------------------------------------

--
-- Table structure for table `promocodes`
--

DROP TABLE IF EXISTS `promocodes`;
CREATE TABLE IF NOT EXISTS `promocodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area_id` int(11) DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `state` enum('active','inactive') NOT NULL DEFAULT 'inactive',
  `amount` int(11) NOT NULL,
  `exp_date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `area_id` (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `promocodes`
--

INSERT INTO `promocodes` (`id`, `area_id`, `code`, `state`, `amount`, `exp_date`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'ABC123', 'active', 500, '2019-01-09 00:00:00', '2019-01-18 00:00:00', '2019-01-19 13:42:43'),
(2, 1, 'QWE098', 'active', 800, '2019-01-31 00:00:00', '2019-01-25 00:00:00', '2019-01-25 00:00:00'),
(7, 3, 'GCSZB', 'inactive', 600, '2019-02-03 07:55:20', '2019-01-19 07:55:20', '2019-01-19 07:55:20'),
(8, NULL, 'LBDKA', 'active', 600, '2019-02-03 12:13:50', '2019-01-19 12:13:50', '2019-01-19 12:13:50'),
(9, 3, 'QHSI8', 'inactive', 10, '2019-01-20 12:19:41', '2019-01-19 12:19:41', '2019-01-19 12:19:41');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `promocodes`
--
ALTER TABLE `promocodes`
  ADD CONSTRAINT `promocodes_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
