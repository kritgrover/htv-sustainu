let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

document.getElementsByClassName("mySlides1").onload = function() {showSlides(1, 0)};
document.getElementsByClassName("mySlides2").onload = function() {showSlides(1, 1)};
document.getElementsByClassName("mySlides3").onload = function() {showSlides(1, 2)};

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}
