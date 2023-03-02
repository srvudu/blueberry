
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#send").disabled = true;
    document.querySelector("#name").value = '';
    document.querySelector("#address").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#message").value = '';
    document.querySelector("#phone").value = '';
    document.querySelector("#kilos").value = '';
    document.querySelector('form').onkeyup = checkContactForm;
    
})


function checkContactForm(){
    var name = document.querySelector("#name").value.trim();
    var address = document.querySelector("#address").value.trim();
    var email = document.querySelector("#email").value.trim();
    var message = document.querySelector("#message").value.trim();
    var phone = document.querySelector("#phone").value.trim();
    var kilos = document.querySelector("#kilos").value.trim();
    let button = document.querySelector("#send");

    if(name.length === 0 || address.length === 0
    || email.length === 0 || message.length === 0 || phone.length === 0
      || kilos.length === 0){
        document.getElementById("first_name_alert").style.visibility = "visible";
        button.disabled = true;        
    }
    else {
        document.getElementById("first_name_alert").style.visibility = "hidden";
        button.disabled = false;
    }
}
