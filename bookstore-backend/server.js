const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require("./src/models/book.model"); 

require("./src/routes/book.routes")(app); 

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Book Store application." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});