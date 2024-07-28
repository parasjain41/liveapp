import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

const port = 4000;
app.listen(port, () => {
  console.log(`server is start at port ${port}`);
});
