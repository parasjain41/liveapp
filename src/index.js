import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();


// app.use(express.static('../dist'))
// app.use(express.static(path.join(__dirname, 'dist')));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../dist')));



// app.get("/", (req, res) => {
//   res.send("Welcome To Ak tech");
// });

const port = 4000;
app.listen(port, () => {
  console.log(`server is start at port ${port}`);
});
