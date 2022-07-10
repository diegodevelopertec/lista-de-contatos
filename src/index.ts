let el=(e:string)=>document.querySelector(e) 
let containerModal=el('.container-modal') as HTMLDivElement
let ButtonStartModal=el('.open-modal')   as HTMLButtonElement
let ButtonCancelModal=el('.btn-cancel') as HTMLButtonElement
let containerMain=el('.content-list') as HTMLDivElement
let containerfavoritos=el('.container-favoritos') as HTMLDivElement
let ButtonAddNote=el('.btn-add') as HTMLLinkElement
let fileInput=el('.img-file') as HTMLInputElement




type dataList={
    id:number,
    nome:string,
    email:string,
    tel:string
}


let list:dataList[]=[]




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
                  <img src="/public/img/user.png" id='img-profile ' alt="">
                  <span  class="name-ctt">${nome.value}</span>
          </div>
          <div class="data">
              <a  href='mailto:${email.value}' class="email-data"> <img src="https://img.icons8.com/doodle/48/000000/newsletter.png"/></a>
              <a  href='tel:${tel.value} ' class="tel-data"><img src="https://img.icons8.com/material-outlined/24/000000/call-female.png"/></a>
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
