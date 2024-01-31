const toggle = document.querySelectorAll(".nav__toggle img");
const navToggle = document.querySelector(".nav__toggle");
const open = document.querySelector(".nav__open");
const close = document.querySelector(".nav__close");
const menu = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__link");
const linksIconWrapper = document.querySelectorAll(".nav__link span");
const sub_menu = document.querySelectorAll(".nav__sub__menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

open.addEventListener("click", openToggle);
close.addEventListener("click", closeToggle);

function openToggle() {
  menu.classList.add("active");
  overlay.classList.add("showOverlay");
  nav.classList.add("addHeight");
  navToggle.setAttribute("aria-expanded", "true");
  open.style.display = "none";
  document.body.classList.add("noScroll");
  close.style.display = "block";
}

function closeToggle() {
  open.style.display = "block";
  menu.classList.remove("active");
  nav.classList.remove("addHeight");
  overlay.classList.remove("showOverlay");
  document.body.classList.remove("noScroll");
  close.style.display = "none";

}

// show drop down menu
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    //loop on sub menus
    sub_menu.forEach((sub) => {
      if (e.target.parentElement.dataset === sub.parentElement.dataset) {
        sub.classList.toggle("playWithSub");
      }
    });
    linksIconWrapper.forEach((iconWrapper) => {
      if (
        e.target.parentElement.dataset ===
        iconWrapper.parentElement.parentElement.dataset
      ) {
        // console.log(icon.children[0])
        iconWrapper.children[0].classList.toggle("playWithArrowDown");
        iconWrapper.children[1].classList.toggle("playWithArrowUp");
      }
    });
  });

  //another solution for toogle

  // toggle.forEach((icon) => {
  //   icon.addEventListener("click", (e) => {
  //     if (e.target.classList.contains("nav__open")) {
  //       close.style.display = "block";
  //       e.target.style.display = "none";
  //       menu.classList.add("active");
  //       overlay.classList.add("showOverlay");
  //       nav.classList.add("addHeight");
  //       navToggle.setAttribute("aria-expanded", "true");
  //     }
  //     if (e.target.classList.contains("nav__close")) {
  //       e.target.style.display = "none";
  //       open.style.display = "block";
  //       menu.classList.remove("active");
  //       nav.classList.remove("addHeight");

  //       //loop on sub menus
  //       //   sub__menu.forEach((sub) => {
  //       //     sub.classList.remove("playWithSub");
  //       //   });

  //       overlay.classList.remove("showOverlay");
  //     }
  //   });
  // });
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Tab") {
    
  }
});
