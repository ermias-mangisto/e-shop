for(let i=0;i<5;i++){
    rec.innerHTML+=`<div>
      <p>${books[i].name}</p>
      <img src=${books[i].imgs[0]}>
      <p>price:${books[i].price}$</p>
      <p>${books[i].description}</p>
      <button class="addBtn"> Add to cart </button>
      </div>`}
   
      let cart=[];
      let add=document.getElementsByClassName("addBtn");
  for(let i=0;i<books.length;i++){
      add[i].addEventListener("click",()=>{
       cart.push(books[i])
   
      })}