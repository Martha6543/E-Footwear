CREATE DATABASE  IF NOT EXISTS `cs4group3_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cs4group3_db`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: cs4group3_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `price` double NOT NULL,
  `stock` int NOT NULL,
  `desc` varchar(500) NOT NULL,
  `category` int NOT NULL DEFAULT '0',
  `image` varchar(500) NOT NULL,
  `gender` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Men\'s Vapour V Climbing Shoes',135.99,150,'Built around their lowest volume last, the Men’s Scarpa Vapour V Climbing Shoes are a performance rock shoe, updated and refined to give you the confidence you need.',1,'https://i1.adis.ws/i/jpl/go_330929_a?w=861&h=861',0),(2,'X Ultra 4 Mid GORE-TEX Men Hiking Boots',150,100,'Description: These boots are ideal for hiking and backpacking on rough terrain. They feature Gore-Tex waterproofing technology, a durable Contragrip outsole, and an EVA midsole for cushioning and support. ',0,'https://www.salomon.com/en-gb/shop-emea/media/catalog/product/L/4/L41383400_30784c6b1fdf21bf67034f8e4490e74e.png?fit=cover&quality=90&optimize=medium&format=pjpg&auto=webp&width=810',0),(3,'Hedgehog Fastpack Hiking Shoes',115,90,'T Our Hedgehog Fastpack Hiking Shoes are abrasion-resistant and feature a DryVent™ membrane to keep water out. The OrthoLite® footbed cushions your feet while the CRADLE™ GUIDE midsole and CRADLE™ heel stability technology provide support on uneven ground. The Vibram® XS Trek outsole keeps your footing firm on any terrain.',0,'https://images.thenorthface.com/is/image/TheNorthFaceEU/4PEV_ZR3_hero?$262x306$',1),(4,'Moab 2 Mid Gore-Tex Walking Boots',140,200,'The Moab 2 Mid GTX Walking Boots from Merrell is made from GORE-TEX fabric. GORE-TEX is a fully waterproof membrane which blocks out water but is also superbly breathable, allowing the wearer to stay dry, cool and comfortable as they perform.',0,'https://www.sportsdirect.com/images/imgzoom/18/18210690_xxl.jpg',2),(5,'Targhee III Waterproof Hiking Shoes ',135,10,'These waterproof hiking shoes have a leather and mesh upper, a breathable lining, and a dual-density EVA footbed for comfort and support. They also have a non-marking rubber outsole for traction. ',0,'https://www.castlebergoutdoors.co.uk/media/catalog/product/cache/0a8b3d80f583074029c53d3f4676cfff/k/e/keen-targhee-iii-wp-mens-chestnut-mulch_2.jpg',0),(6,'Sawtooth II Low Hiking Shoes ',110,50,'These low-cut hiking shoes feature a breathable mesh upper, a waterproof membrane, and a rugged Sawtooth outsole for traction on any terrain. They also have a removable insole for customizable cushioning. ',0,'https://cdn11.bigcommerce.com/s-34fmyejzeo/product_images/attribute_rule_images/24877_source_1616014209.jpg',1),(7,'Adizero Ubersonic 4 Tennis Shoes ',130,10,'These lightweight tennis shoes are designed for fast court movements. They have a breathable upper, a durable Adiwear outsole, and a responsive Boost midsole for energy return.',3,'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81OUZl7lAGL._AC_UL1500_.jpg',0),(8,'Gel-Resolution 8 Tennis Shoes ',135,99,'These tennis shoes feature Asics\' signature Gel cushioning technology to provide comfort and support on the court. They also have a Flexion Fit upper for flexibility, and a Trusstic System to reduce weight. ',3,'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Cc7tFzkyL._AC_UY500_.jpg',2),(9,'Nike Court Air Zoom GP Turbo Osaka Women\'s Hard Court Tennis Shoes',150,66,'Naomi Osaka\'s shoe combines a responsive Zoom Air unit with zones of durability, so you can stay fresh longer. For this version, we drew inspiration from Naomi\'s Haitian roots with a hibiscus flower print and her growing interest in gardening. Colour Shown: Coconut Milk/Team Orange/Black',3,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1e4aac7-2a6f-4fea-a5b9-95264234c182/nikecourt-air-zoom-gp-turbo-osaka-hard-court-tennis-shoes-XDcG2J.png',1),(10,'Fresh Foam Lav Tennis Shoes ',100,100,'These tennis shoes offer a comfortable fit and reliable support for all levels of play. They have a Fresh Foam midsole for cushioning, a Hypoknit upper for flexibility, and a durable NDurance outsole for long-lasting wear. ',3,'https://nb.scene7.com/is/image/NB/mchlavj2_nb_02_i?$pdpflexf2$&wid=440&hei=440',2),(11,'Rush Pro 3.0 Tennis Shoes ',120,50,'These tennis shoes are designed for aggressive players who need stability and speed on the court. They have a 4D support chassis for added support, a Pro Torque Chassis for flexibility, and a Duralast outsole for traction and durability.',3,'https://www.mdgsports.co.uk/images/wilson-rush-pro-3-0-mens-tennis-shoes-2019-blue-p825-2470_image.jpg',0),(12,'Tarantulace Climbing Shoes ',75,10,'These beginner-friendly climbing shoes have a comfortable unlined leather upper, a sticky FriXion rubber outsole, and a low asymmetry to help with edging and smearing. \r\n',1,'https://www.bfgcdn.com/1500_1500_90/301-0714/la-sportiva-womens-tarantulace-climbing-shoes-detail-2.jpg',0),(13,'Vapor Climbing Shoes ',175,99,'These all-around climbing shoes have a durable suede upper, a Vibram XS Edge outsole for superior grip, and a Bi-Tension active randing system for precise edging and support. \r\n',1,'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71TR6PtBS3L._AC_UX500_.jpg',2),(14,'Women\'s Anasazi LV Pro',130,10,'These high-performance climbing shoes have a Stealth rubber outsole for excellent grip on both rock and plastic, a stiff midsole for edging, and a low-volume fit for precision. \r\n',1,'https://www.bfgcdn.com/1500_1500_90/301-0553/five-ten-womens-anasazi-lv-pro-climbing-shoes-detail-2.jpg',1),(15,'Momentum Climbing Shoes ',95,20,'These entry-level climbing shoes are comfortable and versatile. They have a knit upper for breathability and stretch, a flat last for all-day comfort, and a NeoFriction rubber outsole for durability and grip. \r\n',1,'https://cdn11.bigcommerce.com/s-qrqahjv4q5/images/stencil/1000w/attribute_rule_images/7871_source_1678502310.png',0),(16,'Shaman Climbing Shoes',70,160,'These aggressive climbing shoes are designed for steep and technical routes. They have a microfiber upper, a downturned toe for precision, and a Trax rubber outsole for maximum friction. \r\n',1,'https://images.squarespace-cdn.com/content/v1/5b6d8215b1059890c89e29bb/1664386791214-8FV7JAK1VJC1LPNI82RO/IMG_3314.jpg?format=2500w',1),(17,'Ghost 14 Running Shoes',130,90,'These neutral running shoes have a smooth ride thanks to their DNA Loft cushioning technology. They also have a soft and breathable upper, a Segmented Crash Pad for smooth transitions, and a 3D Fit Print for a customized fit.\r\n',2,'https://cdn.sportsshoes.com/product/B/BRO2436/BRO2436_1000_2.jpg',1),(18,'Gel-Kayano 28 Running Shoes',160,20,'These running shoes feature Asics\' FlyteFoam technology for excellent cushioning and support. They also have a breathable and flexible upper, and a durable outsole with strategic rubber placements for added traction.\r\n',2,'https://images.asics.com/is/image/asics/1011B189_003_SR_RT_GLB?$sfcc-product$',0),(19,'Endorphin Pro 2 Running Shoes',200,90,'These high-performance running shoes are designed for speed. They feature a carbon fiber plate for energy return, a PWRRUN PB midsole for a lightweight and responsive feel, and a breathable and supportive upper.\r\n',2,'https://s7d4.scene7.com/is/image/WolverineWorldWide/S20687-116_1?wid=584&hei=484&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72',2),(20,'Air Zoom Pegasus 39 Running Shoes',120,29,'These versatile running shoes have a responsive and cushioned midsole for a smooth ride. They also have a breathable and supportive upper, and a durable outsole with rubber treads for added traction on various surfaces.\r\n',2,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a96f62d4-b20a-4371-a660-38565bc4581b/pegasus-39-road-running-shoes-rZmWzq.png',1),(21,'Clifton 8 Running Shoes',130,10,'These cushioned running shoes provide a comfortable and smooth ride. They have a lightweight and breathable upper, a Meta-Rocker midsole for a smooth transition, and a durable outsole with strategic rubber placements for added traction.\r\n',2,'https://cdn.sportsshoes.com/product/H/HOK1404/HOK1404_1000_1.jpg',0),(22,'Predator Accuracy.1 Firm Ground Football Boots ',200,300,'Designed with High Definition Grip elements on the upper to help achieve unrivalled traction against the ball, the mid-cut HybridTouch has a textured finish to optimise ball control. Finished off with a PRIME-KNIT collar and moulded studs, you need these boots for your next game.\r\n',4,'https://www.sportsdirect.com/images/imgzoom/20/20348740_xxl.jpg',2),(23,'Phantom Elite GX FG Football Boots',275,100,'These football boots are designed for attacking players who need precision and power. They have a Flyknit upper, a Hyperquick system for quick cuts, and a stud configuration for traction on natural grass. \r\n',4,'https://www.sportsdirect.com/images/imgzoom/20/20350003_xxl.jpg',0),(24,'CoreSpeed Frce Sn99',115,99,'These football boots feature a seamless, molded synthetic upper with a charged cushioning midsole for energy return and responsiveness. They also have a TPU outsole with conical studs for traction on firm ground. These shoes feature a CoreSpeed technology that enhances speed and agility while providing comfort and stability. The Sn99 shoe is made with a synthetic material called Snthetic, which is durable and lightweight.\r\n',4,'https://www.sportsdirect.com/images/imgzoom/19/19312169_xxl.jpg',1),(25,'Tekela V3 Pro FG Football Boots',200,120,'These football boots have a synthetic microfiber upper with Kinetic Stitch technology for improved ball control. They also have a lightweight nylon chassis for support, and a firm ground soleplate for traction on natural grass.\r\n',4,'',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03  9:44:13
