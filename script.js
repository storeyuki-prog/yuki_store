/************************************
 YUKI WEBSITE - MAIN SCRIPT
************************************/

document.addEventListener("DOMContentLoaded", function () {

    console.log("YUKI JS Loaded Successfully");

    /* ==============================
       CATEGORY BUTTON ACTIVE SYSTEM
    =============================== */

    const categoryButtons = document.querySelectorAll(".category-btn");

    if (categoryButtons.length > 0) {

        categoryButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                // Remove active from all
                categoryButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                // Add active to clicked
                this.classList.add("active");

            });

        });

    }

});
