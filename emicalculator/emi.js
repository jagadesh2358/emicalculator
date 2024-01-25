function amount() {
    document.getElementById("inp1").value = document.getElementById("r1").value
}

function year() {
    document.getElementById("inp2").value = document.getElementById("r2").value
}
function interest() {
    document.getElementById("inp3").value = document.getElementById("r3").value
}
function call() {
    //EMI=P*R*(1+R)^N/[(1+R)^N-1]

    //P=Principle or loan amount

    //R=rate of interest

    //N=Tenure

    let P = Number(document.getElementById("inp1").value);
    console.log(typeof P)

    let N = (document.getElementById("inp2").value) * 12
    console.log(typeof N)

    let R = Number(document.getElementById("inp3").value) / (12 * 100);
    console.log(typeof R)

    let EMI = Math.floor(P * R * Math.pow((1 + R), N) / [Math.pow((1 + R), N) - 1])
    document.getElementById("heading").innerHTML = `Your Monthly EMI will be ₹ ${EMI} per month`
}