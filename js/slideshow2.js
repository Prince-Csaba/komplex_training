function pageLoad() {
  let sIndex = 0;
  cShowSlides();

  function cShowSlides() {
    let j;
    let cSlides = document.getElementsByClassName("myCSlides");
    for (j = 0; j < cSlides.length; j++) {
      cSlides[j].style.display = "none";
    }
    sIndex++;
    if (sIndex > cSlides.length) {
      sIndex = 1;
    }
    cSlides[sIndex - 1].style.display = "flex";
    setTimeout(cShowSlides, 10000); // Change image every 2 seconds
  }
}
window.addEventListener("load", pageLoad);
