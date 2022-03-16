const express = require("express");
const app = express();
const PORT = 4000;
const userRouter = require("./routers/users");

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

app.use(userRouter);


app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
