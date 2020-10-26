const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
const userRoutes = require('./Routes/user-route');
const spaceRoutes = require('./Routes/space-route');
const app = express()
const port =84;

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to api application." });
  });
app.use("/api/", userRoutes);
app.use("/api/", spaceRoutes);

app.listen(port, () => {
    console.log("Server connected");
} )