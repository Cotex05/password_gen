function generatePassword() {
    var length = 8,
        charset = "237abc!@mno#$%defghij%defk#$%dlmnoKLMNOPQRpq^opyzAB&*()_+-=/?rstuvwxnoopq^opyzAB&*()_ABCD+-=/?rstuvwxnopyzABCD2345678345678JSTUVWXYZ0123456789",
        symbol = "!@#$%^&*()_+-=/?";
        retVal = "";
        retVal2 = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, m = symbol.length; i < length; ++i) {
        retVal2 += symbol.charAt(Math.floor(Math.random() * m));
    }
    
    const passwd = retVal + retVal2

    return retVal;
}

function pswd(){
    document.querySelector("h2").innerHTML = generatePassword();
}
