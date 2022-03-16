const User = require("../models").user;
const { Router } = require("express");

const router = new Router();

//get users
router.get("/users", async (req, res, next) => {
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
router.get("/users/:id", async (req, res, next) => {
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
router.post("/users", async (req, res, next) => {
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
router.put("/users/:id", async (req, res, next) => {
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
router.delete("/users/:id", async (req, res, next) => {
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

module.exports = router;
