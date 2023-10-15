var cur;

window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementById("myselect");

  cur = 0;

  s.addEventListener("change", function(event) {
    let select = event.target;
    let choice = document.getElementById("select1");
    let check = document.getElementById("checkboxes");
    let radios = document.getElementById("myradios");
    let count = document.getElementById("count");
            
    if (select.value == "1") {
      choice.style.display = "block";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }

    if (select.value == "2") {
      choice.style.display = "none";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }

    if (select.value == "3") {
      choice.style.display = "none";
      check.style.display = "block";
      radios.style.display = "block";
      count.style.display = "block";
    }
    cur = parseInt(select.value);
  });
  
  let chck = document.querySelectorAll(".checkboxes input[type=checkbox]");
  chck.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let chck = event.target;
      console.log(chck.value);
    });
  });
});
    
function validate() {
  var count = document.getElementById("count").value;
  var o = /^\d{1,}$/;
  var valid = o.test(count);

  if (valid) {
    window.output = "Данные введены верно";
  } else {
    window.output = "Данные введены неверно. Повторите попытку ввода!";
  }
  document.getElementById("message").innerHTML = window.output;
  return valid;
}

function calculator() {
  var result = document.getElementById("result");
  var t = cur;
  var res;
  console.log(t);
  
  if(validate()) {
    if(cur == 1) {
      res = calculatealbum();
      result.innerHTML = res;
    }

    if(cur == 2) {
      res = calculatebox();
      result.innerHTML = res;
    }
    if(cur == 3) {
      res = calculateph();
      result.innerHTML = res;
    }
  }
  else {
    window.alert("Не удалось произвести вычисления!");
  }
}

function calculatealbum(){
  var count = document.getElementById("count");
  var delivery = document.getElementsByName("myradio");
  var album = document.getElementById("select1");

  var price = 0;
  var md = 0;
  delivery.forEach(e => {
    if (e.checked) {
      md = e.value;
    }
  });

  price += parseInt(album.options[album.selectedIndex].value);
  console.log(price);
  price = parseInt(count.value) * price;
  console.log(price);
  price += parseInt(md);
  console.log(price);

  return price;
}

function calculatebox(){
  var count = document.getElementById("count");
  var delivery = document.getElementsByName("myradio");

  var md = 0;
  delivery.forEach(e => {
    if (e.checked) {
      md = e.value;
    }
  });
  var price = 0;
  var pr = 4490;

  price += (parseInt(pr) * parseInt(count.value) + parseInt(md));

  return price;
}

function calculateph(){
  var count = document.getElementById("count");
  var delivery = document.getElementsByName("myradio");
  var option = document.getElementsByName("props");

  var md = 0;

  delivery.forEach(e => {
    if (e.checked) {
      md = parseInt(e.value);
    }
  });

  option.forEach(e => {
    if (e.checked) {
      md += parseInt(e.value);
    }
  });

  var price = 0;
  var pr = 3500;

  price += ((pr * parseInt(count.value)) + md);

  return price;
}
