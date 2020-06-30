-- CREATE DATABASE SCRIPT ------------------------------------------------

-- INSTRUCTIONS
-- Open this SQL file in MySQL Workbench
-- Select Ctrl+A to select all
-- Click the lightning icon to run the selection
-- Right click in the directory tab and select refresh to view changes
-- The new database with relevant tables and data should be visible
-- If there are any issues, please contact me 
-- Callum McFadgen


-- CLEAR EXISTING DATABASE --
 DROP DATABASE IF EXISTS got_apples_db; 
 
 -- CREATE NEW DATABASE --
CREATE DATABASE got_apples_db;

-- USE NEW DATABASE --
USE got_apples_db;

-- CREATE TABLES --
DROP PROCEDURE IF EXISTS CreateTables;
DELIMITER //
CREATE PROCEDURE CreateTables()
BEGIN 

    CREATE TABLE `user`
    (
		user_name CHAR(50) NOT NULL,
		first_name CHAR(50) NOT NULL, 
		last_name CHAR(50) NOT NULL,
		`password` CHAR(50) NOT NULL,
		email_address CHAR(50) NOT NULL,
		phone_number CHAR(50) NOT NULL,
		address_line_1 CHAR(50) NOT NULL,
		address_line_2 CHAR(50),
		region CHAR(50),
		city CHAR(50) NOT NULL,
		zip_code CHAR(50) NOT NULL,
		got_apples_member BOOL DEFAULT FALSE,
		image CHAR (50),
		bio MEDIUMTEXT,
        PRIMARY KEY (user_name)
    );
    
        CREATE TABLE variety
    (
		variety_name CHAR(50) NOT NULL,
		colour CHAR(50), 
		taste CHAR(50),
		texture CHAR(50),
		eating BOOL,
        cooking BOOL,
		`description` MEDIUMTEXT,
		season CHAR(50),
        image CHAR (50),
        PRIMARY KEY (variety_name)
    );
    
    CREATE TABLE orchard
    (
		orchard_name CHAR(50) NOT NULL,
		address_line_1 CHAR(50),
		address_line_2 CHAR(50),
		region CHAR(50),
		city CHAR(50),
		zip_code CHAR(50),
        `description` MEDIUMTEXT,
        gst_number CHAR(50),
		user_name CHAR(50) NOT NULL,
        variety_name CHAR(50) NOT NULL,
        PRIMARY KEY (orchard_name),
		FOREIGN KEY (user_name) REFERENCES `user`(user_name) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (variety_name) REFERENCES variety(variety_name) ON DELETE CASCADE ON UPDATE CASCADE
    );
    
	CREATE TABLE auction
    (
		auction_number INT(10) NOT NULL AUTO_INCREMENT,
		title CHAR(50),
		weight DEC(13,2),
		start_date DATETIME,
		end_date DATETIME,
        `description` MEDIUMTEXT,
		reserve_amount DEC(13,2),
		buy_now BOOL DEFAULT FALSE,
		buy_now_amount DEC(13,2),
		delivery BOOL DEFAULT FALSE,
		delivery_amount DEC(13,2),
        sold BOOL DEFAULT FALSE,
        user_name CHAR(50) NOT NULL,
        variety_name CHAR(50) NOT NULL,
        PRIMARY KEY (auction_number),
		FOREIGN KEY (user_name) REFERENCES `user`(user_name) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (variety_name) REFERENCES variety(variety_name) ON DELETE CASCADE ON UPDATE CASCADE
    );
    
	CREATE TABLE bid
    (
		bid_number INT(10) NOT NULL AUTO_INCREMENT,
		amount DEC(13,2),
		`date` DATETIME,
		`leading` BOOL DEFAULT FALSE,
        user_name CHAR(50) NOT NULL,
        auction_number INT(10) NOT NULL,
        PRIMARY KEY (bid_number),
		FOREIGN KEY (user_name) REFERENCES `user`(user_name) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (auction_number) REFERENCES auction(auction_number) ON DELETE CASCADE ON UPDATE CASCADE
    );
    
    	CREATE TABLE watchlist
    (
		watch_number INT(10) NOT NULL AUTO_INCREMENT,
		`date` DATETIME,
        user_name CHAR(50) NOT NULL,
        auction_number INT(10) NOT NULL,
        PRIMARY KEY (watch_number),
		FOREIGN KEY (user_name) REFERENCES `user`(user_name) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (auction_number) REFERENCES auction(auction_number) ON DELETE CASCADE ON UPDATE CASCADE
    );
	

    END//
