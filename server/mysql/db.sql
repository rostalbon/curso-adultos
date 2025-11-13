-- Creación de la tabla users con las columnas name, email y passwd en MySQL.
CREATE TABLE users (
  user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  passwd VARCHAR(50) NOT NULL,
  progress int NOT NULL DEFAULT 0,
  UNIQUE(user_id), 
  UNIQUE(email)
);

-- Borrar la tabla de usuarios
DROP TABLE users;


-- Inserción de prueba
/*
INSERT INTO users
(name, email, passwd)
VALUES ('New user', 'newuser@gmail.com', 'pass1234');
*/