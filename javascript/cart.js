let cart=[
    {name:"The Spook's Secret"   ,
    id: 14  ,
    price:17 ,
    description:"the nights are drawing in and it's time for Tom and his master to move to Anglezarke",
 category:"fantasy" ,  
imgs: ["/media/sa3(1).jpg","/media/sa3(2).jpg"]   },
    {name:"the return of the king"   ,
    id: 15  ,
    price:13 ,
    description:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them",
 category:"fantasy" ,  
imgs: ["/media/lotr3(1).jfif","/media/lotr3(2).jfif"]   },
    {name:"Dracula"   ,
    id: 16  ,
    price:15 ,
    description:"The original world classic horror novel Dracula",
 category:"fantasy" ,  
imgs: ["/media/drac1(1).jfif","/media/drac1(2).jfif"]   },
]
let sum=0;
let revBtn=document.getElementsByClassName("revBtn")
let row=document.getElementsByClassName("tableRow")  


      for(let i=0;i<cart.length;i++){
    cartTable.innerHTML+= ` <tr class="tableRow">
    <td><img width="100px" height="100px" src=${cart[i].imgs[0]}>  ${cart[i].name}</td> 
      <td>price:${cart[i].price}$</td>
      <td><button class="revBtn">remove form cart</button></td>
      </tr>`}
         for (let i = 0; i < cart.length; i++) {
                sum+=cart[i].price;
                total.innerHTML=`<p>Total Price:${sum}$<p>`
                
            }
        for(let i=0;i<cart.length;i++){
            revBtn[i].addEventListener("click",()=>{
             cart.splice(i,1)
                 row[i].innerHTML=``;
             total.innerHTML=`<p>Total Price:${sum-=cart[i].price}$<p>`;

            })}
 
  
