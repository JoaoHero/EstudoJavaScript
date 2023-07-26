const showAllButton = document.querySelector(".show-all");
const mapButton = document.querySelector(".map-all");
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

function mapAll() {

    const newPrice = menuOptions.map(element => ({
        ...element,
        price: element.price * 0.9
    }));

    showAll(newPrice);
};



showAllButton.addEventListener('click', () => showAll(menuOptions));

mapButton.addEventListener('click', mapAll);