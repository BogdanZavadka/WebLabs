const searchInput = document.getElementById("search-input");
const sortButton = document.getElementById("sort-button");
const submitButton = document.getElementById('submit-button');
const countButton = document.getElementById('count-button');
const asideItems = document.getElementById('aside');
const backButton = document.getElementById('back-button');
const secondBackButton = document.getElementById('second-back-button');
const totalWeightDiv = document.getElementById('total-weight');

let cats = [];
let renderedCats = [];

const addCats = () => {
    let i = 1;
    while (document.getElementById(`${i}-cat`)) {
        let catWeight = document.getElementById(`${i}-cat`).children[3].textContent;
        let catTitle = document.getElementById(`${i}-cat`).children[1].textContent;
        const cat = {
            catWeight,
            catTitle
        }
        cats.push(cat);
        i += 1;
    }
    renderedCats = cats;
}
addCats();

secondBackButton.addEventListener('click', (event) => {
    event.preventDefault();
    renderCats(cats);
    totalWeightDiv.innerHTML = '';
})
sortButton.addEventListener('click', (event) => {
    event.preventDefault();
    let sortedCats = [];
    for (let cat of cats) {
        sortedCats.push(cat);
    }
    sortedCats.sort(function (a, b) { return b.catWeight - a.catWeight });
    renderCats(sortedCats);
    totalWeightDiv.innerHTML = '';
});
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const foundCats = cats.filter(cat => cat.catTitle.search(searchInput.value) !== -1);
    clearInput();
    renderCats(foundCats);
    totalWeightDiv.innerHTML = '';
});
countButton.addEventListener('click', (event) => {
    totalWeightDiv.innerHTML = '';
    event.preventDefault();
    console.log(renderedCats);
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
        return totalWeight + parseInt(b.catWeight);
    }, 0);
    totalWeightDiv.insertAdjacentHTML('beforeend', totalWeightTemplate(totalWeight));
}

const totalWeightTemplate = (totalWeight) => `${totalWeight}`;
const itemTemplate = (item, id) => `
<div class="block" id="${id}-cat">
    <img src="./cat.jpg" alt="cat" class="cat-photo">
    <div class=cat "${id}-cat-name">${item.catTitle}</div>
    <div class="cat-weight">Cat weight in kilos:</div>
    <div class="cat-weight" id="${id}-cat-weight">${item.catWeight}</div>
</div>`

const insertItem = (item, id) => {
    asideItems.insertAdjacentHTML('beforeend', itemTemplate(item, id))
}

const renderCats = (items) => {
    asideItems.innerHTML = '';
    for (const item of items) {
        insertItem(item, item.id)
    }
    renderedCats = items;
}