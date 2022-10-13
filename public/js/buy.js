const btn = document.getElementById('btn')
const div = document.getElementById('alert')
const bg = document.getElementById('bgOver')




btn.addEventListener("click", () => {
    console.log("clické")
    if(getComputedStyle(div).display != "none"){
        div.style.display = "none";
        bg.style.display = "none";        
    }else{
        div.style.display = "block";
        bg.style.display = "block"; 
    }
})
