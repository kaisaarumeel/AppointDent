-- Schema definitions for the dentists service database

CREATE TABLE IF NOT EXISTS dentists (
    email VARCHAR(64) PRIMARY KEY NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    fName VARCHAR(64) NOT NULL,
    lName VARCHAR(64) NOT NULL,
    birthDate DATE NOT NULL,
    -- TODO: add address (composite type)
    -- location ...
    picture VARCHAR NOT NULL -- a base64 encoded image (taken as a string)
);
