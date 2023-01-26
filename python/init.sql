-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: TourDeApp
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `programmers`
--
-- CREATE USER 'root'@'localhost' IDENTIFIED BY '';
-- GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
CREATE DATABASE TourDeApp;
USE TourDeApp;
DROP TABLE IF EXISTS `programmers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programmers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programmers`
--

LOCK TABLES `programmers` WRITE;
/*!40000 ALTER TABLE `programmers` DISABLE KEYS */;
INSERT INTO `programmers` VALUES (2,'Filip','Tatíček'),(3,'Martin','Doušek'),(4,'Martin','Doušek'),(5,'Martin','Doušek'),(16,'Martin','Doušek'),(17,'Martin','Doušek'),(18,'Martin','Doušek'),(19,'Martin','Doušek'),(20,'Martin','Doušek'),(21,'Martin','Doušek'),(25,'Pavel','Doušek');
/*!40000 ALTER TABLE `programmers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `datetime` datetime DEFAULT NULL,
  `programming_language` varchar(45) NOT NULL,
  `minutes_spent` int NOT NULL,
  `rating` int NOT NULL,
  `programmer_id` int DEFAULT NULL,
  `tag_ids` json DEFAULT NULL,
  `description` mediumtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `record_id_UNIQUE` (`id`),
  KEY `fk_records_programmer_id_idx` (`programmer_id`),
  CONSTRAINT `programmer_id` FOREIGN KEY (`programmer_id`) REFERENCES `programmers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=279 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `records`
--

LOCK TABLES `records` WRITE;
/*!40000 ALTER TABLE `records` DISABLE KEYS */;
INSERT INTO `records` VALUES (92,'2022-12-29 14:51:39','2022-12-29 14:51:39','2022-12-25 15:51:33','Python',0,0,2,NULL,'So this is good.'),(93,'2022-12-29 15:08:44','2022-12-29 15:08:44','2022-12-26 16:08:37','Python',0,0,NULL,NULL,'ůlkfdjsfůsd\n'),(94,'2022-12-29 15:54:10','2022-12-29 15:54:10','2022-12-29 16:54:07','Python',0,0,NULL,NULL,'dsafsd'),(95,'2022-12-29 15:54:17','2022-12-29 15:54:17','2022-12-29 16:54:10','Python',0,0,NULL,NULL,'dfskaůljfdasůl'),(96,'2022-12-29 15:54:19','2022-12-29 15:54:19','2022-12-27 16:54:17','Python',0,0,NULL,NULL,'sdaklfjůfsa'),(200,'2023-01-04 11:53:16','2023-01-04 11:53:16','2023-01-04 12:53:16','python',20,3,NULL,NULL,'So this is good.'),(201,'2023-01-04 12:01:46','2023-01-04 12:01:46','2023-01-04 13:01:46','python',20,3,NULL,NULL,'So this is good.'),(202,'2023-01-04 12:01:46','2023-01-04 12:01:46','2023-01-04 13:01:46','javascript',21,5,NULL,NULL,'Wow, it can be updated.'),(205,'2023-01-04 17:26:04','2023-01-04 17:26:04','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(206,'2023-01-04 17:26:22','2023-01-04 17:26:22','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(207,'2023-01-04 17:27:12','2023-01-04 17:27:12','2022-12-28 17:05:11','python',20,3,3,NULL,'So this is good.'),(209,'2023-01-04 17:28:29','2023-01-04 17:28:29','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(213,'2023-01-04 18:38:51','2023-01-04 18:38:51','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(214,'2023-01-04 18:39:19','2023-01-04 18:39:19','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(215,'2023-01-04 18:39:51','2023-01-04 18:39:51','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(218,'2023-01-05 23:24:40','2023-01-05 23:24:40','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(219,'2023-01-07 11:09:09','2023-01-07 11:09:09','2022-12-28 17:05:11','python',20,3,2,NULL,'Ahoj'),(220,'2023-01-07 20:39:33','2023-01-07 20:39:33','2023-01-02 21:39:19','Python',1,1,NULL,NULL,'zdnngzdzngd'),(221,'2023-01-07 20:51:02','2023-01-07 20:51:02','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(224,'2023-01-07 21:01:26','2023-01-07 21:01:26','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(229,'2023-01-07 21:17:06','2023-01-07 21:17:06','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(232,'2023-01-07 21:19:31','2023-01-07 21:19:31','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(233,'2023-01-07 21:19:41','2023-01-07 21:19:41','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(236,'2023-01-07 21:29:19','2023-01-07 21:29:19','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(240,'2023-01-07 21:44:14','2023-01-07 21:44:14','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(241,'2023-01-07 21:44:35','2023-01-07 21:44:35','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(242,'2023-01-07 21:44:53','2023-01-07 21:44:53','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(244,'2023-01-08 10:32:16','2023-01-08 10:32:16','2022-12-28 17:05:11','python',20,3,2,NULL,'This is better.'),(245,'2023-01-08 10:57:21','2023-01-08 10:57:21','2022-12-28 17:05:11','python',20,3,2,NULL,'So this is good.'),(246,'2023-01-08 11:00:52','2023-01-08 11:00:52','2022-12-28 17:05:11','python',20,3,2,NULL,'aHOJ'),(248,'2023-01-08 16:55:34','2023-01-08 16:55:34','2022-12-28 17:05:11','python',20,3,2,NULL,NULL),(250,'2023-01-08 19:24:52','2023-01-08 19:24:52','2022-12-28 17:05:11','python',20,3,NULL,NULL,'So this is good.'),(251,'2023-01-08 20:06:58','2023-01-08 20:06:58','2022-12-28 17:05:11','python',20,3,NULL,NULL,'So this is good.'),(252,'2023-01-08 21:05:57','2023-01-08 21:05:57','2022-12-28 17:05:11','python',20,3,NULL,NULL,'So this is good.'),(253,'2023-01-08 21:06:36','2023-01-08 21:06:36','2022-12-28 17:05:11','python',20,3,NULL,NULL,'So this is good.'),(254,'2023-01-08 21:07:21','2023-01-08 21:07:21','2022-12-28 17:05:11','python',20,3,NULL,NULL,'So this is good.'),(255,'2023-01-08 21:08:24','2023-01-08 21:08:24','2022-12-28 17:05:11','python',20,3,NULL,NULL,'So this is good.'),(256,'2023-01-08 21:15:33','2023-01-08 21:15:33','2022-12-28 17:05:11','python',20,3,NULL,'[1, 2]','So this is good.'),(257,'2023-01-08 21:16:29','2023-01-08 21:16:29','2022-12-28 17:05:11','python',20,3,NULL,'[6]','So this is good.'),(258,'2023-01-09 07:13:04','2023-01-09 07:13:04','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(259,'2023-01-09 07:16:05','2023-01-09 07:16:05','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(260,'2023-01-09 07:16:44','2023-01-09 07:16:44','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(261,'2023-01-09 07:18:48','2023-01-09 07:18:48','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(262,'2023-01-09 07:23:50','2023-01-09 07:23:50','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(263,'2023-01-09 07:24:58','2023-01-09 07:24:58','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(264,'2023-01-09 07:26:03','2023-01-09 07:26:03','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(265,'2023-01-09 07:28:28','2023-01-09 07:28:28','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(266,'2023-01-09 07:29:36','2023-01-09 07:29:36','2023-01-08 17:05:11','javascript',120,1,3,'[1, 2]','Václav Klaus is the best econom.'),(267,'2023-01-09 07:31:42','2023-01-09 07:31:42','2023-01-08 17:05:11','javascript',120,1,3,'[1, 2]','Václav Klaus is the best econom.'),(268,'2023-01-09 07:50:15','2023-01-09 07:50:15','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(269,'2023-01-09 07:54:33','2023-01-09 07:54:33','2023-01-08 17:05:11','python',60,3,2,NULL,'lososa'),(270,'2023-01-09 07:54:37','2023-01-09 07:54:37','2023-01-08 17:05:11','javascript',120,1,3,'[1, 2]','Václav Klaus is the best econom.'),(271,'2023-01-09 07:55:54','2023-01-09 07:55:54','2023-01-08 17:05:11','javascript',120,1,NULL,NULL,NULL),(272,'2023-01-09 08:44:52','2023-01-09 08:44:52','2023-01-08 17:05:11','javascript',120,1,NULL,NULL,NULL),(273,'2023-01-09 08:49:37','2023-01-09 08:49:37','2023-01-08 17:05:11','javascript',120,1,NULL,NULL,NULL),(274,'2023-01-09 08:51:17','2023-01-09 08:51:17','2023-01-08 17:05:11','javascript',120,1,NULL,NULL,NULL),(275,'2023-01-09 08:51:52','2023-01-09 08:51:52','2023-01-08 17:05:11','javascript',120,1,NULL,NULL,NULL),(276,'2023-01-09 08:52:47','2023-01-09 08:52:47','2023-01-08 17:05:11','javascript',120,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tagged_records`
--

DROP TABLE IF EXISTS `tagged_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagged_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `record_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tag_id_idx` (`tag_id`),
  KEY `record_id_idx` (`record_id`),
  CONSTRAINT `record_id` FOREIGN KEY (`record_id`) REFERENCES `records` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tagged_records`
--

LOCK TABLES `tagged_records` WRITE;
/*!40000 ALTER TABLE `tagged_records` DISABLE KEYS */;
INSERT INTO `tagged_records` VALUES (3,246,1),(5,245,2);
/*!40000 ALTER TABLE `tagged_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag_id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'learning','green',NULL),(2,'working','red',NULL),(3,'TourDeApp','Orange','Cooperation with Filip'),(5,'TourDeApp','Orange','Idk'),(7,'TourDeApp','Hello','Test'),(8,'TourDeApp','Hello','Test'),(9,'TourDeApp','Hello',NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-09 12:10:40
