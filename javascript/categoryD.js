
    let cart=[]

    for(let i=0;i<books.length;i++){
        if(books[i].category=="horor"){
        Holder.innerHTML+=`<article>
        <p>${books[i].name}</p>
        <div class="bookImg"></div>
        <p>price:${books[i].price}$</p>
        <p>${books[i].description}</p>
        <button class="addBtn"> Add to cart </button>
        </article>`}}
    let bookImg=document.getElementsByClassName("bookImg")
    
    
    
    for(let i=0;i<books.length;i++){
    bookImg[i].innerHTML=`<img src=${books[i+37].imgs[0]}>`
    }
       
    for(let i=0;i<books.length;i++){
          bookImg[i].addEventListener("click",()=>{      
    bookImg[i].innerHTML=`<img src=${books[i+37].imgs[1]}>`
       bookImg[i].addEventListener("mouseout",()=>{      
    bookImg[i].innerHTML=`<img src=${books[i+37].imgs[0]}>`})
    
    
    
    })}
    
    
    let add=document.getElementsByClassName("addBtn")
    
    for(let i=0;i<books.length;i++){
       add[i].addEventListener("click",()=>{
        cart.push(books[i])
    
       })}
    