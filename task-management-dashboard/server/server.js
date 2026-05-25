const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Supabase Server Running");
});

app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});