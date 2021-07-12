var rand = Math.floor(Math.random() * 100 + 1);
var hint=document.getElementById("hint");

hint.innerHTML="Try To Gusse The Number Its Between 0 : 100";
var Try=0;
 
 var cover = document.createElement("test");
 cover.id = "Success";
 var h1victory = document.createElement("h1");
 var btn = document.createElement("button");
 btn.setAttribute("onclick", "location.reload()")
 btn.textContent = "Play Again";

document.getElementById("submitguess").onclick = function(){

   Try++;
var val = document.getElementById("guessvalue").value;
if(val == rand)
{    
   h1victory.innerHTML = "The Number IS ( "+rand +" ) You Got It In ( "+Try+" ) Tries" ;
   document.body.appendChild(cover);
   cover.appendChild(h1victory);
   cover.appendChild(btn);
   
}
else if(val > rand)  
{    
   hint.innerHTML="TRY A SMALLER NUMBER";
   
}
else
{
   hint.innerHTML="TRY A GREATER NUMBER";
  
}
}


