var faq = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        faq = this.nextElementSibling;
        icon = this.children[1]
        faq.classList.toggle("show");
        icon.classList.toggle("rotate");
    });
}