DELIMITER ;
CALL CreateTables();

-- POPULATE USER TABLE --
DROP PROCEDURE IF EXISTS PopulateUserTable;
DELIMITER //
CREATE PROCEDURE PopulateUserTable()
BEGIN 

	INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member,
	image,
    bio)
	VALUES (
    'Col',
    'Colin',
    'McDonald',
    'P@ssword1',
    'colin_mcdonald@gmail.com',
    '88379350806',
    '47 Kea Street',
    'Stoke',
    'Tasman',
    'Nelson',
    '7011',
	true,
	'user_colin_mcdonald.png',
	'Hi, I’m Colin, I’m one of the newest members of Got Appels.  I am a third-generation orchardist from Stoke and I own the Windsong Orchard in Renwick, where we specialize in producing some of the finest Blenheim Orange apples in the top of the South Island.  I really enjoy using more modern techniques and technology in fruit production, as I feel that this helps to delivery the very best produce to consumers.'
	);
	
	INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member)
	VALUES (
    'Hally',
    'Halen',
    'Oxely',
    'P@ssword1',
    'halenoxely@zimbio.com',
    '027257284758',
    '83 Basil Crossing',
    'Mapua',
    'Tasman',
    'Nelson',
    '7001',
    false);
    
	INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member)
	VALUES (
    'Ted',
    'Teddie',
    'McQuarrie',
    'P@ssword1',
    'tmcquarrie9@posterous.com',
    '209329589598',
    '3 Anzinger Circle',
    'Eastlawn',
    'Tasman',
    'Richmond',
    '7041',
    false);
    
	INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member,
	image,
    bio)
	VALUES (
    'Mike',
    'Mychal',
    'Soame',
    'P@ssword1',
    'msoame1o@house.gov',
    '28373656398',
    '472 Loomis Way',
    'Rewaka',
    'Tasman',
    'Motueka',
    '6031',
    true,
    'user_mychal_soame.png',
    'I’m Mychal and according to my wife and children, I suffer from some rare form of apple madness.  This is hardly news to me as I have had a strong passion for growing produce for most of my life.  So when the opportunity came up to purchase an orchard of heritage Baujade apple trees in Rewaka, I had to go for it.  10 years later and I could not be happier with my decision.  My latest ideas involve working with some of the local brewers to experiment with my Baujade apples to produce a boutique cider, watch this space.');
    
	INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member,
	image,
    bio)
	VALUES (
    'Fitz',
    'Fitz',
    'Jouannin',
    'P@ssword1',
    'fjouannin1y@issuu.com',
    '294876052445',
    '75 Lakeland Plaza',
    'Ngatimoti',
    'Tasman',
    'Motueka',
    '6058',
    true,
    'user_fitz_jouannin.png',
    'My name is Fitz and I often get described by people who know me as a hardcase guy with a heart of gold!  I have been growing apples, especially heritage varieties, for my entire life and I definitely have no plans of stopping.  I currently run my family’s orchard, Mountainview Orchard, in Ngatomoti, where we have been growing the finest Worcester Pearmain apples ever since I was a little boy on trees planted by my grandfather in 1920.');
    
    INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member)
	VALUES (
    'Liza',
    'Aliza',
    'Grierson',
    'P@ssword1',
    'agriersonrm@sbwire.com',
    '2756475969776',
    '23 Westport Drive',
    'Brooklyn',
    'Tasman',
    'Motueka',
    '6028',
    false);
    
    INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member,
	image,
    bio)
	VALUES (
    'Walt',
    'Walt',
    'Laughren',
    'P@ssword1',
    'wlaughrenkx@discovery.com',
    '294876052445',
    '161 Dottie Pass',
    'Wakefield',
    'Tasman',
    'Nelson',
    '7008',
    true,
    'user_walt_laughren.png',
    'My name is Walt and I’m the proud owner of Bushlands Orchard in Wakefield.  I originally came from an orchardist family in Hawkes Bay so I was very surprised when I was driving past Bushlands one day and I saw the fruit on the trees and recognized them as Golden Delicious which are very rare in New Zealand despite their past popularity.  So, when I had the opportunity to purchase the orchard 5 years ago, it was a no brainer.  I love preserving this heritage variety and I get a real kick out of introducing people to this flavour of the past.');
    
    INSERT INTO user (
    user_name,
    first_name,
    last_name,
    `password`,
    email_address,
    phone_number,
    address_line_1,
    address_line_2,
    region,
    city,
    zip_code,
    got_apples_member)
	VALUES (
    'Kelly',
    'Kellen',
    'Carlson',
    'P@ssword1',
    'kcarlsonoo@marriott.com',
    '86978736465',
    '1 Eagle Crest Alley',
    'The Brook',
    'Tasman',
    'Nelson',
    '7010',
    false);
    
