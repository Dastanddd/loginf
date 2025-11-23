const modal = document.getElementById("coolModal");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close-modal");


const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("show");
        overlay.classList.add("show");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.classList.remove("show");
});


window.addEventListener("DOMContentLoaded", () => {
        // Левый блок
        const leftElems = document.querySelectorAll(
            ".left h1, .left .subtitle, .left .features, .left .copyright"
        );

        leftElems.forEach((el, i) => {
            el.classList.add("text-appear");
            setTimeout(() => {
                el.classList.add("show");
            }, 300 * i);
        });

        // Правый блок
        const rightElems = document.querySelectorAll(
            ".right h2, .right .small, .right form, .right .btn-login, .right .or, .right .social"
        );

        rightElems.forEach((el, i) => {
            el.classList.add("text-appear");
            setTimeout(() => {
                el.classList.add("show");
            }, 300 * i + 800); // появление с задержкой после левой части
        });
    });