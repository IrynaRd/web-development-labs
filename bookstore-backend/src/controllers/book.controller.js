const Book = require('../models/book.model.js');

exports.create = (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.price) {
        return res.status(400).send({ message: "Title, Author, and Price cannot be empty!" });
    }

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        pages: req.body.pages,
        description: req.body.description,
    };

    Book.create(newBook)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || "create error" }));
};

// exports.findAll = (req, res) => {
//     Book.findAll()
//         .then(data => res.send(data))
//         .catch(err => res.status(500).send({ message: err.message || "findall error" }));
// };

exports.findAll = (req, res) => {
    const { sort } = req.query; // читаємо параметр sort з query
    let order = [];

    if (sort === "price") {
        order = [["price", "ASC"]];
    } else if (sort === "pages") {
        order = [["pages", "ASC"]];
    }

    Book.findAll({ order })
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "findAll error" }));
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Book.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: `book with id=${id} not found` });
            }
        })
        .catch(err => res.status(500).send({ message: "find error id=" + id }));
};

exports.update = (req, res) => {
    const id = req.params.id;

    Book.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num[0] === 1) { 
            res.send({ message: "updated" });
        } else {
            res.status(404).send({ message: `id=${id}not updated` });
        }
    })
    .catch(err => res.status(500).send({ message: "not updated id=" + id }));
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Book.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num === 1) { 
            res.send({ message: "deleted" });
        } else {
            res.status(404).send({ message: `not deleted id=${id}` });
        }
    })
    .catch(err => res.status(500).send({ message: "delete error id=" + id }));
};

