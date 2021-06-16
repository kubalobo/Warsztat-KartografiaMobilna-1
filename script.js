
const imie = "Zosia";
let zwierze = 'kota';
console.log(imie + " ma " + zwierze + "... 🐈🐈🐈");


function showContact(content) {
    // console.log("😎😎😎");
    const contactSpace = document.querySelector('#contactSpace');

    contactSpace.innerHTML = content;
}