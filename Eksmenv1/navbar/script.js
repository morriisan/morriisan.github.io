const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');



hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

let popup= document.getElementById("popup");

    function openPopup(){
        popup.classList.add("open-popup")
    }
    function closePopup(){
        popup.classList.remove("open-popup")
    }