CREATE SCHEMA pokemon;

USE pokemon;

CREATE TABLE pokemonlist (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    height DECIMAL(5, 2) NOT NULL,
    weight DECIMAL(5, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    captured INT DEFAULT 0
);

INSERT INTO pokemonlist (name, type, height, weight, image)
VALUES
('Pikachu', 'Electric', 0.4, 6.0, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'),
('Charmander', 'Fire', 0.6, 8.5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'),
('Squirtle', 'Water', 0.5, 9.0, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'),
('Bulbasaur', 'Grass', 0.7, 6.9, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
('Psyduck', 'Water', 0.8, 19.6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png'),
('Snorlax', 'Normal', 2.1, 460.0, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'),
('Mewtwo', 'Psychic', 2.0, 122.0, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png'),
('Mew', 'Psychic', 0.4, 4.0, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png');