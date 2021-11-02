// blog slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  slideBy: 3,
  navText: [
    '<i class="fas fa-long-arrow-alt-left"></i>',
    '<i class="fas fa-long-arrow-alt-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    991: {
      items: 3,
    },
  },
});
// ---------------------------------------------------------
// show more portfolio
let portfolio = document.querySelector(".portfolio");
let hidenRows = portfolio.querySelectorAll(".hiden");
let showBtn = portfolio.querySelector(".row > p");

showBtn.addEventListener("click", showRows);

function showRows() {
  hidenRows.forEach((row) => {
    row.classList.toggle("hiden");
  });
  if (this.innerText == "Show Less") {
    this.innerText = "Show More";
  } else {
    this.innerText = "Show Less";
  }
}
// ---------------------------------------------------------

// show menu
let menuBtn = document.querySelectorAll(".menuBtn");
let menuList = document.getElementById("menuList");

menuBtn.forEach((btn) => {
  btn.addEventListener("click", showMenu);
});

function showMenu() {
  menuBtn.forEach((btn) => {
    btn.classList.toggle("active");
  });
  menuList.classList.toggle("active");
}
// ----------------------------------------------------------
