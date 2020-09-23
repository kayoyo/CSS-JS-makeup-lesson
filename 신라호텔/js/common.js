var lang = document.querySelector("#language");
lang.addEventListener('click', function(e) {
  this.setAttribute("class", "active")
  e.preventDefault();
})
