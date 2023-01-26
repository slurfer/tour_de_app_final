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
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programmers`
--

LOCK TABLES `programmers` WRITE;
/*!40000 ALTER TABLE `programmers` DISABLE KEYS */;
INSERT INTO `programmers` VALUES (47,'Martínek','Doušek'),(53,'Klára','Komrsková'),(55,'Karel','Janeček'),(56,'Tomáš','Ježek'),(58,'Martínek','Doušek');
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
  `description` mediumtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `record_id_UNIQUE` (`id`),
  KEY `fk_records_programmer_id_idx` (`programmer_id`),
  CONSTRAINT `programmer_id` FOREIGN KEY (`programmer_id`) REFERENCES `programmers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=313 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `records`
--

LOCK TABLES `records` WRITE;
/*!40000 ALTER TABLE `records` DISABLE KEYS */;
INSERT INTO `records` VALUES (267,'2023-01-07 16:04:23','2023-01-07 16:04:23','2023-01-08 17:05:11','python',60,3,47,'lososa'),(271,'2023-01-07 16:05:05','2023-01-07 16:05:05','2023-01-07 17:04:58','Python',1,3,NULL,'to se mi nějak nezdá...'),(273,'2023-01-07 16:06:10','2023-01-07 16:06:10','2023-01-06 17:05:53','Python',1,1,56,'teď ten bug je třeba jen jednou za 20 refreshnutí což už je docela snesitelné'),(274,'2023-01-07 16:06:36','2023-01-07 16:06:36','2023-01-03 17:06:27','Python',1,1,NULL,'pojďme dát více komentů'),(275,'2023-01-07 16:06:43','2023-01-07 16:06:43','2022-12-27 17:06:37','Python',1,1,NULL,'funky town'),(296,'2023-01-08 10:07:31','2023-01-08 10:07:31','2023-01-05 11:07:25','Python',1,1,NULL,'pojdmi'),(303,'2023-01-08 14:24:44','2023-01-08 14:24:44','2023-01-01 15:24:04','C++',19999999,5,47,'fak jů'),(304,'2023-01-08 15:14:45','2023-01-08 15:14:45','2022-01-08 17:05:11','python',60,3,47,'ahoj ty karle lidi'),(305,'2023-01-08 15:16:20','2023-01-08 15:16:20','2022-01-08 17:05:11','python',60,3,47,'ahoj ty nový karle lidi'),(309,'2023-01-09 00:46:26','2023-01-09 00:46:26','2023-01-02 01:45:41','Python',1,1,53,'this comment could surely be a bit longer'),(311,'2023-01-09 00:58:25','2023-01-09 00:58:25','2023-01-09 01:58:17','Python',1,1,55,'karlita'),(312,'2023-01-09 01:06:51','2023-01-09 01:06:51','2023-01-04 02:04:46','Python',1,3,55,'brother');
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
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag_id_UNIQUE` (`id`)
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

-- Dump completed on 2023-01-09  9:51:47
