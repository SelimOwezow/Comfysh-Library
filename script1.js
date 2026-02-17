const categoriesLink = document.getElementById("categories-link");
const categoriesMenu = document.getElementById("categories-menu");

const toggleDropdown = function(event) {
  event.preventDefault();
  categoriesMenu.classList.toggle("show");
}
categoriesLink.addEventListener("click", toggleDropdown);
document.documentElement.addEventListener("click", function (event){
  if(!categoriesMenu.contains(event.target) && event.target !== categoriesLink){
    categoriesMenu.classList.remove("show");
  }
})