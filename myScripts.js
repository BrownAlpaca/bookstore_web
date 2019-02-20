var slideIndex = 1;

//plus the numnber of slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//show the current slides
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//show the slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//clear the form
function clearForm() {
    document.getElementById("Contact").reset();
}
//check the format of the input
function formatCheck() {
    var name = document.getElementById("Cname").value;
    var email = document.getElementById("Ce-mail").value;
    var message=document.getElementById("Cmessage").value;
    var phone=document.getElementById("Cphone").value;
    var phoneT=/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    if (name === "" || email === "" || message === "" || phone === "") {
        alert("Please fill all fields!");
        return false;
    }
    else if (!(phone).match(phoneT)){
        alert("Invalid phone format");
        return false;
    }
    else {
        alert("Message submitted!");
        return true;
    }
}
//disable the right click
function ClickDisabled(event) {
    if(event.button=="2"){
        alert("The Right Click has been disabled");
    }
}