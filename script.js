let ting= new Audio("ting.mp3")
let sound_gameover= new Audio("gameover.mp3")
turn="X";
let gameover=false;

//to change turns
const changeTurn=function()
{    ting.play();
   return turn==="X"?"0":"X";
}

//to check wins
let textBox=document.querySelectorAll(".box")
let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let checkWin=function()
{wins.forEach((e)=>{if(textBox[e[0]].innerText==textBox[e[1]].innerText &&textBox[e[1]].innerText==textBox[e[2]].innerText && textBox[e[0]].innerText!=="")
{
    document.getElementById("headings").innerText=textBox[e[0]].innerText+" won ";
    gameover=true;
    document.getElementsByClassName("gif")[0].setAttribute("class","change");
    sound_gameover.play();
}})

}


//game logic
{let collections=document.getElementsByClassName("ele");
Array.from(collections).forEach(element=>
    {
    let boxtext=element.querySelector(".box");
    element.addEventListener("click",()=>
    {if(boxtext.innerHTML==="")
        { boxtext.innerHTML=turn;
            turn=changeTurn();
           
            checkWin();
            if(!gameover)
            {
                document.getElementById("headings").innerText=` turn for ${turn}`;
            }
            
        }
            
    })})}

//reset button
document.getElementById("reset").addEventListener("click",clear_all);
function clear_all()
{
    let clear_boxes=document.querySelectorAll(".box");
    Array.from(clear_boxes).forEach((x)=>{
        x.innerText="";})
        turn="X";
        gameover=false;
        if(!gameover)
            {
                document.getElementById("headings").innerText=` turn for ${turn}`;
            }
        document.getElementById("image").setAttribute("class","gif");
    
}