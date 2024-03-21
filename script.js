let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
let result="";
let arr=buttons;
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            if(result!=""){
                result=eval(result);
                input.value=result;
            }
        }
        else if(e.target.innerText=="AC"){
            result="";
            input.value=result;
        }
        else if(e.target.innerText=="DEL"){
            result=result.substring(0,result.length-1);
            input.value=result;
        }
        else{
            result+=e.target.innerText;
            input.value=result;
        }
    })
})