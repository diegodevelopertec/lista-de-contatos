


//Variáveis
let modalContato=document.querySelector('.modal-ctt') as HTMLDivElement
let containerMain=document.querySelector('.container-content') as HTMLDivElement
let ulListaContatos=document.querySelector('ul') as HTMLUListElement
let btnLixeira=document.querySelector('#btn-lixeira') as HTMLImageElement
let btnFavoritos=document.querySelector('#btn-favoritos') as HTMLImageElement

type listType={
    id:number,
    nome:string,
    email:string,
    tel:string
}




let listaContatos:listType[]=[
   // {id:1,nome:'diego',tel:'44444',email:'body@gmail.com'},
   
]



//Funções

//Renderizar Lista de contatos


    listaContatos.forEach((item,index)=>{
        ulListaContatos.innerHTML=''
        ulListaContatos.innerHTML+=`
        <li id=${index+1}>
        <div class="content-list">
         <img src="https://img.icons8.com/fluency/96/000000/gender-neutral-user.png"/>
                 <div id="nome-ctt">
                    
                     <p>${item.nome}</p>
                 
                 </div>
                 <div id="email-ctt">
                    ${item.email}
                 </div>
                 <div id="tel-ctt">
                    ${item.tel}
                 </div>
         </div>
         <div class="icons-func">
                 <span><img id="btn-lixeira"  src="https://img.icons8.com/ios-glyphs/90/000000/delete.png" /></span>
                 <span title="Favoritar"><img id="btn-favoritos" src="https://img.icons8.com/color/48/000000/hearts.png"/></span>
         </div>
     </li>
    
    
        `
    
    
    
    
    })



let openModal=()=>{

    //Abrir o Modal
    if(modalContato.classList.contains('oculto')){
    modalContato.classList.remove('oculto')
    modalContato.classList.add('visible')
    containerMain.style.opacity='0.5'

    }
}

let setContato=()=>{
    //Adicionar um novo contato
    let nome=document.querySelector('#cx-nome') as HTMLInputElement
    let email=document.querySelector('#cx-email') as HTMLInputElement
    let tel=document.querySelector('#cx-tel') as HTMLInputElement
    
    let condicaoVerify=nome.value !== '' && email.value !== '' && tel.value !== ''

    if(condicaoVerify){

    
            let li=document.createElement('li')
            li.innerHTML=`
            <div class="content-list">
            <img src="https://img.icons8.com/fluency/96/000000/gender-neutral-user.png"/>
                    <div id="nome-ctt">
                       
                        <p>${nome.value}</p>
                    
                    </div>
                    <div id="email-ctt">
                      <a href="mailto:${email.value}">${email.value}</a>
                    </div>
                    <div id="tel-ctt">
                      <a href='tel:${tel.value}'>${tel.value}</a>
                    </div>
            </div>
            <div class="icons-func">
                    <a id="btn-lixeira"><img   src="https://img.icons8.com/ios-glyphs/90/000000/delete.png" /></a>
                    <a id="btn-favoritos" title="Favoritar"><img  src="https://img.icons8.com/color/48/000000/hearts.png"/></a>
            </div>
            
            
            `
            console.log('novo contato inserido');
            
        ulListaContatos.appendChild(li)

        nome.value = '' 
        email.value = '' 
        tel.value = ''

        modalContato.classList.remove('visible')
        modalContato.classList.add('oculto')
        containerMain.style.opacity='1.0'

    }else{
        alert('Algum campo não preenchido')
    }




}



let deleteContato=(event:any)=>{
alert('hello')

}

let closeModal=()=>{
    //fechar o Modal
    if(modalContato.classList.contains('visible')){
        modalContato.classList.remove('visible')
        modalContato.classList.add('oculto')
        containerMain.style.opacity='1.0'
    }
   
}






//Eventos

document.querySelector('#cancel-note')?.addEventListener('click',closeModal)
document.querySelector('#add-note')?.addEventListener('click',setContato)
document.querySelector('.start-modal')?.addEventListener('click',openModal)
btnLixeira.addEventListener('click',deleteContato)