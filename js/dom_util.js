const titleInput = document.getElementById("title_input");
const authorInput = document.getElementById("author_input");
const priceInput = document.getElementById("price_input");
const pagesInput = document.getElementById("pages_input");
const descriptionInput = document.getElementById("description_input");


export const clearInputs = () => {
  titleInput.value = "";
  authorInput.value = "";
  priceInput.value = "";
  pagesInput.value = "";
  descriptionInput.value = "";
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    author: authorInput.value,
    price: priceInput.value,
    pages: pagesInput.value,
    description: descriptionInput.value,
  };
};

