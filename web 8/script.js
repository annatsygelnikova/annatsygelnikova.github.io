$(() => {
    const button = document.querySelector("button");
    const form = document.querySelector("#myForm");
    const popup = document.querySelector(".popup");

    $("#but1").on("click", (e) => {
        form.classList.add("open");
        popup.classList.add("popup_open");
    });

    $("#but").on("click", (e) => {
        e.preventDefault();
        if ($("#fio").val() && $("#e_mail").val() && $("#telephone").val() && $("#org").val() && $("#message").val()) {
            const formData = new FormData();
            formData.append("ФИО: ", String($("#fio").val()));
            formData.append("Номер телефона: ", String($("#telephone").val()));
            formData.append("Организация: ", String($("#org").val()));
            formData.append("Сообщение: ", String($("#message").val()));
            const jsonString = JSON.stringify(Object.fromEntries(formData));
            console.log("Текст");

            $.ajax({
                url: 'https://api.slapform.com/ByVllKCrbR',
                method: 'POST',
                data: jsonString,
                dataType: "json",
                error: (e) => {
                    alert("ERROR. Try again!");
                },

                success: () => {
                    form.classList.remove("open");
                    popup.classList.remove("popup_open");
                }
            });
            alert("Sucessfull!");
        } else {
            alert("Please fill in all the form fields.");
        }
    });
});
