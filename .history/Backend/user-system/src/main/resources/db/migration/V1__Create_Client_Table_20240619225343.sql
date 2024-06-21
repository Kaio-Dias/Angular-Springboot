CREATE TABLE client (
    id SERIAL PRIMARY KEY, 
    username TEXT NOT NULL,
    cpf SERIAL TEXT NOT NULL,
    registered_date DATE NOT NULL, 
);