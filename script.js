const accordions = document.querySelectorAll(".accordion");
const closeButtons = document.querySelectorAll(".close-btn");

accordions.forEach((button) => {
    button.addEventListener("click", () => {
        const panel = button.nextElementSibling;

        // Close all other panels
        document.querySelectorAll(".panel").forEach((p) => {
            if (p !== panel) {
                p.style.maxHeight = null;
            }
        });

        // Toggle current panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const panel = button.parentElement;
        panel.style.maxHeight = null;
    });
});
