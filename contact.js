function submit(){

    var name = document.forms["contactForm"]["name"].value;

    var email = document.forms["contactForm"]["email"].value;

    var phone = document.forms["contactForm"]["phone"].value;

    alert("Name is " + name + " Email is " + email + " phone is " + phone);
}