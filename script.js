document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
    });
});
