DROP DATABASE IF EXISTS furHealth;

CREATE DATABASE furHealth;

USE furHealth;

CREATE TABLE pet_profiles (
  id INT AUTO_INCREMENT,
  pet_name VARCHAR(50) NOT NULL,
  owner_name VARCHAR(50) NOT NULL,
  birthday VARCHAR(50),
  age VARCHAR(4) NOT NULL,
  pet_gender ENUM('male', 'female'),
  pet_weight VARCHAR(6),
  weight_goal VARCHAR(10),
  goal_weight VARCHAR(10),
  weight_status VARCHAR(30),
  family VARCHAR(100),
  petType ENUM('cat', 'dog', 'rabbit'),
  breed VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE pet_weight_tracking (
  id INT AUTO_INCREMENT,
  pet_id INT,
  weigh_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  pet_weight VARCHAR(10),
  PRIMARY KEY (id),
  FOREIGN KEY (pet_id) REFERENCES pet_profiles(id)
);

CREATE TABLE diet_and_medications (
  id INT AUTO_INCREMENT,
  pet_id INT,
  diet VARCHAR(100),
  medication VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (pet_id) REFERENCES pet_profiles(id)
);

CREATE TABLE vet_visits (
  id INT AUTO_INCREMENT,
  pet_id INT,
  visit_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  visit_notes VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (pet_id) REFERENCES pet_profiles(id)
);

CREATE TABLE exercise (
  id INT AUTO_INCREMENT,
  pet_id INT,
  exercise_date_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  exercise_length INT NOT NULL,
  exercise_type VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (pet_id) REFERENCES pet_profiles(id)
);
