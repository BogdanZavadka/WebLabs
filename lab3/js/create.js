const createButton = document.getElementById('create-button');
let cats = [];

createButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('create-title').value || document.getElementById('create-weight').value) {
        let weight = document.getElementById('create-weight').value;
        let title = document.getElementById('create-title').value;
        let cat = {
            title,
            weight
        };
        cats.push(cat);
        document.getElementById('create-weight').value = '';
        document.getElementById('create-title').value = '';
        sessionStorage.setItem('cats', JSON.stringify(cats));
        console.log(JSON.parse(sessionStorage.cats)[0].title);
        console.log(sessionStorage);
    } else {
        alert('ENTER DATA!!!!');
    }
})


