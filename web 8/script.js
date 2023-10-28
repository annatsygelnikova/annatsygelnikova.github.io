const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
const formData = new FormData();
    formData.append("Сообщение: ", "F");
    const jsonString = JSON.stringify(Object.fromEntries(formData));

    $.ajax({
        url: 'https://api.slapform.com/hkhNWFrrb',
        method: 'POST',
        data: jsonString,
        dataType: "json",
        error: (e) => {
            console.log("Ошибка");
        }
    });

button.addEventListener("click", () => {
    form.classList.add("open");
    popup.classList.add("popup_open");
});
