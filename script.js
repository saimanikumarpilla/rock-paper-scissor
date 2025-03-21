
let computerPick=()=>{
    let randomNum=Math.floor(Math.random()*3)+1;
    if(randomNum===1){
        return "rock"
    }
    else if(randomNum===2){
        return "paper"
    }
    else{
        return "secissor"
    }

}
let op=document.getElementById("op");
let bt1=document.getElementById("rock");
let bt2=document.getElementById("paper");
let bt3=document.getElementById("secissor");
bt1.addEventListener("click",()=>{
    if(computerPick()=="rock"){
        op.innerText="your input and computers input is same so it's tie";
}
    else if(computerPick()=="paper"){
        op.innerText="your input is rock and computer input is paper so lost this time";
}
    else if(computerPick()=="secissor"){
        op.innerText="your input is rock and computer input is secissor so win this game";
    }
})
bt2.addEventListener("click",()=>{
    if(computerPick()=="rock"){
        op.innerText="your input is paper and computer input is rock so you won this game";
}
    else if(computerPick()=="paper"){
        op.innerText="your input and computers input is same so it's tie";
}
    else if(computerPick()=="secissor"){
        op.innerText="your input is paper and computer input is secissor so you lost this time";
    }
})
bt3.addEventListener("click",()=>{
    if(computerPick()=="rock"){
        op.innerText="Your input is secissor and computer input output is rock so you lost this time";
    }
    else if(computerPick()=="paper"){
        op.innerText="your input is secissor and computer input is paper so you won this game";
    }
    else if(computerPick()=="secissor"){
        op.innerText="your input and computers input is same so it's tie";

}})