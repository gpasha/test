window.onload = function () {


    //form animation

    var form = document.querySelector(".form");
    var footer = document.querySelector(".footer");

    footer.onwheel = function () {
        form.classList.add("form-active");
    };


    //send info

    var btn = document.querySelector(".form__btn");
    var btnSent = document.querySelector(".form__sending");
    var inputs = document.querySelectorAll(".form__input");

    btn.onclick = function (e) {

        e.preventDefault();
        btnSent.style.display = "inline";
        return false

    };


};