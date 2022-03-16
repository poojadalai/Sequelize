const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;
// npx nodemon index.js
app.use(express.json()); //parse the body

// http :4000/
app.get("/", (req, res, next) => {
  try {
    res.send("Welcome to my API");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get users
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(404).send("No users found!");
    } else {
      res.send(users);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get user by id
app.get("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).send("No user found!");
    } else {
      res.send(user);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//create user
app.post("/users", async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const checkEmail = await User.findOne({ where: { email: email } });

    if (checkEmail) {
      res.status(401).send("Email already exists");
    }

    const createUser = await User.create({ name, email, phone, password });

    res.send(createUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update user
// http PUT :4000/users/1 email=a@k.com
app.put("/users/:id", async (req, res, next) => {
  try {
    //get the id
    const { id } = req.params;
    //get the column to update
    const { name } = req.body;

    //get the id from user table
    const user = await User.findByPk(id);

    // update the column
    const updateUser = await user.update({ name });

    res.send(updateUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//user delete
app.delete("/users/:id", async (req, res, next) => {
  try {
    //get id from request
    const { id } = req.params;

    //get id from user table
    const user = await User.findByPk(id);

    //delete user from table
    const deleteUser = await user.destroy(id);

    res.send(deleteUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
