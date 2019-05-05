DROP DATABASE IF EXISTS pokemon_db;
CREATE DATABASE pokemon_db;
USE pokemon_db;

-- CREATE TABLE
CREATE TABLE pvpfastmoves (
    id INT NOT NULL AUTO_INCREMENT,
    fast_moves VARCHAR(30) NOT NULL,
    base_power INT(2) NOT NULL,
    duration INT(2) NOT NULL,
    energy_gained INT(2) NOT NULL,
    cooldown DECIMAL(3) NOT NULL,
    damage_per_duration DECIMAL(3) NOT NULL,
    energy_per_duration DECIMAL(3) NOT NULL,
    PRIMARY KEY (id)
);