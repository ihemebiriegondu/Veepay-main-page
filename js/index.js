// Add active class to the current button (highlight it)
const btnGroup = document.getElementById("myNewTab");
const btns = document.getElementsByClassName("nav-tabs-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}