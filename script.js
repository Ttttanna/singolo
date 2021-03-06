 document.addEventListener("scroll", onScroll);
 function onScroll(event) {
     const currentPos = window.scrollY;
     const scrollPoints = document.querySelectorAll(".to-scroll");
     const NAVIGATION = document.querySelector(".navigation");
     const links = NAVIGATION.querySelectorAll("a");
     let headerHeight = document.querySelector(".header-container").offsetHeight + 1;

     scrollPoints.forEach((el) => {
         el.getAttribute("id");
         if (currentPos === 0) {
             links.forEach((a)=> {
                 a.classList.remove("chosen");
                 links[0].classList.add("chosen");
             })
         }
         if ((el.offsetTop - headerHeight) < currentPos && (el.offsetTop + el.offsetHeight - headerHeight) > currentPos) {
               links.forEach((a) => {
                 a.classList.remove("chosen");
                 if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
                     a.classList.add ("chosen");
                 }
             })
         }
     });
 }


//Slider
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("active", direction);
    })
}

function showItem(direction) {
    
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("next", direction);
        this.classList.add("active");
        isEnabled= true;
    })
}

function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
}

function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
}

const PREV = document.querySelector('.arrow-left');
const NEXT = document.querySelector('.arrow-right');

PREV.addEventListener("click", function() {
    if(isEnabled) {
        previousItem(currentItem);
    }
});

NEXT.addEventListener("click", function() {
    if(isEnabled) {
        nextItem(currentItem);
    }
});

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
/*function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }*/
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

let portfolioNav = document.querySelector(".portfolio-navigation");
portfolioNav.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
      portfolioNav.querySelectorAll("button").forEach(el => el.classList.remove("active-button"));
      event.target.classList.add("active-button");
      let imageContainer = Array.from(document.querySelectorAll(".portfolio-image"));
      let sortedImages = shuffle(imageContainer);
      for (let i=0; i < sortedImages.length; i++) {
        portfolio.append(sortedImages[i]);
        } 
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
let body = document.querySelector("body");

description.onkeyup  = function(event) {
    if (event.target.value.length > 500) {
        event.target.value = event.target.value.substring(0, 500);
    }
}

form.onsubmit = function(event) {
    event.preventDefault();
    modal.classList.remove("hidden");
    body.style.overflowY ="hidden";
    subject.value.toString() ? message.innerHTML = `Тема: ${subject.value.toString()}` : message.innerHTML = "Без темы";
    description.value.toString() ? messageDescription.innerHTML = `Описание: ${description.value.toString()}` : messageDescription.innerHTML = "Без описания";
    messageButton.onclick = function() {
        modal.classList.add("hidden");
        body.style.overflowY ="scroll";
        subject.value = '';
        description.value = '';
        userName.value = '';
        userEmail.value = '';
    }
}

//Burger menu activation
let burgerMenu = document.querySelector(".burger");
let menuLines = document.querySelector(".burger__line");
let nav = document.querySelector(".header__navigation");
let logo = document.querySelector(".logo");

burgerMenu.onclick = function() {
    menuLines.classList.toggle("open");
    nav.classList.toggle("activation");
    logo.classList.toggle("bur");
    body.classList.toggle("lock");
}


const NAVIGATION = document.querySelector(".navigation");
NAVIGATION.addEventListener("click", (event) => {
    if(event.target.tagName == "A") {
      menuLines.classList.remove("open");
      nav.classList.remove("activation");
      body.classList.remove("lock");
    }
 })


