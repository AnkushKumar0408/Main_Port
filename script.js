let mode = document.querySelector("#mode");
let main = document.querySelector(".main-content");
let aside = document.querySelector(".aside")
let color = "light"
let ic = "moon"

mode.addEventListener("click", () => {
    if(color === "light"){
        main.classList.add("section2")
        aside.classList.add("aside2")
        color = "dark";
    }
    else{
        main.classList.remove("section2")
        aside.classList.remove("aside2")
        color = "light"
    }
  
})

let changeicon = function(icon){
    if(ic === "moon"){
        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
        icon.style.color = "white"
        ic = "sun"
    }
    else{
        icon.classList.add("fa-moon")
        icon.classList.remove("fa-sun")
        ic = "moon"
        icon.style.color = "#302e4d"
    }
    
}
