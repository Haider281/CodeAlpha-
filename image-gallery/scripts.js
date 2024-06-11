// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector(".modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    var closeBtn = document.querySelector(".close");

    var images = document.querySelectorAll(".gallery-item");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
