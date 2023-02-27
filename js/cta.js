function pageLoad() {
  console.log("Cta loaded");
  let ctaButton = document.getElementById("eBook");
  console.log(ctaButton);
  const showForm = () => {
    console.log("Button clicked");    
    right.classList.add("d-none");
    form.classList.remove("d-none");
    form.classList.add("d-flex");
  }
  let right = document.getElementById("right");
  let form = document.getElementById("form");

  ctaButton.addEventListener('click', showForm);

}
window.addEventListener('load', pageLoad);