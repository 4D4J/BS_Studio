function search_sneaker() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('sneaker');
    const y = document.getElementsByClassName('select-sneaker');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].setAttribute("href", "#");
        }
        else{
            y[i].setAttribute("href", input);
            console.log(input);
            if(y == input){
                alert(y, x, input);
            }
            else{
                console.log(console.error());
            }
            
        }
    }

}