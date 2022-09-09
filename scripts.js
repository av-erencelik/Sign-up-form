let check = function() {
    if (document.getElementById("password").value == document.getElementById("confirm").value) {
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "passwords matching"
        document.getElementById("password").style.borderColor = "green"
        document.getElementById("confirm").style.borderColor = "green"
    }else {
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "*passwords do not match"
        document.getElementById("password").style.borderColor = "red"
        document.getElementById("confirm").style.borderColor = "red"
    }
}

function addSpaces(initial){
    initial.replace("/([0-9]{3})/","\1 ");
    initial.replace("/[0-9]{3} ([0-9]{3})/","\1 ");
    return initial;
}