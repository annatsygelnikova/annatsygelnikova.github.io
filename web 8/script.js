const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
const formData = new FormData();
    formData.append(formData.append("Сообщение: ", $("message").val());
    const jsonString = JSON.stringify(Object.fromEntries(formData));

button.addEventListener("click", () => {
    form.classList.add("open");
    popup.classList.add("popup_open");
     $.ajax({
        url: 'https://api.slapform.com/AoT1FEm7u',
        method: 'POST',
        data: jsonString,
        dataType: "json",
        error: (e) => {
            console.log("Ошибка");
        }
    });
});
