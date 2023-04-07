function pageLoad() {
  setTimeout(myURL, 5000);
  function myURL() {
    document.location.href = 'https://www.komplextraining.hu/';
 }
}
window.addEventListener('load', pageLoad);