// const User = require("./models").user;

const TodoItem = require("./models").todoItem;

// const allUser = async () => {
//   try {
//     const users = await User.findAll();
//     console.log(users.map((e) => e.toJSON()));
//     const specificUser = await User.findOne({ where: { name: "Leo Messi" } });
//     console.log(specificUser);
//   } catch (e) {
//     console.log(e.message);
//   }
// };
// allUser();

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    // return [todo1, todo2, todo3].map((item) => item.toJSON());
  } catch (e) {
    console.log(e.message);
  }
};

createSampleTodoItems();
