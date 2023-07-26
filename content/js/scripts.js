const showAllButton = document.querySelector(".show-all");
const mapButton = document.querySelector(".map-all");
const sumAllButton = document.querySelector(".sum-all");
const filterVeganButton = document.querySelector(".filter-vegan");
const list = document.querySelector(".list");

function format(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value);
}

function showAll(products) {
    let newLi = '';

    products.forEach((element) => {

        newLi = newLi + `
            <li>
                <img src="${element.src}" />
                <p>${element.name}</p>
                <p class="price">${format(element.price)}</p>
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

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    list.innerHTML = `
        <li>A soma de todos os itens do menu: <p class="price">${format(totalValue)}</p></li>
    `
};

function filterVegan() {
    const productsVegan = menuOptions.filter((element) => {
        return element.vegan;
    })

    showAll(productsVegan);
};

showAllButton.addEventListener('click', () => showAll(menuOptions));

mapButton.addEventListener('click', mapAll);

sumAllButton.addEventListener('click', sumAllItens);

filterVeganButton.addEventListener('click', filterVegan);