-- Criação do banco de dados e tabela para scores
CREATE DATABASE IF NOT EXISTS supermario;
USE supermario;

CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
