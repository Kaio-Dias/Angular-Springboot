CREATE TABLE client (
    id BIGSERIAL PRIMARY KEY, 
    username TEXT NOT NULL,
    cpf PRIMARY KEY TEXT NOT NULL,
    registered_date DATE NOT NULL, 
);