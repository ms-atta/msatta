function Converter() {
    // alert("I can reach here")
    var ngn = document.getElementById("inone");
    var usd = document.getElementById("intwo");
    var jpy = document.getElementById("inthree");
    var gbp = document.getElementById("infour");
    var sar= document.getElementById("infive");
    var cad = document.getElementById("insix");
    var cur = document.getElementById("option").value;
    let a = Number(ngn.value);
    let b = Number(usd.value);
    let c = Number(jpy.value);
    let d = Number(gbp.value);
    let e = Number(sar.value);
    let f = Number(cad.value);
    // if ((cur == "Naira to Dollar") && (ngn.value != null)) {
    //     dollar.value = a / 1450
    // }

    // else if ((cur == "Dollar to Naira") && (dollar.value != null)) {
    //     console.log("I can reach heres");
    //     ngn.value = b * 1450
    // }

    switch (cur) {
        case "NGN to USD":
            usd.value = a / 1450;
            break;
        case "USD to NGN":
            ngn.value = b * 1450;
            break;

        case "NGN to JPY":
            jpy.value = a / 1400;
            break;
        case "JPY to NGN":
            ngn.value = c * 1400;
            break;

        case "NGN to GBP":
            gbp.value = a / 5450;
            break;
        case "GBP to NGN":
            ngn.value = d * 5450;
            break;

        case "NGN to SAR":
            sar.value = a / 1990;
            break;
        case "SAR to NGN":
            ngn.value = e * 1990;
            break;

        case "NGN to CAD":
            cad.value = a / 1100;
            break;
        case "CAD to NGN":
            ngn.value = f * 1100;
            break;
        default:
            break;

    }
}