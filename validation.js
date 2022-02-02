
let select = document.getElementById("Select").value;
let username = document.getElementById("Username").value;
let Email = document.myform.Email.value;
let password = document.myform.Password.value;
let textarea = document.myform.Textarea.value;
let checkbox = document.getElementsByName("course");
let Genderm = document.myform.Gender.value;
let choosefile = document.getElementById("chosefile");
let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var namepat = /^[^\s]+( [^\s]+)+$/;
const passisContainsLowercase = /^(?=.*[a-z]).*$/;
//const isContainsNumber = /^(?=.*[0-9]).*$/;
const isContainsNumber = /[0-9]/;
const isContainsSymbol = /[#?!@$%^&*-]/
const isValidLength = /^.{6,16}$/;
let passupercase = /[A-Z]/;
let paswordspace = /\s/
let nameno = /[0-9]/
function formValidation() {
    //debugger;
    let select = document.getElementById("Select").value;
    let username = document.getElementById("Username").value;
    let Email = document.myform.Email.value;
    let password = document.myform.Password.value;
    let textarea = document.myform.Textarea.value;
    let checkbox = document.getElementsByName("course");
    let Genderm = document.myform.Gender.value;
    let choosefile = document.getElementById("chosefile");
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var namepat = /^[^\s]+( [^\s]+)+$/;
    const passisContainsLowercase = /^(?=.*[a-z]).*$/;
    //const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsNumber = /[0-9]/;
    const isContainsSymbol = /[#?!@$%^&*-]/
    const isValidLength = /^.{6,16}$/;
    let passupercase = /[A-Z]/;
    let paswordspace = /\s/
    let nameno = /[0-9]/
    //const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!namepat.test(username) || username == "") {
        document.getElementById("Username").style.borderColor = " red";
        alert("Please enter Valid Name")
        return false;
    }
    else if (nameno.test(username)) {
        document.getElementById("Username").style.borderColor = "red";
        alert("Name can not contain any number")
        return false;
    }
    else if (password == "") {
        document.getElementById("Password").style.borderColor = "red";
        alert("Password can Never be Blank")
        return false;
    }
    else if (paswordspace.test(password)) {
        document.getElementById("Password").style.borderColor = "red";
        alert("Space not allowed in password")
        return false;
    }
    else if (!passupercase.test(password)) {
        document.getElementById("Password").style.borderColor = "red";
        alert("Password must have at least one uppercase Character.")
        return false;
    }
    else if (!passisContainsLowercase.test(password)) {
        document.getElementById("Password").style.borderColor = "red";
        alert("Password must have at least one Lowercase Character.")
        return false;
    }
    else if (!isContainsNumber.test(password)) {
        document.getElementById("Password").style.borderColor = "red";
        alert("Password must contain at least one Digit.")
        return false;
    }
    else if (!isContainsSymbol.test(password)) {
        document.getElementById("Password").style.borderColor = "red";
        alert("Password must contain at least one Special Symbol.")
        return false;
    }
    else if (!isValidLength.test(password)) {
        document.getElementById("Password").style.borderColor = "red";
        alert("Password must be 6-16 Characters Long.")
        return false;
    }
    else if (select == "") {

        document.getElementById("Select").style.borderColor = "red";
        alert("plz Select Any Trade")
        return false;
    }
    else if (!emailpattern.test(Email) || Email == "") {
        document.getElementById("Email").style.borderColor = "red";
        alert("plz enter  correct email")
        return false;
    }
    else if (textarea == "") {
        document.getElementById("Textarea").style.borderColor = "red";
        alert("Text Area can't be blank")
        return false;
    }
    else if (!checkbox[0].checked && !checkbox[1].checked) {
        alert("Select any course")
        return false;
    }
    else if (Genderm == false) {
        alert("Select your Gender")
        return false;
    }
    else {
        alert("data submited")
        document.getElementById("myform").reset();
        return "data submited";
    }
}
function namevali() {
    if (!namepat.test(username) || username == "") {
        document.getElementById("Username").style.borderColor = " red";
        alert("plz enter correct name")
        return false;
    }
    else if (nameno.test(username)) {
        document.getElementById("Username").style.borderColor = "red";
        alert("Name can not contain any number")
        return false;
    }
}
//document.getElementById("Username").addEventListener("mouseout",namevali);
function changecolorname() {
    document.getElementById("Username").style.borderColor = "green";
}

function changecolorpass() {
    document.getElementById("Password").style.borderColor = "green";

}
function changecoloremail() {
    document.getElementById("Select").style.borderColor = "green";
    document.getElementById("Email").style.borderColor = "green";
    document.getElementById("Textarea").style.borderColor = "green";
}
/*function slectDrodown() {
     select = document.getElementById("Select").value;
      if(select=="" || select==null){

        document.getElementById("Select").style.borderColor = "red";
        alert("plz Select Any Trade")
        return false;
    }else{
        return true;
    }*/
