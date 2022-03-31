 var name=document.querySelector("#form").addEventListener("click",onchange)
function onchange(){
   var d= document.querySelector("#cities").value;
   document.querySelector("#brd1").value=d;

   var s= document.querySelector("#rama").value;
   document.querySelector("#brd").value=s;

   var t= document.querySelector("#sk").value;
   document.querySelector("#brd2").value=t;

   var d= document.querySelector("#cities").value;
   document.querySelector("#brd1").value=d;

  
};
function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
}



    
