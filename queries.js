const User = require("./models").user;
const Item = require("./models").todoItem;
// add this at the the top of your file - you'll need it for a query later on
const { Op } = require("sequelize");
// Searches for all users and logs them.

const allusers = async () => {
  try {
    const users = await User.findAll({ raw: true });
    // console.log(users.map((e) => e.toJSON()));
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};
// Searches for all users and logs them.
// allusers();

const todoItems = async () => {
  try {
    const items = await Item.findAll();
    console.log(items.map((item) => item.toJSON()));
  } catch (e) {
    console.log(e.message);
  }
};

// todoItems();
const userById = async () => {
  try {
    const userId = await User.findByPk(2);
    console.log(userId.toJSON());
  } catch (e) {
    console.log(e.message);
  }
};

// userById();

//   search item with task "clean"
const itemName = async () => {
  try {
    const result = await Item.findAndCountAll({
      where: {
        task: {
          [Op.like]: "C%", // LIKE '%hat'
        },
      },
      offset: 10,
      limit: 2,
    });

    console.log(result.count);
    console.log(result.rows);
    console.log(result);
    // console.log(result.toJSON())
  } catch (e) {
    console.error(e);
  }
};

// itemName();

//   create a new user
const createNewUser = async (name, email, phone, password) => {
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

createNewUser("Pooja", "poojadalai@gmail.com", "25285754", "123456");
