function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav =
            document.getElementById("navLinks");

        nav.classList.remove("active");

    });

});

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

const forms =
    document.querySelectorAll(".demo-form");

forms.forEach(function(form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you. This is a demonstration form for the website project."
        );

    });

});