END//
DELIMITER ;
CALL PopulateUserTable();

-- POPULATE VARIETY TABLE --
DROP PROCEDURE IF EXISTS PopulateVarietyTable;
DELIMITER //
CREATE PROCEDURE PopulateVarietyTable()
BEGIN 

	INSERT INTO variety (
	variety_name,
	colour, 
	taste,
	texture,
	eating,
	cooking,
	season,
	`description`, 
    image)
	VALUES(
	'Blenheim Orange',
    'Orange',
    'Sweet',
    'Crisp',
    true,
    true,
    'Mid',
    'Blenheim Orange is a heritage apple with an orange/yellow, slightly russeted skin striped with dull red. The fruit is large with a round, flat, regular shape. It has a rich yellow flesh that is crisp, sweet, juicy and aromatic. Cooks well. Makes a large, spreading flat headed tree. Tip bearing mid season. Triploid variety.',
    'variety_blenheim_orange.png'
    );
    
	INSERT INTO variety (
	variety_name,
	colour, 
	taste,
	texture,
	eating,
	cooking,
	season,
	`description`,
    image)
	VALUES(
	'Golden Delicious',
    'Yellow',
    'Sweet',
    'Crisp',
    true,
    false,
    'Late',
    'Golden Delicious produces very sweet honey flavoured fruit, especially when tree ripened. This self fertile variety crops regularly and heavily late in the season. Apples ripen yellow. It produces on both tips and spurs.',
	'variety_golden_delicious.png'
    );
    
	INSERT INTO variety (
	variety_name,
	colour, 
	taste,
	texture,
	eating,
	cooking,
	season,
	`description`,
    image)
	VALUES(
	'Bramleys Seedling',
    'Green',
    'Tart',
    'Startchy',
    false,
    true,
    'Mid',
    'Bramleys Seedling is a heritage apple of medium to large size. The fruit is round and has a distinctive conical shape. It has a firm, tart flesh with a good flavour and is sweet with plenty of juice. Keeps very well.',
	'variety_bramleys_seedling.png'
    );

	INSERT INTO variety (
	variety_name,
	colour, 
	taste,
	texture,
	eating,
	cooking,
	season,
	`description`,
    image)
	VALUES(
	'Worcester Pearmain',
    'Red',
    'Sweet',
    'Crisp',
    true,
    false,
    'Early',
    'Worcester Pearmain produces a bright red medium-sized fruit with crisp and juicy flesh and an intense strawberry flavour. This very sweet apple is popular with children. The tree is a heavy and regular early season bearer.',
    'variety_worcester_pearmain.png'
    );
    
	INSERT INTO variety (
	variety_name,
	colour, 
	taste,
	texture,
	eating,
	cooking,
	season,
	`description`,
    image)
	VALUES(
	'Baujade',
    'Green',
    'Tart',
    'Startchy',
    false,
    true,
    'Late',
    'A French bred Granny Smith-type without the thick skin of a Granny Smith apple. Ripening late season. Medium size, sweet and aromatic. Well suited to warmer areas. Disease resistant to perfect for organic growing.',
    'variety_baujade.png'
    );
    
	INSERT INTO variety (
	variety_name,
	colour, 
	taste,
	texture,
	eating,
	cooking,
	season,
	`description`,
    image)
	VALUES(
	'Tydemans Late Orange',
    'Orange',
    'Tart',
    'Startchy',
    false,
    true,
    'Late',
	'Tydemans Late Orange is a heritage variety. This apple has an intensely strong, rich and aromatic flavour reminiscent of Coxs Orange Pippin. The fruit has is of a medium size, has a purplish-red skin with yellow flesh and ripens late in the season. It has excellent storage qualities and the tree is vigorous and productive. Tendency to biennial bearing, so fruitlets should be thinned in December to try to avoid this.',
    'variety_tydemans_late_orange.png'
    );
    
