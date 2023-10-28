const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");

button.addEventListener("click", () => {
    form.classList.add("open");
    popup.classList.add("popup_open");
});

function validateForm() {
    const inputs = document.querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
        if (input.value === "") {
            isValid = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    if (!isValid) {
        alert("Пожалуйста, заполните все поля формы!");
    }

    return isValid;
}