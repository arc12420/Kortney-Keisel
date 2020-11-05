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
    descriptionp1 TEXT,
    descriptionp2 TEXT,
    urllink text
);

CREATE TABLE freebook (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    releasedate TEXT,
    description TEXT
);

CREATE TABLE about (
    id SERIAL PRIMARY KEY,
    img1 TEXT,
    img2 TEXT,
    paragraph1 TEXT,
    paragraph2 TEXT,
    paragraph3 TEXT
);

--------------------------------------------------Dummy Data------------------------

SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM books;


-- users (
--     id 4,
--     firstName "Austin",
--     lastName "Carly",
--     email "austinrcarly@gmail.com",
--     password HASHED,
--     profilePic "https://miro.medium.com/max/735/1*olSwFCD6PAB6uegF6I1jUQ.jpeg"
-- );

-- users (
--     id 5,
--     firstName "Kortney",
--     lastName "Keisel",
--     email "authorkortneykeisel@gmail.com",
--     password HASHED,
--     profilePic "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/121192205_10164156343630363_7299696197962941765_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8024bb&_nc_ohc=SO8VKNjiUVMAX_9Gtpx&_nc_ht=scontent-sjc3-1.xx&oh=8805204778b43d14e9a3447aa053cec4&oe=5FC8F5A5"
-- );


--  posts (
--     id 1,
--     title "New Site!",
--     img "",
--     post "Here is my post!",
--     author 4
-- );

-- CREATE TABLE posts (
--     id 2,
--     title "New Site!",
--     img "",
--     post "Here is my post!",
--     author 4
-- );













