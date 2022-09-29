const editTitle = document.getElementById('edit-title');
const editWeight = document.getElementById('edit-weight');
const editButton = document.getElementById('edit');
let itemIndex = sessionStorage.getItem('to-edit');
let editCat = JSON.parse(sessionStorage.cats)[0];

editTitle.value = editCat.title;
editWeight.value = editCat.weight;
editButton.addEventListener('click', (event) => {
    event.preventDefault();
    let editedWeight = editWeight.value;
    let editedTitle = editTitle.value;
    let cats = JSON.parse(sessionStorage.getItem('cats'));
    cats[itemIndex].title = editedTitle;
    cats[itemIndex].weight = editedWeight;
    sessionStorage.setItem('cats', JSON.stringify(cats));
    sessionStorage.removeItem('to-edit');
    document.location.href = './index.html';
    console.log(sessionStorage);
})