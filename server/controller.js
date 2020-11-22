const bcrypt = require("bcryptjs");

module.exports = {
  // ------------------------------------------------------USER-------------------------------------------------------
  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const user = await db.User.getUser(email);
    if (!user[0]) {
      return res.status(401).send("Incorrect credentials");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          userId: user[0].id,
          firstName: user[0].firstname,
          lastName: user[0].lastname,
          email: user[0].email,
          profilePic: user[0].profilepic,
        };
        console.log(user[0]);
        console.log(req.session.user);
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Email or password incorrect");
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  user: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(200);
    }
  },
  
  // ------------------------------------------------------CONTACT/NODEMAILER-------------------------------------------------------
  contact: async (req, res) => {
    const transporter = req.app.get("transporter");
    const { email, name, emailBody } = req.body;
    if(email === ""){
    return res.status(409).send();
  }
    if(name === ""){
    return res.status(409).send();
  }
    if(emailBody === ""){
    return res.status(409).send();
  }
    const mailOptions = {
      from: "authorkortneykeisel@gmail.com",
      to: "authorkortneykeisel@gmail.com",
      subject: `Hi Kortney, here is an email from ${name}!`,
      html: `<p>Hi Kortney, here is an email from ${name}!<br/> 
      <br/>
      Name: ${name} <br/>
      Email address: ${email}<br/>
      <br/>  
      ${emailBody}</p>`
    
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully!");
        alert("Email sent successfully!");
      }
    })
    
    res.status(200).send();
  },
  // ------------------------------------------------------POSTS-------------------------------------------------------
  getAllPosts: (req, res) => {
    const db = req.app.get("db");

    db.Posts.getAllPosts()
      .then((posts) => res.status(200).send(posts))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },


  addPost: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("body", req.body);
    // console.log("session", req.params);
    const { title, img, post } = req.body;
    const { userId } = req.session.user;

    dbInstance
      .Posts.addPost([title, img, post, userId])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  updatePost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params, body } = req;

    dbInstance
      .Posts.updatePost([params.id, body.title, body.img, body.post])
      console.log(params.id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  deletePost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .Posts.deletePost(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },


// ------------------------------------------------------BOOKS-------------------------------------------------------
getAllBooks: (req, res) => {
  const db = req.app.get("db");

  db.Books.getAllBooks()
    .then((posts) => res.status(200).send(posts))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},


addBook: (req, res) => {
  const dbInstance = req.app.get("db");
  console.log("body", req.body);
  const { title, img, descriptionp1, descriptionp2, urllink } = req.body;

  dbInstance
    .Books.addBook([title, img, descriptionp1, descriptionp2, urllink ])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},

updateBook: (req, res) => {
  const dbInstance = req.app.get("db");
  const { params, body } = req;

  dbInstance
    .Books.updateBook([params.id, body.title, body.img, body.descriptionp1, body.descriptionp2, body.urllink ])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},

deleteBook: (req, res) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .Books.deleteBook(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},



// ------------------------------------------------------NEWBOOK-------------------------------------------------------
getNewBook: (req, res) => {
  const db = req.app.get("db");

  db.NewBook.getNewBook()
    .then((posts) => res.status(200).send(posts))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},
updateNewBook: (req, res) => {
  const db = req.app.get("db");
  const { params, body } = req;

  dbInstance
    db.NewBook.updateNewBook([params.id, body.title, body.img, body.releasedate, body.description])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},

// ------------------------------------------------------ABOUT-------------------------------------------------------

getAbout: (req, res) => {
  const db = req.app.get("db");

  db.About.getAbout()
    .then((posts) => res.status(200).send(posts))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},
updateAbout: (req, res) => {
  const dbInstance = req.app.get("db");
  const { params, body } = req;

  dbInstance
    .About.updateAbout([params.id, body.img1, body.img2, body.paragraph1, body.paragraph2, body.paragraph3  ])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
},














  // --------------------------------------------------------------------Not needed------------------------
  getAllUsers: (req, res) => {
    const db = req.app.get("db");

    db.getAllUsers()
      .then((users) => res.status(200).send(users))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },
  register: async (req, res) => {
    const db = req.app.get("db");
    const transporter = req.app.get("transporter");
    const { firstName, lastName, email, password, profilePic } = req.body;
    const existingUser = await db.getUser(email);
    if (existingUser[0]) {
      return res.status(409).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.register([
      firstName,
      lastName,
      email,
      hash,
      profilePic,
    ]);

    console.log(newUser);
    req.session.user = {
      userId: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    };
    res.status(200).send(req.session.user);
  },


};
