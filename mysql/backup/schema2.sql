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

DROP TABLE IF EXISTS `programmers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programmers` (
  `programmer_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  PRIMARY KEY (`programmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programmers`
--

LOCK TABLES `programmers` WRITE;
/*!40000 ALTER TABLE `programmers` DISABLE KEYS */;
INSERT INTO `programmers` VALUES (2,'Filip','Tatíček'),(3,'Martin','Doušek'),(4,'Martin','Doušek'),(5,'Martin','Doušek'),(6,'Martin','Doušek'),(7,'Martin','Doušek'),(8,'Martin','Doušek'),(9,'Martin','Doušek'),(10,'Martin','Doušek'),(11,'Martin','Doušek'),(12,'Martin','Doušek'),(13,'Martin','Doušek'),(14,'Martin','Doušek'),(15,'Martin','Doušek'),(16,'Martin','Doušek'),(17,'Martin','Doušek'),(18,'Martin','Doušek'),(19,'Martin','Doušek'),(20,'Martin','Doušek'),(21,'Martin','Doušek'),(23,'Martin','Doušek'),(24,'Martin','Doušek'),(26,'Martin','Doušek'),(27,'Martin','Doušek');
/*!40000 ALTER TABLE `programmers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `records` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `time_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date` datetime NOT NULL,
  `programming_language` varchar(45) NOT NULL,
  `minutes_spent` int NOT NULL,
  `rating` int NOT NULL,
  `programmer_id` int DEFAULT NULL,
  `description` mediumtext,
  PRIMARY KEY (`record_id`),
  UNIQUE KEY `record_id_UNIQUE` (`record_id`),
  KEY `fk_records_programmer_id_idx` (`programmer_id`),
  CONSTRAINT `fk_records_programmer_id` FOREIGN KEY (`programmer_id`) REFERENCES `programmers` (`programmer_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `records`
--

LOCK TABLES `records` WRITE;
/*!40000 ALTER TABLE `records` DISABLE KEYS */;
INSERT INTO `records` VALUES (29,'2022-12-21 16:27:56','2022-12-21 16:27:56','2022-12-21 17:27:56','python',20,3,NULL,'So this is good.'),(30,'2022-12-21 16:39:12','2022-12-21 16:39:12','2022-12-21 17:39:12','python',20,3,NULL,'So this is good.'),(31,'2022-12-21 16:40:19','2022-12-21 16:40:19','2022-12-21 17:40:19','python',20,3,NULL,'So this is good.'),(33,'2022-12-21 16:54:02','2022-12-21 16:54:02','2022-12-21 17:54:02','python',20,3,NULL,'So this is good.'),(43,'2022-12-28 16:11:07','2022-12-28 16:11:07','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(44,'2022-12-28 16:20:38','2022-12-28 16:20:38','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(45,'2022-12-28 16:23:14','2022-12-28 16:23:14','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(46,'2022-12-28 16:24:55','2022-12-28 16:24:55','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(47,'2022-12-28 16:29:45','2022-12-28 16:29:45','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(48,'2022-12-28 16:29:52','2022-12-28 16:29:52','2022-12-28 17:29:52','python',20,3,NULL,'So this is good.'),(49,'2022-12-29 09:58:33','2022-12-29 09:58:33','2022-12-29 10:58:33','javascript',21,5,NULL,'Wow, it can be updated.'),(50,'2022-12-29 11:24:05','2022-12-29 11:24:05','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(51,'2022-12-29 11:24:09','2022-12-29 11:24:09','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(52,'2022-12-29 11:24:22','2022-12-29 11:24:22','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(53,'2022-12-29 11:24:56','2022-12-29 11:24:56','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(54,'2022-12-29 11:25:02','2022-12-29 11:25:02','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(55,'2022-12-29 11:25:28','2022-12-29 11:25:28','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(56,'2022-12-29 11:26:43','2022-12-29 11:26:43','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(57,'2022-12-29 11:27:07','2022-12-29 11:27:07','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(58,'2022-12-29 11:28:39','2022-12-29 11:28:39','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(59,'2022-12-29 11:29:21','2022-12-29 11:29:21','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(60,'2022-12-29 11:29:27','2022-12-29 11:29:27','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(61,'2022-12-29 11:29:41','2022-12-29 11:29:41','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(62,'2022-12-29 11:32:15','2022-12-29 11:32:15','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(63,'2022-12-29 11:32:34','2022-12-29 11:32:34','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(64,'2022-12-29 11:34:00','2022-12-29 11:34:00','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(65,'2022-12-29 11:36:14','2022-12-29 11:36:14','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(66,'2022-12-29 11:37:18','2022-12-29 11:37:18','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(67,'2022-12-29 11:37:34','2022-12-29 11:37:34','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(68,'2022-12-29 11:38:13','2022-12-29 11:38:13','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(69,'2022-12-29 11:39:54','2022-12-29 11:39:54','2022-12-29 12:39:54','python',20,3,NULL,'So this is good.'),(70,'2022-12-29 11:40:25','2022-12-29 11:40:25','2022-12-29 12:40:25','python',20,3,NULL,'So this is good.'),(72,'2022-12-29 15:25:24','2022-12-29 15:25:24','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(73,'2022-12-29 15:25:52','2022-12-29 15:25:52','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(74,'2022-12-29 15:26:25','2022-12-29 15:26:25','2022-12-28 17:05:11','python',20,3,NULL,'So this is good.'),(76,'2022-12-29 15:44:22','2022-12-29 15:44:22','2022-12-29 16:44:22','python',20,3,NULL,'So this is good.'),(77,'2022-12-29 15:45:42','2022-12-29 15:45:42','2022-12-29 16:45:42','python',20,3,NULL,'So this is good.'),(88,'2022-12-29 19:35:47','2022-12-29 19:35:47','2022-12-28 17:05:11','python',20,3,27,'This is updated.');
/*!40000 ALTER TABLE `records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tagged_records`
--

DROP TABLE IF EXISTS `tagged_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagged_records` (
  `taged_record_id` int NOT NULL AUTO_INCREMENT,
  `record_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`taged_record_id`),
  KEY `tag_id_idx` (`tag_id`),
  KEY `record_id_idx` (`record_id`),
  CONSTRAINT `record_id` FOREIGN KEY (`record_id`) REFERENCES `records` (`record_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tagged_records`
--

LOCK TABLES `tagged_records` WRITE;
/*!40000 ALTER TABLE `tagged_records` DISABLE KEYS */;
/*!40000 ALTER TABLE `tagged_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(45) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`tag_id`),
  UNIQUE KEY `tag_id_UNIQUE` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'learning','green',NULL),(2,'working','red',NULL);
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

-- Dump completed on 2022-12-29 21:22:13
