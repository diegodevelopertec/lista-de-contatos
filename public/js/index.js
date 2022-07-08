"use strict";
var el = function (e) { return document.querySelector(e); };
var containerModal = el('.container-modal');
var ButtonStartModal = el('.open-modal');
var ButtonCancelModal = el('.btn-cancel');
var containerMain = el('.content-list');
var containerfavoritos = el('.container-favoritos');
var ButtonAddNote = el('.btn-add');
var list = [
    { id: 1, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 2, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 3, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 4, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 5, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 1, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 2, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 3, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 4, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 5, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 1, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 2, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 3, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 4, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
    { id: 5, nome: 'André', email: 'andre@gmail.com', tel: '32264856' },
];
var setList = function () { return list.map(function (item, index) {
    containerMain.innerHTML += "\n\n<div class=\"card-ctt\">\n<div class=\"profile\">\n        <img src=\"\" id='img-profile' alt=\"\">\n        <span class=\"name-ctt\">".concat(item.nome, "</span>\n</div>\n<div class=\"data\">\n    <a  href='mailto:").concat(item.email, "' class=\"email-data\"> <img src=\"https://img.icons8.com/doodle/48/000000/newsletter.png\"/></a>\n    <a  href='tel:").concat(item.tel, " ' class=\"tel-data\"><img src=\"https://img.icons8.com/material-outlined/24/000000/call-female.png\"/></a>\n</div>\n<div class=\"icons\">\n    <a  href=' ' class=\"email-data\"><img src=\"https://img.icons8.com/ios-glyphs/30/000000/delete.png\"/></a>\n    <a  href=' ' class=\"email-data\"> <img src=\"https://img.icons8.com/ios-glyphs/60/000000/add-to-favorites.png\"/> </a>\n</div>\n</div>\n\n\n");
}); };
setList();
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
        console.log(list);
        nome.value = '';
        email.value = '';
        tel.value = '';
        containerModal.classList.remove('visivel');
        containerModal.classList.add('oculto');
        containerMain.style.opacity = '1.0';
        setList();
    }
    else {
        alert('Preencha todos os campos');
    }
}
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
