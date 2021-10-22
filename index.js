for(var i=0;i<=6;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleClicks);
}
function handleClicks()
{
    var currentKey=this.innerHTML;
    if(this.innerHTML=='w')
    {
        var mySound=new Audio("sounds/crash.mp3");
        mySound.play();
    }
    else if(this.innerHTML=='a')
    {
        var mySound=new Audio("sounds/kick-bass.mp3");
        mySound.play();
    }
    else if(this.innerHTML=='s')
    {
        
        var mySound=new Audio("sounds/snare.mp3");
        mySound.play();
    }
    else if(this.innerHTML=='d')
    {
        
        var mySound=new Audio("sounds/tom-1.mp3");
        mySound.play();
    }
    else if(this.innerHTML=='j')
    {
        
        var mySound=new Audio("sounds/tom-2.mp3");
        mySound.play();
    }
    else if(this.innerHTML=='k')
    {
        
        var mySound=new Audio("sounds/tom-3.mp3");
        mySound.play();
    }
    else
    {
        var mySound=new Audio("sounds/tom-4.mp3");
        mySound.play();
    }
   animated(currentKey);
    
};

    document.addEventListener("keydown",handleKeys);
    function handleKeys(e)
    {
        var currentKey=e.key;

       console.log(e.key);
       if(e.key=='w'||e.key=='W')
       {
        var mySound=new Audio("sounds/crash.mp3");
        mySound.play();
       }
       else if(e.key=='a'||e.key=='A')
       {
        var mySound=new Audio("sounds/kick-bass.mp3");
        mySound.play();
       }
       else if(e.key=='s'||e.key=='S')
       {
        var mySound=new Audio("sounds/snare.mp3");
        mySound.play();
       }
       else if(e.key=='d'||e.key=='D')
       {
        var mySound=new Audio("sounds/tom-1.mp3");
        mySound.play();
       }
       else if(e.key=='j'||e.key=='J')
       {
        var mySound=new Audio("sounds/tom-2.mp3");
        mySound.play();
       }
       else if(e.key=='k'||e.key=='K')
       {
        var mySound=new Audio("sounds/tom-3.mp3");
        mySound.play();
       }
       else if(e.key=='l'||e.key=='L')
       {
        var mySound=new Audio("sounds/tom-4.mp3");
        mySound.play();
       }
       else
       {
         alert("OOPS!Sorry you didnt press any of the drum keys");
       }

       animated(currentKey)

    };
function animated(currentKey)
{
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(stopAnimation,500); 
  function stopAnimation()
  {
    document.querySelector("."+currentKey).classList.remove("pressed");
  };
  
};