END//
DELIMITER ;
CALL PopulateVarietyTable();

-- POPULATE ORCHARD TABLE --
DROP PROCEDURE IF EXISTS PopulateOrchardTable;
DELIMITER //
CREATE PROCEDURE PopulateOrchardTable()
BEGIN 

    -- ORCHARD
	INSERT INTO orchard (
	orchard_name,
	address_line_1,
	address_line_2,
	region,
	city,
	zip_code,
	`description`,
	gst_number,
	user_name,
    variety_name)
	VALUES(
	'Windsong Orchard',
    '29 Inkerman Street',
    'Renwick',
    'Marlborough',
    'Blenheim',
    '7204',
    'Well established orchard specializing in heritage apples.',
    '47859736489457',
    'Col',
    'Blenheim Orange');


	INSERT INTO orchard (
	orchard_name,
	address_line_1,
	address_line_2,
	region,
	city,
	zip_code,
	`description`,
	gst_number,
	user_name,
    variety_name)
	VALUES(
	'Mountainview Orchard',
    '75 Lakeland Plaza',
    'Ngatimoti',
    'Tasman',
    'Motueka',
    '6058',
    'Charming old orchard in the Motueka Valley.',
    '93857933248',
    'Fitz',
    'Worcester Pearmain');

	INSERT INTO orchard (
	orchard_name,
	address_line_1,
	address_line_2,
	region,
	city,
	zip_code,
	`description`,
	gst_number,
	user_name,
    variety_name)
	VALUES(
	'Bushlands Orchard',
    '161 Dottie Pass',
    'Wakefield',
    'Tasman',
    'Nelson',
    '7008',
    'Surrounded by native bush.',
    '8273645362',
    'Walt',
    'Golden Delicious');

	INSERT INTO orchard (
	orchard_name,
	address_line_1,
	address_line_2,
	region,
	city,
	zip_code,
	`description`,
	gst_number,
	user_name,
    variety_name)
	VALUES(
	'Soames Orchard',
    '472 Loomis Way',
    'Rewaka',
    'Tasman',
    'Motueka',
    '6031',
    'Nice little orchard in Rewaka.',
    '994837655233',
    'Mike',
    'Baujade');

END//
DELIMITER ;
CALL PopulateOrchardTable();

