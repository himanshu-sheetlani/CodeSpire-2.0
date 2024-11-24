function ValidateEmail() {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)
  ) {
    return true;
  }

  return false;
}
function validateNumber() {
  var num = myForm.phone.value;
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (num.match(phoneno)) {
    return true;
  }
  return false;
}
function validateName() {
  var name = myForm.name.value;
  if (name.length > 0) {
    return true;
  }
  return false;
}
function validateMsg() {
  var msg = myForm.message.value;
  if (msg.length > 0) {
    return true;
  }
  return false;
}

function validate() {
  if (!validateName()) {
    document.getElementById("name").focus();
    alert("Name cannot be empty!");
  } else if (!ValidateEmail()) {
    document.getElementById("Email").focus();
    alert("Invalid Email Address");
  } else if (!validateNumber()) {
    document.getElementById("ContactNo").focus();
    alert("Invalid Mobile Number");
  } else if (!validateMsg()) {
    document.getElementById("message").focus();
    alert("Message cannot be empty!");
  } else {
    emailjs.init("E1qh7tjqpDqXMsEfk");
    let tempParams = {
      name: document.getElementById("name").value,
      phone: document.getElementById("ContactNo").value,
      email: document.getElementById("Email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_tl22yng", "template_qjr3m7s", tempParams).then(
      function (res) {
        alert("Your form has been submitted successfully!");
      },
      (reason) => {
        alert("Error Occur");
      }
    );
  }
}
