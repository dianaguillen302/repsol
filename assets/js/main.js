$("#navbar").load("/inc/navbar.html");
document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.pathname; // Get only the path without domain

    let navLinks = document.querySelectorAll(".head-1-link-com, .head-1-link-com-mobile");

    navLinks.forEach(link => {
        let linkPath = new URL(link.href).pathname; // Extract pathname from the link

        if (linkPath === currentUrl || (linkPath === "/" && currentUrl === "")) {
            link.closest(".head-item").classList.add("active");
        } else {
            link.closest(".head-item").classList.remove("active");
        }
    });
});

$("#footer").load("/inc/footer.html");