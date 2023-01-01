let userName = document.querySelector("[type= text]")
let email = document.querySelector("[type= email]")
let massage = document.querySelector("textarea")
let btn = document.getElementById("btn")
let icon = document.getElementById("icon")
let links = document.querySelector("ul")

if(matchMedia){
    const media = window.matchMedia("(max-width: 756px)")
    media.addListener(widthChange)
    widthChange(media)
}

function widthChange(media){
    if(media.matches){
        icon.onclick = ()=>{
            links.classList.toggle("show-flex")
        }
    }
}

document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let mailValid = false ;
    let massageValid = false
    console.log(userName.value)
    console.log(userName.value.length)
    console.log(massage.value)

    if(userName.value !== "" && userName.value.length <= 20){
        userValid = true
    }

    if(email.value !== ""){
        mailValid = true;
    }

    if(massage.value !== ""){
        massageValid = true;
    }

    if (userValid === true && mailValid === true && massageValid === true) {
        e.preventDefault()
        document.querySelector(".all-form").classList.add("hide")
        document.querySelector(".popup").classList.remove("hide")
        document.querySelector(".popup").style.top = "150px"
        setTimeout(() => {
        document.querySelector(".all-form").classList.remove("hide")
        document.querySelector(".popup").classList.add("hide")
        userName.value = ""
        email.value = ""
        massage.value = ""
        }, 3000);
        
    }

    if(userValid === false || mailValid === false || massageValid === false){
        e.preventDefault()
    }
}


window.onscroll = function () {
    if (scrollY >= 500) {
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
}

btn.onclick = function () {
    scroll({
        top:0,
        behavior:"smooth"
    })
    
}
