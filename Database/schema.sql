DROP DATABASE IF EXISTS furHealth;

CREATE DATABASE furHealth;

USE DATABASE furHealth;

CREATE TABLE petProfiles (
  id INT AUTO_INCREMENT,
  petName VARCHAR(50) NOT NULL,
  ownerName VARCHAR(50) NOT NULL,
  birthday DATE,
  age INT NOT NULL,
  petWeight DECIMAL(2,2),
  family VARCHAR(100),
  petType ENUM('cat', 'dog', 'rabbit'),
  breed VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE petWeightTracking (
  id INT AUTO_INCREMENT,
  petID INT,
  weighDate DATE DEFAULT CURRENT_DATE,
  petWeight DECIMAL(2,2),
  PRIMARY KEY (id),
  FOREIGN KEY (petID) REFERENCES petProfiles(id)
);

CREATE TABLE dietAndMedications (
  id INT AUTO_INCREMENT,
  petID INT,
  diet VARCHAR(100),
  medication VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (petID) REFERENCES petProfiles(id)
);

CREATE TABLE vetVisits (
  id INT AUTO_INCREMENT,
  petID INT,
  visitDate DATE NOT NULL DEFAULT CURRENT_DATE,
  visitNotes VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (petID) REFERENCES petProfiles(id)
);

CREATE TABLE exercise (
  id INT AUTO_INCREMENT,
  petID INT,
  exerciseDateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  exerciseLength INT NOT NULL,
  exerciseType VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (petID) REFERENCES petProfiles(id)
)
