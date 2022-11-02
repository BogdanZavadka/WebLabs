const searchInput = document.getElementById("search-input");
const sortButton = document.getElementById("sort-button");
const submitButton = document.getElementById('submit-button');
const countButton = document.getElementById('count-button');
const asideItems = document.getElementById('aside');
const backButton = document.getElementById('back-button');
const secondBackButton = document.getElementById('second-back-button');
const totalWeightDiv = document.getElementById('total-weight');

import { getCats, deleteCat } from './api.js';

let cats = [];
let renderedCats = [];

secondBackButton.addEventListener('click', (event) => {
    event.preventDefault();
    renderCats(cats);
    totalWeightDiv.innerHTML = '';
})
sortButton.addEventListener('click', (event) => {
    event.preventDefault();
    let sortedCats = [];
    cats = JSON.parse(sessionStorage.cats);
    for (let cat of cats) {
        sortedCats.push(cat);
    }
    sortedCats.sort(function (a, b) {
        return b.weight - a.weight
    });
    renderCats(sortedCats);
    totalWeightDiv.innerHTML = '';
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const foundCats = cats.filter((cat) => cat.title.search(searchInput.value) !== -1);
    clearInput();
    renderCats(foundCats);
    totalWeightDiv.innerHTML = '';
});

countButton.addEventListener('click', (event) => {
    totalWeightDiv.innerHTML = '';
    event.preventDefault();
    countTotalWeight(renderedCats);
});

backButton.addEventListener('click', (event) => {
    event.preventDefault();
    renderCats(cats);
    totalWeightDiv.innerHTML = '';
});

const clearInput = () => {
    searchInput.value = '';
};

const countTotalWeight = (cats) => {
    const totalWeight = cats.reduce(function (totalWeight, b) {
        return totalWeight + parseInt(b.weight);
    }, 0);
    totalWeightDiv.insertAdjacentHTML('beforeend', totalWeightTemplate(totalWeight));
}

const totalWeightTemplate = (totalWeight) => `${totalWeight}`;

const itemTemplate = (item, id) => `
<div class="block" id="${id}-cat">
    <img src="../cat.jpg" alt="cat" class="cat-photo">
    <div class=cat "${id}-cat-name">${item.title}</div>
    <div class="cat-weight">Cat weight in kilos:</div>
    <div class='edit'>
    <div class="cat-weight-value" id="${id}-cat-weight">${item.weight}</div>
    <button class='edit-button ${id}-edit-button' id='${id}-edit-button'">Edit</button>
    <button class='delete-button' id='${id}-delete-button'">Delete</button>
    </div>
</div>`

const insertItem = (item) => {
    asideItems.insertAdjacentHTML('beforeend', itemTemplate(item, item.id));
    const editButton = document.getElementById(`${item.id}-edit-button`);
    const deleteButton = document.getElementById(`${item.id}-delete-button`);
    editButton.addEventListener('click', onEdit);
    deleteButton.addEventListener('click', onDelete);
}

const renderCats = (items) => {
    asideItems.innerHTML = '';
    for (const item of items) {
        insertItem(item)
    }
    renderedCats = items;
}

const onDelete = (item) => {
    let itemIndex = item.target.id.replace('-delete-button', '');
    let body = { id: itemIndex };
    deleteCat(body).then((data) => { document.location.reload(); });
}

const onEdit = (item) => {
    let itemIndex = item.target.id.replace('-edit-button', '');
    sessionStorage.setItem('to-edit', itemIndex);
    document.location.href = './edit.html'
}

const addCats = () => {
    getCats().then((gotCats) => {
        for (let cat of gotCats['cat']) {
            let id = cat[0];
            let title = cat[1];
            let weight = cat[2];
            let catItem = {
                id,
                title,
                weight
            }
            cats.push(catItem);
        }
        renderCats(cats);
    })
}
addCats();