-- POPULATE AUCTION TABLE --
DROP PROCEDURE IF EXISTS PopulateAuctionTable;
DELIMITER //
CREATE PROCEDURE PopulateAuctionTable()
BEGIN 

	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Box of heritage apples',
    '5',
    '2020-05-03 16:00:00',
    '2020-05-10 16:00:00',
    'A lovely big box of handpicked Golden Delicious apples from our orchard in brightwater, perfect for a big active family and drop off can be arranged',
    8.00,
    true,
    8.00,
    true,
    2.50,
    false,
    'Golden Delicious',
    'Walt');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Perfect for on the go',
    '1',
    '2020-05-01 16:30:00',
    '2020-05-08 16:30:00',
    'Stop in and grab your bag of apples for the week from our orchard in Brightwater.',
    3.00,
    false,
    3.00,
    false,
    0.00,
    false,
    'Golden Delicious',
    'Walt');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Hand picked goodness',
    '3',
    '2020-05-07 17:00:00',
    '2020-05-014 17:00:00',
    'Our Golden Delicious apples are hand pick for the best tatse',
    5.50,
    true,
    5.50,
    false,
    0.00,
    false,
    'Golden Delicious',
    'Walt');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Excellent for cooking',
    '3',
    '2020-05-10 13:00:00',
    '2020-05-17 13:00:00',
    'These tart heritage cooking apples are excellent in a pie or crumble.',
    5.00,
    true,
    5.00,
    true,
    2.00,
    false,
    'Baujade',
    'Mike');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'A substantial bag',
    '5',
    '2020-05-05 15:00:00',
    '2020-05-12 15:00:00',
    'A large bag of tart heritage cooking apples for big families.',
    7.00,
    true,
    7.00,
    true,
    2.00,
    false,
    'Baujade',
    'Mike');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Create of cooking apples',
    '15',
    '2020-05-05 11:00:00',
    '2020-05-12 11:00:00',
    'A large box of tart heritage cooking apples for larger projects.',
    25.00,
    true,
    25.00,
    true,
    5.00,
    false,
    'Baujade',
    'Mike');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Amazing heritage apples',
    '5',
    '2020-05-10 18:00:00',
    '2020-05-17 18:00:00',
    'These heritage apples are incredicly tasty and full of goodness.',
    10.00,
    true,
    10.00,
    true,
	2.00,
    false,
    'Blenheim Orange',
    'Col');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'A family bag',
    '5',
    '2020-05-17 18:00:00',
    '2020-05-14 18:00:00',
    'These heritage apples are incredicly tasty and full of goodness.',
    10.00,
    true,
    10.00,
    true,
	2.00,
    false,
    'Blenheim Orange',
    'Col');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Get your weeks lunches sorted',
    '3',
    '2020-05-04 12:30:00',
    '2020-05-11 12:30:00',
    'These stunning heritage apples are juicy and delicious.',
    4.00,
    true,
    4.50,
    false,
	0.00,
    false,
    'Blenheim Orange',
    'Col');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Get your heritage apples',
    '3',
    '2020-05-04 12:30:00',
    '2020-05-11 12:30:00',
    'These stunning heritage apples are juicy and delicious.',
    4.00,
    true,
    4.50,
    false,
	3.00,
    false,
    'Blenheim Orange',
    'Col');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'A bag of red apples',
    '5',
    '2020-05-18 18:30:00',
    '2020-05-25 18:30:00',
    'A large bag of crisp sweet apples with the flavour of strawberries ',
    10.00,
    true,
    12.00,
    true,
	3.00,
    false,
    'Worcester Pearmain',
    'Fitz');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'Beautiful red apples',
    '3',
    '2020-05-08 12:30:00',
    '2020-05-15 12:30:00',
    'These crisp sweet apples have the flavour of strawberries ',
    6.00,
    true,
    6.50,
    true,
	2.00,
    false,
    'Worcester Pearmain',
    'Fitz');
	
	INSERT INTO auction (
	title,
	weight,
	start_date,
	end_date,
	`description`,
	reserve_amount,
	buy_now,
	buy_now_amount,
	delivery,
	delivery_amount,
	sold,
    variety_name,
	user_name)
	VALUES(
	'A small bag of apples',
    '1',
    '2020-05-08 12:30:00',
    '2020-05-15 12:30:00',
    'These crisp sweet apples have the flavour of strawberries ',
    3.00,
    true,
    3.50,
    true,
	2.00,
    false,
    'Worcester Pearmain',
    'Fitz');

