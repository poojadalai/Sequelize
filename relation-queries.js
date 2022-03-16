// const { use } = require("express/lib/application");
const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });
  console.log(lists);
  return lists.map((list) => list.toJSON());
}

// listsWithUsers().then((lists) => console.log(lists));

//Get one user by id with his lists.
const userById = async (id) => {
  try {
    const oneUser = await user.findByPk(id, {
      include: [
        {
          model: todoList,
        },
      ],
    });
    console.log(oneUser);
    return oneUser.get({ plain: true });
  } catch (e) {
    console.log(e.message);
  }
};

// userById(2).then((user) => console.log("user with list", user));

// Get important TodoItems with the name of the list they belong to.

const imporantTodos = async () => {
  try {
    const result = await todoItem.findAll({
      where: { important: true },
      include: { model: todoList, attributes: ["name"] },
    });
    // console.log(oneUser);
    return result.map((todo) => todo.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};
// imporantTodos().then((items) => console.log("important todoItems", items));

// Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.

const fullUserById = async (id) => {
  try {
    const result = await user.findByPk(id, {
      include: {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    });
    return result.get({ plain: true });
  } catch (e) {
    console.log(e.message);
  }
};

fullUserById(1).then((user) =>
  console.log("user with its task and list", user)
);
