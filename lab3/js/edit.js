const editTitle = document.getElementById('edit-title');
const editWeight = document.getElementById('edit-weight');
const editButton = document.getElementById('edit');
let itemIndex = sessionStorage.getItem('to-edit');
let cats = [];

import { editCat, getCats } from './api.js';

getCats().then((gotCats) => {
    for (let cat of gotCats['cat']) {
        let title = cat[1];
        let weight = cat[2];
        let catItem = {
            title,
            weight
        }
        cats.push(catItem);
    }
    console.log(cats, itemIndex);
    editTitle.value = cats[parseInt(itemIndex) - 1].title;
    editWeight.value = cats[parseInt(itemIndex) - 1].weight;
})

editButton.addEventListener('click', (event) => {
    event.preventDefault();
    let editedWeight = editWeight.value;
    let editedTitle = editTitle.value;
    let cat = {
        id: itemIndex - 1,
        title: editedTitle,
        weight: editedWeight
    }
    sessionStorage.removeItem('to-edit');
    editCat(cat).then(document.location.href = './index.html');
});
