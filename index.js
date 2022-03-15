const express = require("express");
const User = require("./models").user;
const List = require("./models").todoList;
const app = express();
const PORT = 4000;

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const oneUser = await User.findByPk(userId);
    res.send(oneUser);
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/user/list", async (req, res) => {
  try {
    const specificUser = await List.findAll({ include: User });
    console.log(specificUser);
    res.send(specificUser);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
