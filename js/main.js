import { getInputValues, clearInputs } from "./dom_util.js";
import {getAllBooks, postBook, updateBook, deleteBook} from "./api.js";

const searchButton = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const reset_searchButton = document.getElementById("reset__search");
const sortButton = document.getElementById("sort");
const countButton = document.getElementById("count");
const bookList = document.getElementById("bookList");
const totalExpences = document.getElementById("total_expences");


const formSection = document.getElementById("formSection");
const submitButton = document.getElementById("submit_button");
const booksPageButton = document.getElementById("books_page");
const createPageButton = document.getElementById("create");
const manageSection = document.getElementById("manageBooks");
const EDIT_BUTTON_PREFIX = 'edit-button-';

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal_message");
const closeModal = document.getElementById("close_modal");

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "block";
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

let currentBooks = [];
let bookIdToEdit = null;

const itemTemplate = ({ id, title, author, price, pages, description }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
    <img
        src="images/Open_book_nae_02.svg"
        class="item-container__image card-img-top" alt="card">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-author"><strong>Author:</strong> ${author}</p>
        <p class="card-price"><strong>Price:</strong> $${price}</p>
        <p class="card-pages"><strong>Pages:</strong> ${pages}</p>
        <p class="card-description"><strong>Description: </strong>${description}</p>

        <div class="d-flex justify-content-between mt-3">
            <button id="${EDIT_BUTTON_PREFIX}${id}" class="btn btn-warning btn-sm edit-btn">Edit</button>
            <button class="btn btn-danger btn-sm remove-btn">Remove</button>
        </div>
    </div>
</li>`;



const addItemToPage = ({ id, title, author, price, pages, description }) => {
    bookList.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, author, price, pages, description })
    );

    const bookElement = bookList.firstElementChild;
    const removeBtn = bookElement.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
        bookElement.remove();
        currentBooks = currentBooks.filter(b => b.id !== id);
    });
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEditItem);


};



function renderBooks(array) {
    currentBooks = array;

    bookList.innerHTML = "";
    array.forEach(book => {
        bookList.insertAdjacentHTML("beforeend", itemTemplate(book));
        const bookElement = bookList.lastElementChild;
        const removeBtn = bookElement.querySelector(".remove-btn");

        removeBtn.addEventListener("click", async () => {
            try {
                await deleteBook(book.id); 
                await refetchAllBooks(); 
                
                showModal("deleted");
            } catch (error) {
                showModal("delete error");
            }
        });

        const editButton = bookElement.querySelector(".edit-btn");
        editButton.addEventListener("click", onEditItem);
    });
}


function onEditItem(event) {
    const editButton = event.target;
    const bookElement = editButton.closest("li");
    const book_id = bookElement.id;
    const book = currentBooks.find(b => String(b.id) === String(book_id));
    bookIdToEdit = book.id;

    bookList.style.display = "none";
    manageSection.style.display = "none";
    formSection.style.display = "block";

    document.getElementById("title_input").value = book.title;
    document.getElementById("author_input").value = book.author;
    document.getElementById("price_input").value = book.price;
    document.getElementById("pages_input").value = book.pages;
    document.getElementById("description_input").value = book.description;
    document.getElementById("formTitle").textContent = "Edit Book";
    submitButton.textContent = "Edit";
}

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    const foundBooks = currentBooks.filter((book) =>
        book.title.toLowerCase().includes(query)
    );

    renderBooks(foundBooks);
});

reset_searchButton.addEventListener("click", () => {
    refetchAllBooks();
    searchInput.value = "";
});

sortButton.addEventListener("change", () => {
    const choice = sortButton.value;

    if (choice === "price") {
        currentBooks.sort((a, b) => a.price - b.price);
    } else if (choice === "pages") {
        currentBooks.sort((a, b) => a.pages - b.pages);
    }

    renderBooks(currentBooks);
});

countButton.addEventListener("click", () => {
    const total_price = currentBooks.reduce((sum, book) =>
        sum + parseFloat(book.price), 0);
    
    const formatted_price = total_price.toFixed(2);
    
    totalExpences.textContent = formatted_price;

});

createPageButton.addEventListener("click", () => {
    bookList.style.display = "none";
    manageSection.style.display = "none";
    formSection.style.display = "block";
})

booksPageButton.addEventListener("click", () => {
    bookList.style.display = "flex";
    manageSection.style.display = "block";
    formSection.style.display = "none";
})


const refetchAllBooks = async() => {
    const allBooks = await getAllBooks();

    currentBooks = allBooks;

    renderBooks(currentBooks);
}

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const inputValues = getInputValues(); 
    const { title, author, price, pages, description } = inputValues;


    if (!title.trim() || !author.trim() || !price.trim() || !pages.trim() || !description.trim()) {
        showModal("Enter data in all inputs!");
        return;
    }

    const bookData = {
        description, 
        title, 
        author, 
        price: Number(price), 
        pages: Number(pages)
    };

    try {
        if (bookIdToEdit) {
            await updateBook(bookIdToEdit, bookData);
            bookIdToEdit = null;
            document.getElementById("formTitle").textContent = "Create New Book";
            submitButton.textContent = "Submit";

        } else {
            await postBook(bookData); 
        }

        await refetchAllBooks(); 
        
        clearInputs();
        
        bookList.style.display = "flex";
        manageSection.style.display = "block";
        formSection.style.display = "none";
        
    } catch (error) {
        const errorMessage = bookIdToEdit ? "Error" : "Error";
        showModal(errorMessage);
        console.error(error);
    }


});

refetchAllBooks();