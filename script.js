//header navigation
const NAVIGATION = document.querySelector(".navigation");
NAVIGATION.addEventListener("click", (event) => {
  NAVIGATION.querySelectorAll("a").forEach(el => el.classList.remove("chosen"));
  event.target.classList.add("chosen");

})


//Slider
const PREV = document.querySelector('.arrow-left');
const NEXT = document.querySelector('.arrow-right');

let items = document.querySelectorAll('.item');

let i = 0;


PREV.onclick = function() {
    items[i].classList.remove("active");
    i--;

    if (i < 0) {
        i = items.length - 1;
    }

    items[i].classList.add("active");
}

NEXT.onclick = function() {
    items[i].classList.remove("active");
    i++;

    if (i >= items.length) {
        i = 0;
    }

    items[i].classList.add("active");
}

//Dark screen 
let phone = document.querySelector(".vhome-button");
let screen = document.querySelector(".off");

phone.onclick = function() {
    screen.classList.toggle("dark-screen-vertical");

}

let phoneHorizontal = document.querySelector(".hhome-button");
let screenHorizontal = document.querySelector(".black");
phoneHorizontal.onclick = function() {
    screenHorizontal.classList.toggle("dark-screen-horizontal");
}

//Portfolio

let portfolio = document.querySelector(".portfolio-images-container");
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

let portfolioNav = document.querySelector(".portfolio-navigation");
portfolioNav.addEventListener("click", (event) => {
    portfolioNav.querySelectorAll("button").forEach(el => el.classList.remove("active-button"));
    event.target.classList.add("active-button");
    let imageContainer = Array.from(document.querySelectorAll(".portfolio-image"));
    let sortedImages = shuffle(imageContainer);
    for (let i=0; i < sortedImages.length; i++) {
        portfolio.append(sortedImages[i]);
    }
      
  })

//Portfolio Border
portfolio.onclick = function(event) {
    if (event.target.tagName == "IMG") {
        portfolio.querySelectorAll("img").forEach(el => el.classList.remove("portfolio-border"));
        event.target.classList.add("portfolio-border");
    }

}
//Forms
let form = document.querySelector("form");
let userName = document.querySelector(".user-name");
let userEmail = document.querySelector(".input-email");
let subject = document.querySelector(".subject");
let description = document.querySelector(".textarea");
let modal = document.querySelector(".message-block");
let messageButton = document.querySelector(".message-button");
let message = document.querySelector(".message-theme");
let messageDescription = document.querySelector(".message-description");

form.onsubmit = function(event) {
    event.preventDefault();
    modal.classList.remove("hidden");
    subject.value.toString() ? message.innerHTML = `Тема: ${subject.value.toString()}` : message.innerHTML = "Без темы";
    description.value.toString() ? messageDescription.innerHTML = `Описание: ${description.value.toString()}` : messageDescription.innerHTML = "Без описания";
    messageButton.onclick = function() {
        modal.classList.add("hidden");
        subject.value = '';
        description.value = '';
        userName.value = '';
        userEmail.value = '';
    }
}


