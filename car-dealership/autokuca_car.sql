-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: autokuca
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `make_id` int NOT NULL,
  `model_id` int NOT NULL,
  `km` int NOT NULL,
  `color_id` int DEFAULT NULL,
  `price` int NOT NULL,
  `discount` int DEFAULT '0',
  `year` int NOT NULL,
  `fuel_id` int NOT NULL,
  `kw` int NOT NULL,
  `hp` int NOT NULL,
  `description` mediumtext,
  `type_id` int DEFAULT NULL,
  `transmission_id` int DEFAULT NULL,
  `main_image` varchar(500) NOT NULL,
  `image1` varchar(500) DEFAULT NULL,
  `image2` varchar(500) DEFAULT NULL,
  `image3` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`),
  KEY `fk_car_model_idx` (`model_id`),
  KEY `fk_car_make_idx` (`make_id`),
  KEY `fk_car_fuel_idx` (`fuel_id`),
  KEY `fk_car_color_idx` (`color_id`),
  KEY `fk_car_type_idx` (`type_id`),
  KEY `fk_car_transmission_idx` (`transmission_id`),
  CONSTRAINT `fk_car_color` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  CONSTRAINT `fk_car_fuel` FOREIGN KEY (`fuel_id`) REFERENCES `fuel` (`id`),
  CONSTRAINT `fk_car_make` FOREIGN KEY (`make_id`) REFERENCES `make` (`id`),
  CONSTRAINT `fk_car_model` FOREIGN KEY (`model_id`) REFERENCES `model` (`id`),
  CONSTRAINT `fk_car_transmission` FOREIGN KEY (`transmission_id`) REFERENCES `transmission` (`id`),
  CONSTRAINT `fk_car_type` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'Audi A6 3.0 TDI QUATTRO',1,5,180000,9,34000,0,2015,1,180,245,'Crna metalic, klimatronic, daljinsko zaključavanje, ABS, ESP, 8x airbag\'s, servo, 4x el. podizači stakala, audio sustav CD/Mp3, bluetooth priključak za telefon, senzor za kišu, automatski zasjenjiv unutrašnji retrovizor, naslonjač za ruku s pretincem, kontrola zraka u gumama, ISOFIX učvršćivač za dječje sjedalo, sklopivo stražnje sjedalo, stražnji naslon za ruku, ukrasni detalji unutrašnjosti od aluminija, krom paket, multifunkcijske tipke na volanu, putno računalo, tempomat, 2xParking senzori, el. preklapanje retrovizora, alu felge 17\',  display u boji, LED dnevna svjetla, Bi-Xenon  svjetla, dinamičko reguliranje duljine snopa, uređaj za čišćenje svjetala, Ispušni sustav sa dvije cijevi, zatamnjena stražnja stakla, Start/stop sistem sa regeneracijom energije, Audi hold assist, Audi drive select, Audi pre sense basic - sistem proaktivne zaštite putnika (automatski zatezači pojaseva i zatvaranje prozora), Keyless go - paljenje na dodir, S-Tronic, Quattro 4x4, SPORTPAKET,.. U ZAMJENI SKUPLJI !!!',1,1,'https://s9.pik.ba/galerija/2021-05/08/08/slika-1015512-6096d43cec58f-velika.jpg','https://s9.pik.ba/galerija/2021-05/08/08/slika-1015512-6096d43fd46a1-velika.jpg','https://s9.pik.ba/galerija/2021-05/08/08/slika-1015512-6096d43e2b6f2-velika.jpg','https://s9.pik.ba/galerija/2021-05/08/08/slika-1015512-6096d441f0e61-velika.jpg'),(3,'Volkswagen CC R-Line 2.0 TDI',2,3,125000,5,29990,2000,2015,1,103,140,'CHROM PAKET\nFULL LED FAROVI/STOPKE/ UNUTRASNJOST\nDIG. DVOOZONSKA KLIMA\nORG. GUMENE / PLATNENE PATOSNICE\nRIKVERC KAMERA\nSTART/STOP PALJENJE BEZ KLJUCA\nOTKLJUCAVANJE / ZAKLJUCAVANJE NA DODIR\nOTVARANJE GEPEKA NA DUGME ILI PRKO SENZORA ISPOD GEPEKA ( dovoljno je postaviti nogu ispod gepeka)\nEL.PREKLAPANJE RETROVIZORA\nGRIJANJE SJEDISTA\n4X EL. PODIZACI PROZORA\nDUPLA STAKLA\nZATAMNJENA STAKLA NAPRIJED\nNAZAD FABRICKI ZATAMNJEN\nALU FELGE 17\" SA NOVIM ZIMSKIM GUMAMA\nAUX, SD, USB\nALARM\nZASTITA PROTIV KRAĐE\nMETA SISTEM\nPARKING SENZORI NAPRIJED/ NAZAD\n2X GRIJANJE RETROVIZORA\nDYNAUDIO OZVUCENJE\nEL. RUCNA KOCNICA\nNASLON ZA RUKU NAPRIJED/ NAZAD\nTEMPOMAT\nXENON / AKTIVNO PRACENJE REZIMA VOZNJE\nCOMING/ LEAVING HOME\nBORD U BOJI',6,2,'https://s9.pik.ba/galerija/2021-05/24/06/slika-248946-60abd8df79204-velika.jpg','https://s9.pik.ba/galerija/2021-05/24/06/slika-248946-60abd8dcc277d-velika.jpg','https://s9.pik.ba/galerija/2021-05/24/06/slika-248946-60abd8df53136-velika.jpg','https://s9.pik.ba/galerija/2021-05/24/06/slika-248946-60abd8e8de368-velika.jpg'),(4,'Volkswagen Golf 8 GTI',2,1,6000,2,91990,2000,2021,2,180,245,'NOVO VOZILO! FULL OPREMA!!!',1,1,'https://s9.pik.ba/galerija/2021-07/13/02/slika-154147-60ed82f99bbd6-velika.jpg','https://s9.pik.ba/galerija/2021-07/13/02/slika-154147-60ed82f88d1b1-velika.jpg','https://s9.pik.ba/galerija/2021-07/13/02/slika-154147-60ed82f3bf827-velika.jpg','https://s9.pik.ba/galerija/2021-07/13/02/slika-154147-60ed83753e1d4-velika.jpg'),(7,'Mercedes-Benz CLS 400d ',5,11,45000,1,135000,1010,2019,1,254,340,'Mercedes CLS400 4 matic \n\n45.000 km\nDodatna oprema:\nAMG enterijer i eksterijer \n9G tronic mjenjac\nSportska sjedista u kombinaciji koza/dinamika crne boje\nGrijanje sjedista za vozaca i suvozaca \nDinamic select\nSportski zvuk motora\nAktivni pomocni asistent za pracenje linije \nDodatna funkcija automatskog kretanja u guzvi\nDriving assistance Paket PLUS\nDistronic PLUS\nAsistent mrtvog ugla\nPre Safe kocnice PLUS\nNavigacija 3D\nAktivni parking asistent\nKamera za voznju unazad\nAmbijentalno osvjetljenje PREMIUM\nBezicno punjenje telefona u srednjoj konzoli',6,1,'https://s9.pik.ba/galerija/2021-07/24/07/slika-200533-60fc4886e9b29-velika.jpg','https://s9.pik.ba/galerija/2021-07/24/07/slika-200533-60fc48a2e736d-velika.jpg','https://s9.pik.ba/galerija/2021-07/24/07/slika-200533-60fc484a30979-velika.jpg','https://s9.pik.ba/galerija/2021-07/24/07/slika-200533-60fc488c8f942-velika.jpg'),(8,'Porsche Panamera 4 ',4,8,16000,2,207000,0,2017,3,243,330,'21\" zoll felge, full oprema, najbolje doci i pogledati',6,1,'https://s9.pik.ba/galerija/2021-07/11/08/slika-53017-60ea95dc62142-velika.jpg','https://s9.pik.ba/galerija/2021-07/11/08/slika-53017-60ea95b7a2de3-velika.jpg','https://s9.pik.ba/galerija/2021-07/11/08/slika-53017-60ea961b95862-velika.jpg','https://s9.pik.ba/galerija/2021-07/11/08/slika-53017-60ea9626a9757-velika.jpg'),(9,'BMW M4 cabrio',3,10,59000,5,130000,0,2015,2,317,425,NULL,5,1,'https://s9.pik.ba/galerija/2021-02/19/05/slika-381791-602fedca38ee2-velika.jpg','https://s9.pik.ba/galerija/2021-02/19/05/slika-381791-602fedf89700e-velika.jpg','https://s9.pik.ba/galerija/2021-02/19/06/slika-381791-602fee901cefc-velika.jpg','https://s9.pik.ba/galerija/2021-02/19/05/slika-381791-602fee2c562c8-velika.jpg'),(10,'Mercedes S-Class 400 D AMG LONG',5,12,25000,1,157000,0,2019,1,250,340,'Mercedes S400 4MATIC AMG LONG sedmi mjesec 2019 proizveden, uvezen iz Njemačke ( Achen).\nVozilo je u besprejkornom stanju bez ikakvih fizičkih oštećenja i ogrebotina, redovno održavano, prešao 25000 km. Posjeduje ful opremu webasto , koža, led svijetla, grijanje i hlađenje u sjedištima, kamera 360 itd......',1,1,'https://s9.pik.ba/galerija/2020-12/08/11/slika-304694-5fcf58ab67de0-velika.jpg','https://s9.pik.ba/galerija/2020-12/08/11/slika-304694-5fcf58b247b3e-velika.jpg','https://s9.pik.ba/galerija/2020-12/08/11/slika-304694-5fcf58b126c8a-velika.jpg','https://s9.pik.ba/galerija/2020-12/08/11/slika-304694-5fcf58ac8216d-velika.jpg');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-30  0:54:33
