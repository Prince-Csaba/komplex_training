function pageLoad() {
  console.log("Cta loaded");
  let ctaButton = document.getElementById("eBook");
  let eBookDiv = document.getElementById("eBookDiv");
  let ctaTape = document.getElementsByClassName("ctaTape");
  console.log(ctaTape); 
  console.log(ctaButton);
  const showForm = () => {
    console.log("Button clicked");    
    right.classList.add("d-none");
    form.classList.remove("d-none");
    form.classList.add("d-flex");
    ctaTape[0].classList.add("d-none");
    eBookDiv.classList.add("flexHCenter");
  }
  let right = document.getElementById("right");
  let form = document.getElementById("form");

  ctaButton.addEventListener('click', showForm);

}
window.addEventListener('load', pageLoad);