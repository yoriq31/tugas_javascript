function tampilPil() {
  var banyakPil = document.getElementById("banyakPil").value;
  var button1x;
  var pilihan = "";

  for (var i = 1; i <= banyakPil; i++) {
    pilihan +=
      "<p> Pilihan " +
      i +
      " <input placeholder = 'Masukkan Pilihan' >" +
      "</p>";
  }
  button1x = "<p>" + '<button onclick="createRadio()">OK</button>' + "</p>";
  document.getElementById("pilihan1").innerHTML = pilihan;
  document.getElementById("button1").innerHTML = button1x;
}

function createRadio() {
  var form = document.getElementById("pilihan1");
  var inputs = form.getElementsByTagName("input");
  var submit;
  var radios = "";

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text") {
      radios +=
        '<input type="radio" name="option" value="' +
        inputs[i].value +
        '">' +
        inputs[i].value +
        "<br>";
    }
  }
  submit = '<input type="submit" value="Submit" onclick="doVal()">';
  document.getElementById("submit1").innerHTML = submit;
  list.innerHTML = radios;
}

function doVal() {
    var testName = document.getElementById("Nama");
    var form = document.querySelector("form");
    var result = document.getElementById("result");
    var banyakPil = document.getElementById("banyakPil").value;
    var form1 = document.getElementById("pilihan1");
    var inputs = form1.getElementsByTagName("input");
    var radios = "";

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "text") {
        radios +=
          inputs[i].value + ", ";
      }
    }
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var selectedOption = document.querySelector('input[name="option"]:checked');
  
      if (selectedOption) {
        result.textContent = "Halo, Nama Saya " + testName.value + ", saya mempunyai sejumlah " + banyakPil + " pilihan yaitu " + radios + "dan saya memilih " + selectedOption.value + ".";
      } else {
        result.textContent = "Please select an option.";
      }
    });
  