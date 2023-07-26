const showAllButton = document.querySelector(".show-all");
const list = document.querySelector(".list");

function showAll(products) {
    let newLi = '';

    products.forEach((element) => {

        newLi = newLi + `
            <li>
                <img src="${element.src}" />
                <p>${element.name}</p>
                <p class="price">${element.price}</p>
            </li>
        `
    });

    list.innerHTML = newLi;
};



showAllButton.addEventListener('click', () => showAll(menuOptions));