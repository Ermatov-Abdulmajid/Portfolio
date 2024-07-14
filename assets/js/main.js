const mobile_menu = document.querySelector(".mobile-menu");
const site_overlay = document.querySelector(".site-overlay");
const header_burger = document.getElementById("burger");
const mobile_close_btn = document.getElementById("mobile-menu-close-btn");

function openOverlay() {
  site_overlay.style.width = "100%";
  site_overlay.style.opacity = "1";
}

function closeOverlay() {
  site_overlay.style.width = "0";
  site_overlay.style.opacity = "0";
}

function openMobileMenu() {
  mobile_menu.style.right = "0";
  openOverlay();
}

function closeMobileMenu() {
  mobile_menu.style.right = "-375px";
  closeOverlay();
}

header_burger.addEventListener("click", () => openMobileMenu());
mobile_close_btn.addEventListener("click", () => closeMobileMenu());
site_overlay.addEventListener("click", () => closeMobileMenu());

// Accordion
let acc = document.getElementsByClassName("accordion__item");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

acc[0].click();
