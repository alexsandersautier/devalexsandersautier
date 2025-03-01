const span = document.getElementById('year');
span.innerText = new Date().getFullYear();

const burguer = document.getElementById('burguer');
const links = document.getElementById('links');

burguer.addEventListener('click', () => {

    burguer.innerText = burguer.innerText === 'menu' ? 'close' : 'menu';
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
})

window.addEventListener('resize', () => {

    if (window.innerWidth > 768) {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }

})

const inputName = document.getElementById('name');
const order = document.getElementById('order');
order.addEventListener('click', () => {
    inputName.focus();
});

import { data } from "../data/dados.js";

let index = 0;
const siteName = document.getElementById('site-name');
const siteImg = document.getElementById('site-image');
const siteLink = document.getElementById('site-link');

const handleChange = (index) => {
    siteName.innerText = data[index].name;
    siteImg.src = data[index].image;
    siteImg.alt = data[index].name;
    siteLink.href = data[index].url;
}

const previous = document.getElementById('previous');

previous.addEventListener('click', () =>{
    if (index > 0) {
        index--;
    } else {
        index = data.length - 1;
    }
    handleChange(index);
});

const next = document.getElementById('next');
next.addEventListener('click', () =>{
    if (index < data.length - 1) {
        index++;
    } else {
        index = 0;
    }
    handleChange(index);
});