import express from "express";
const app = express();


app.use(express.static('../dist'))

// app.get("/", (req, res) => {
//   res.send("Welcome To Ak tech");
// });

const port = 4000;
app.listen(port, () => {
  console.log(`server is start at port ${port}`);
});
