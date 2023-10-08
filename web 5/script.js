document.addEventListener("DOMContentLoaded", function() {
    var sprice = document.getElementById("sprice");
    sprice.addEventListener("click", calculator);
  });

  function validate() {
    var count = document.getElementById("count").value;
    var o = /^[\d]$/;
    var valid = o.test(count);

    if(valid) output = "Данные введены верно";
    else output = "Данные введены неверно. Повторите попытку ввода!";
    document.getElementById("message").innerHTML = output;
    return valid;
  }

  function calculator() {
    var name = document.getElementById("select");
    var count = document.getElementById("count");
    var result = document.getElementById("result");

    if(validate()){
        var price = 0;
        price += parseInt(name.options[name.selectedIndex].value);
        price = parseInt(count.value) * price;
        result.innerHTML = price;
    }
    else alert("Не удалось произвести вычисления!");
  }
