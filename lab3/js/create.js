const createButton = document.getElementById('create-button');
let cats = [];
import { postCat } from './api.js';

createButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('create-title').value || document.getElementById('create-weight').value) {
        let weight = document.getElementById('create-weight').value;
        let title = document.getElementById('create-title').value;
        let cat = {
            title,
            weight
        };
        postCat(cat).then(console.log);
        document.getElementById('create-weight').value = '';
        document.getElementById('create-title').value = '';
    } else {
        alert('ENTER DATA!!!!');
    }
})


