function otpGen() {

    var digit = document.getElementById("text").value;
    let otp = [];

    if (!isNaN(digit) && digit > 0  && digit <= 10) {

        for (var i = 1; i <= digit; i++) {
            var num = Math.floor(Math.random() * 9);
            otp.push(num);
        }

        console.log(otp)
        document.getElementById("otp").innerHTML = otp.join("");
        document.getElementById("otp").style.color = "green";

    } else {

        document.getElementById("otp").innerHTML = "Enter Correct Information";
        document.getElementById("otp").style.color = "red";

    }


}