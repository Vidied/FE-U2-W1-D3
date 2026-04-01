const mediaQueryMobile = window.matchMedia("(max-width: 576px)");

const cardExtra = document.querySelector("cardExtra");

const displayTablet = (e) => {
  if (e.matches) {
    cardExtra.classList.add("nascosto");
  } else {
    cardExtra.classList.remove("nascosto");
  }
};
