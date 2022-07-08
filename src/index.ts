let el=(e:string)=>document.querySelector(e) as HTMLElement
let containerModal=el('.container-modal')
let ButtonStartModal=el('.open-modal')
let ButtonCancelModal=el('.btn-cancel')
let containerMain=el('.content-list')
let containerfavoritos=el('.container-favoritos')
let ButtonAddNote=el('.btn-add')




type dataList={
    id:number,
    nome:string,
    email:string,
    tel:string
}


let list:dataList[]=[
    {id:1,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:2,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:3,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:4,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:5,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:1,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:2,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:3,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:4,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:5,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:1,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:2,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:3,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:4,nome:'André',email:'andre@gmail.com',tel:'32264856'},
    {id:5,nome:'André',email:'andre@gmail.com',tel:'32264856'},
]


let setList=()=>list.map((item,index)=>{

 containerMain.innerHTML+=`

<div class="card-ctt">
<div class="profile">
        <img src="" id='img-profile' alt="">
        <span class="name-ctt">${item.nome}</span>
</div>
<div class="data">
    <a  href='mailto:${item.email}' class="email-data"> <img src="https://img.icons8.com/doodle/48/000000/newsletter.png"/></a>
    <a  href='tel:${item.tel} ' class="tel-data"><img src="https://img.icons8.com/material-outlined/24/000000/call-female.png"/></a>
</div>
<div class="icons">
    <a  href=' ' class="email-data"><img src="https://img.icons8.com/ios-glyphs/30/000000/delete.png"/></a>
    <a  href=' ' class="email-data"> <img src="https://img.icons8.com/ios-glyphs/60/000000/add-to-favorites.png"/> </a>
</div>
</div>


`

})


setList()



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

            console.log(list);
            
            nome.value =''
            email.value =''
             tel.value =''

             containerModal.classList.remove('visivel')
             containerModal.classList.add('oculto')
             containerMain.style.opacity='1.0'


            setList()
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