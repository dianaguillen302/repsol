document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll("[data-cmp-hook-accordion='button']");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const panel = this.parentElement.nextElementSibling;
            const isExpanded = this.getAttribute("aria-expanded") === "true";
            
            // Cierra todos los paneles
            document.querySelectorAll("[data-cmp-hook-accordion='panel']").forEach(p => {
                p.classList.add("cmp-accordion__panel--hidden");
                p.setAttribute("aria-hidden", "true");
            });
            document.querySelectorAll("[data-cmp-hook-accordion='button']").forEach(b => {
                b.setAttribute("aria-expanded", "false");
            });

            // Abre el panel si estaba cerrado
            if (!isExpanded) {
                panel.classList.remove("cmp-accordion__panel--hidden");
                panel.setAttribute("aria-hidden", "false");
                this.setAttribute("aria-expanded", "true");
            }
        });
    });
});