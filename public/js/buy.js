const btn = document.getElementById('btn')
const div = document.getElementById('alert')
const bg = document.getElementById('bgOver')


btn.addEventListener("click", () => {
    console.log("clické")
    if(getComputedStyle(div).display != "none"){
        div.style.display = "none";
        bg.style.display = "none"; 
    }else{
        div.style.display = "flex";
        bg.style.display = "flex"; 
    }
})



bg.addEventListener("click", () =>{
    console.log("background cliqué")
    if(getComputedStyle(div).display != "flex"){
        div.style.display = "flex";
        bg.style.display = "flex";   
    }else{
        div.style.display = "none";
        bg.style.display = "none"; 
    }
})