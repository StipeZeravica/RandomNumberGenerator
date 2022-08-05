let form = document.getElementById("botun");

form.addEventListener('click',(e)=>{
   e.preventDefault();
   document.getElementById("comment").innerText=getNum();

})

function getNum(){
   return Math.floor(Math.random()*(1000000));

}




