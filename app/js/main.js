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

    btn.onclick = function (e) {

        e.preventDefault();

        setTimeout(function() {
            btnSent.style.display = "inline";
            return false

        }, 400);

        return false

    };

};
