
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#send").disabled = true;
    document.querySelector("#first_name").value = '';
    document.querySelector("#last_name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#message").value = '';
    document.querySelector("#phone").value = '';
    document.querySelector('form').onkeyup = checkContactForm;
    
})


function checkContactForm(){
    var first_name = document.querySelector("#first_name").value.trim();
    var last_name = document.querySelector("#last_name").value.trim();
    var email = document.querySelector("#email").value.trim();
    var message = document.querySelector("#message").value.trim();
    var phone = document.querySelector("#phone").value.trim();
    let button = document.querySelector("#send");

    if(first_name.length === 0 || last_name.length === 0
    || email.length === 0 || message.length === 0 || phone.length === 0){
        document.getElementById("first_name_alert").style.visibility = "visible";
        button.disabled = true;        
    }
    else {
        document.getElementById("first_name_alert").style.visibility = "hidden";
        button.disabled = false;
    }
}
