function coelho(){
    let div = document.querySelector(".coelho");
    let img = document.getElementById("imageBunny");
    img.setAttribute("src", "assets/explosion.gif")
    setTimeout(function(){
        div.remove();
    }, 200)
    
}