END//
DELIMITER ;
CALL PopulateAuctionTable();

-- POPULATE BID TABLE --
DROP PROCEDURE IF EXISTS PopulateBidTable;
DELIMITER //
CREATE PROCEDURE PopulateBidTable()
BEGIN 

	INSERT INTO bid (
	amount,
	`date`,
	`leading`,
	user_name,
	auction_number)
	VALUES (
	4,
	'2020-05-12 10:00:00',
	true,
	'Hally',
	4
	);
	
	INSERT INTO bid (
	amount,
	`date`,
	`leading`,
	user_name,
	auction_number)
	VALUES (
	12,
	'2020-05-21 18:30:00',
	true,
	'Ted',
	11
	);
	
	INSERT INTO bid (
	amount,
	`date`,
	`leading`,
	user_name,
	auction_number)
	VALUES (
	10,
	'2020-05-21 16:00:00',
	true,
	'Liza',
	8
	);
	
	INSERT INTO bid (
	amount,
	`date`,
	`leading`,
	user_name,
	auction_number)
	VALUES (
	7,
	'2020-05-20 12:00:00',
	false,
	'Kelly',
	8
	);
	
END//
DELIMITER ;
CALL PopulateBidTable();

-- POPULATE WATCHLIST TABLE START --
DROP PROCEDURE IF EXISTS PopulateWatchlistTable;
DELIMITER //
CREATE PROCEDURE PopulateWatchlistTable()
BEGIN 

	INSERT INTO watchlist(
	`date`,
	user_name,
	auction_number
	)
	VALUES (
	'2020-05-11 19:00:00',
	'Hally',
	4
	);
	
	INSERT INTO watchlist(
	`date`,
	user_name,
	auction_number
	)
	VALUES (
	'2020-05-19 07:00:00',
	'Kelly',
	8
	);

END//
DELIMITER ;
CALL PopulateWatchlistTable();


-- USER LOGIN PROCEDURE --
DROP PROCEDURE IF EXISTS UserLogin;
DELIMITER //
CREATE PROCEDURE UserLogin(pr_username varchar(50), pr_password varchar(50))
BEGIN
START TRANSACTION;
	
	SELECT COUNT(`password`)
    FROM `user`
    WHERE
		user_name = pr_username AND `password` = pr_password
    INTO @lc_credential_match;
    
    IF
		@lc_credential_match = 1 
		THEN
		SELECT 'success' AS MESSAGE;
	ELSEIF
		@lc_credential_match = 0
		THEN
		SELECT 'fail' AS MESSAGE;
	END IF;
		
COMMIT;
END//
DELIMITER ;

-- CALL UserLogin("username", "password");

									
-- USERNAME CHECK PROCEDURE --
DROP PROCEDURE IF EXISTS UsernameCheck;
DELIMITER //
CREATE PROCEDURE UsernameCheck(pr_username varchar(50))
BEGIN
START TRANSACTION;
	
	SELECT COUNT(*)
    FROM `user`
    WHERE
		user_name = pr_username
    INTO @lc_user_match;
    
    IF
		@lc_user_match = 1 
		THEN
		SELECT 'UNAVAILABLE' AS MESSAGE;
	ELSEIF
		@lc_user_match = 0
		THEN
		SELECT 'AVAILABLE' AS MESSAGE;
	END IF;
		
COMMIT;
END//
DELIMITER ;

-- CALL UsernameCheck("Col");

									     
