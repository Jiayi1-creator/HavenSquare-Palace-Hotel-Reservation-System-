// Hamburger Pane

function toggleMenu() {
 const pane = document.querySelector('.hamburger-pane');
 pane.classList.toggle('active');
}


// Hide Panel when clicking outside the pane
document.addEventListener('click', function (e) {
 const pane = document.querySelector('.hamburger-pane');
 const burger = document.querySelector('.hamburger');
 if (!pane.contains(e.target) && !burger.contains(e.target)) {
   pane.classList.remove('active');
 }
});


