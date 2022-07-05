"use strict";
var _a, _b, _c;
//Variáveis
var modalContato = document.querySelector('.modal-ctt');
var containerMain = document.querySelector('.container-content');
var ulListaContatos = document.querySelector('ul');
var btnLixeira = document.querySelector('#btn-lixeira');
var btnFavoritos = document.querySelector('#btn-favoritos');
var listaContatos = [
// {id:1,nome:'diego',tel:'44444',email:'body@gmail.com'},
];
//Funções
//Renderizar Lista de contatos
listaContatos.forEach(function (item, index) {
    ulListaContatos.innerHTML = '';
    ulListaContatos.innerHTML += "\n        <li id=".concat(index + 1, ">\n        <div class=\"content-list\">\n         <img src=\"https://img.icons8.com/fluency/96/000000/gender-neutral-user.png\"/>\n                 <div id=\"nome-ctt\">\n                    \n                     <p>").concat(item.nome, "</p>\n                 \n                 </div>\n                 <div id=\"email-ctt\">\n                    ").concat(item.email, "\n                 </div>\n                 <div id=\"tel-ctt\">\n                    ").concat(item.tel, "\n                 </div>\n         </div>\n         <div class=\"icons-func\">\n                 <span><img id=\"btn-lixeira\"  src=\"https://img.icons8.com/ios-glyphs/90/000000/delete.png\" /></span>\n                 <span title=\"Favoritar\"><img id=\"btn-favoritos\" src=\"https://img.icons8.com/color/48/000000/hearts.png\"/></span>\n         </div>\n     </li>\n    \n    \n        ");
});
var openModal = function () {
    //Abrir o Modal
    if (modalContato.classList.contains('oculto')) {
        modalContato.classList.remove('oculto');
        modalContato.classList.add('visible');
        containerMain.style.opacity = '0.5';
    }
};
var setContato = function () {
    //Adicionar um novo contato
    var nome = document.querySelector('#cx-nome');
    var email = document.querySelector('#cx-email');
    var tel = document.querySelector('#cx-tel');
    var condicaoVerify = nome.value !== '' && email.value !== '' && tel.value !== '';
    if (condicaoVerify) {
        var li = document.createElement('li');
        li.innerHTML = "\n            <div class=\"content-list\">\n            <img src=\"https://img.icons8.com/fluency/96/000000/gender-neutral-user.png\"/>\n                    <div id=\"nome-ctt\">\n                       \n                        <p>".concat(nome.value, "</p>\n                    \n                    </div>\n                    <div id=\"email-ctt\">\n                      <a href=\"mailto:").concat(email.value, "\">").concat(email.value, "</a>\n                    </div>\n                    <div id=\"tel-ctt\">\n                      <a href='tel:").concat(tel.value, "'>").concat(tel.value, "</a>\n                    </div>\n            </div>\n            <div class=\"icons-func\">\n                    <a id=\"btn-lixeira\"><img   src=\"https://img.icons8.com/ios-glyphs/90/000000/delete.png\" /></a>\n                    <a id=\"btn-favoritos\" title=\"Favoritar\"><img  src=\"https://img.icons8.com/color/48/000000/hearts.png\"/></a>\n            </div>\n            \n            \n            ");
        console.log('novo contato inserido');
        ulListaContatos.appendChild(li);
        nome.value = '';
        email.value = '';
        tel.value = '';
        modalContato.classList.remove('visible');
        modalContato.classList.add('oculto');
        containerMain.style.opacity = '1.0';
    }
    else {
        alert('Algum campo não preenchido');
    }
};
var deleteContato = function (event) {
    alert('hello');
};
var closeModal = function () {
    //fechar o Modal
    if (modalContato.classList.contains('visible')) {
        modalContato.classList.remove('visible');
        modalContato.classList.add('oculto');
        containerMain.style.opacity = '1.0';
    }
};
//Eventos
(_a = document.querySelector('#cancel-note')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', closeModal);
(_b = document.querySelector('#add-note')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', setContato);
(_c = document.querySelector('.start-modal')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', openModal);
btnLixeira.addEventListener('click', deleteContato);
