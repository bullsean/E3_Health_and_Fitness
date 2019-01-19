const parallax = document.getElementById("firstBack");

window.addEventListener("scroll", function (){
    var offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})