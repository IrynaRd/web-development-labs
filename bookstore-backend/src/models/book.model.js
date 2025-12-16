const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db.js");


const Book = db.define("book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'books' 
});

Book.sync({ force: false }).then(() => { 
    console.log("'books' synchronized");
});

module.exports = Book;