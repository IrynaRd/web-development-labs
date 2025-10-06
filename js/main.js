import { data } from "./data.js";

const searchButton = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const reset_searchButton = document.getElementById("reset__search");
const sortButton = document.getElementById("sort");
const countButton = document.getElementById("count");
const bookList = document.getElementById("bookList");
const totalExpences = document.getElementById("total_expences");

let currentBooks = [...data];

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
        <p class="card-description">${description}</p>

        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-warning btn-sm edit-btn">Edit</button>
            <button class="btn btn-danger btn-sm remove-btn">Remove</button>
        </div>
    </div>
</li>`;

function renderBooks(array) {
    currentBooks = array;
    bookList.innerHTML = "";
    array.forEach(book => {
        bookList.insertAdjacentHTML("beforeend", itemTemplate(book));
        const bookElement = bookList.lastElementChild;
        const removeBtn = bookElement.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            bookElement.remove();
            currentBooks = currentBooks.filter(b => b.id !== book.id);
        });
    });
}

renderBooks(data);

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    const foundBooks = data.filter((book) =>
        book.title.toLowerCase().includes(query)
    );

    renderBooks(foundBooks);
});

reset_searchButton.addEventListener("click", () => {
    renderBooks(data);
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
        sum + book.price, 0);
    totalExpences.textContent = total_price;
    
});
