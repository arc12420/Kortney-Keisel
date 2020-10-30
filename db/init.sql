-----------------------------------------Tables------------------------------
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email VARCHAR(30),
    password VARCHAR(80),
    profilePic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    post TEXT,
    author INTEGER REFERENCES users(id)
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    description TEXT
);

--------------------------------------------------Dummy Data------------------------





SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM books;














