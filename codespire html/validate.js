function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  {
    return (true)
  }
  
    return (false)
} 
function validateNumber(){
    var num = myForm.contact.value;
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(num.match(phoneno))
    {
        return true;
    }
    return false;

}
function validateWNumber(){
    var num = myForm.whatsapp.value;
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(num.match(phoneno))
    {
        return true;
    }
    return false;

}
function validate(){
    if(!(ValidateEmail())){
        document.getElementById('Email').focus();
        document.getElementById('error-box').innerHTML = "Invalid Email Address <br>";
        return false;
    }
    if(!(validateNumber())){
        document.getElementById('ContactNo').focus();
        document.getElementById('error-box').innerHTML = "Invalid Contact Number <br>";
        return false;
    }
    if(!(validateWNumber())){
        document.getElementById('WhatsappNo').focus();
        document.getElementById('error-box').innerHTML = "Invalid Whatsapp Number <br>";
        return false;
    }
    return true;

}
