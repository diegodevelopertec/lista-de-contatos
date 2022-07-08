let el=(e:string)=>document.querySelector(e) as HTMLElement
let containerModal=el('.container-modal')
let ButtonStartModal=el('.open-modal')
let ButtonCancelModal=el('.btn-cancel')
let containerMain=el('.content-list') 
let containerfavoritos=el('.container-favoritos')
let ButtonAddNote=el('.btn-add')
let ButtonLixeira=el('.lixeira')
let ButtonFavorito=el('.favoritos')


type dataList={
    id:number,
    nome:string,
    email:string,
    tel:string
}


let list:dataList[]=[
   /* {id:1,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:2,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:3,nome:'André',email:'andre@gmail.com',tel:'32264856'},
 */
]








function addNote(){
    let nome=el('.nome') as HTMLInputElement
    let email=el('.email') as HTMLInputElement
    let tel=el('.tel') as HTMLInputElement

    let condicao=nome.value !=='' && email.value !=='' && tel.value !==''
   
    if(condicao){

            list.push({
                id:list.length+1,
                nome:nome.value,
                email:email.value,
                tel:tel.value
            })

            let newCard=document.createElement('span') as HTMLSpanElement

       newCard.innerHTML= `<div class="card-ctt">
          <div class="profile">
                  <img src="" id='img-profile ' alt="">
                  <span  class="name-ctt">${nome.value}</span>
          </div>
          <div class="data">
              <a  href='maito:${email.value}' class="email-data"> <img src="https://img.icons8.com/doodle/48/000000/newsletter.png"/></a>
              <a  href='tel:${tel.value} ' class="tel-data"><img src="https://img.icons8.com/material-outlined/24/000000/call-female.png"/></a>
          </div>
          <div class="icons">
              <a  href=' ' class="email-data"><img src="https://img.icons8.com/ios-glyphs/30/000000/delete.png"/></a>
              <a  href=' ' class="email-data"> <img src="https://img.icons8.com/ios-glyphs/60/000000/add-to-favorites.png"/> </a>
          </div>
</div>
`

containerMain.appendChild(newCard)
            console.log(list);
            
            nome.value =''
            email.value =''
             tel.value =''

             containerModal.classList.remove('visivel')
             containerModal.classList.add('oculto')
             containerMain.style.opacity='1.0'


    }else{
        alert('Preencha todos os campos')
    }


}




let deleteContact=(event:Event)=>{

  
    
}


let openModal=()=>{
    if(containerModal.classList.contains('oculto')){
        containerModal.classList.remove('oculto')
        containerModal.classList.add('visivel')
        containerMain.style.opacity='0.5'
       
    }

}

let closeModal=()=>{
    if(containerModal.classList.contains('visivel')){
        containerModal.classList.remove('visivel')
        containerModal.classList.add('oculto')
        containerMain.style.opacity='1.0'
    }

}
ButtonStartModal.addEventListener('click',openModal)
ButtonCancelModal.addEventListener('click',closeModal)
ButtonAddNote.addEventListener('click',addNote)
ButtonLixeira.addEventListener('click',deleteContact)