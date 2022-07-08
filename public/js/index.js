"use strict";
var el = function (e) { return document.querySelector(e); };
var containerModal = el('.container-modal');
var ButtonStartModal = el('.open-modal');
var ButtonCancelModal = el('.btn-cancel');
var containerMain = el('.content-list');
var containerfavoritos = el('.container-favoritos');
var ButtonAddNote = el('.btn-add');
var ButtonLixeira = el('.lixeira');
var ButtonFavorito = el('.favoritos');
var list = [
/* {id:1,nome:'André',email:'andre@gmail.com',tel:'32264856'},
 {id:2,nome:'André',email:'andre@gmail.com',tel:'32264856'},
 {id:3,nome:'André',email:'andre@gmail.com',tel:'32264856'},
*/
];
function addNote() {
    var nome = el('.nome');
    var email = el('.email');
    var tel = el('.tel');
    var condicao = nome.value !== '' && email.value !== '' && tel.value !== '';
    if (condicao) {
        list.push({
            id: list.length + 1,
            nome: nome.value,
            email: email.value,
            tel: tel.value
        });
        var newCard = document.createElement('span');
        newCard.innerHTML = "<div class=\"card-ctt\">\n          <div class=\"profile\">\n                  <img src=\"\" id='img-profile ' alt=\"\">\n                  <span  class=\"name-ctt\">".concat(nome.value, "</span>\n          </div>\n          <div class=\"data\">\n              <a  href='maito:").concat(email.value, "' class=\"email-data\"> <img src=\"https://img.icons8.com/doodle/48/000000/newsletter.png\"/></a>\n              <a  href='tel:").concat(tel.value, " ' class=\"tel-data\"><img src=\"https://img.icons8.com/material-outlined/24/000000/call-female.png\"/></a>\n          </div>\n          <div class=\"icons\">\n              <a  href=' ' class=\"email-data\"><img src=\"https://img.icons8.com/ios-glyphs/30/000000/delete.png\"/></a>\n              <a  href=' ' class=\"email-data\"> <img src=\"https://img.icons8.com/ios-glyphs/60/000000/add-to-favorites.png\"/> </a>\n          </div>\n</div>\n");
        containerMain.appendChild(newCard);
        console.log(list);
        nome.value = '';
        email.value = '';
        tel.value = '';
        containerModal.classList.remove('visivel');
        containerModal.classList.add('oculto');
        containerMain.style.opacity = '1.0';
    }
    else {
        alert('Preencha todos os campos');
    }
}
var deleteContact = function (event) {
};
var openModal = function () {
    if (containerModal.classList.contains('oculto')) {
        containerModal.classList.remove('oculto');
        containerModal.classList.add('visivel');
        containerMain.style.opacity = '0.5';
    }
};
var closeModal = function () {
    if (containerModal.classList.contains('visivel')) {
        containerModal.classList.remove('visivel');
        containerModal.classList.add('oculto');
        containerMain.style.opacity = '1.0';
    }
};
ButtonStartModal.addEventListener('click', openModal);
ButtonCancelModal.addEventListener('click', closeModal);
ButtonAddNote.addEventListener('click', addNote);
ButtonLixeira.addEventListener('click', deleteContact);
