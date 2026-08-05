function showSection(sectionId) {

    // Hide all sections
    const sections = document.querySelectorAll(".page");
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    // Show selected section
    document.getElementById(sectionId).classList.remove("hidden");

    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
