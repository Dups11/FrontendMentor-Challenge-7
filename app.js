document.getElementById("input").addEventListener("change", foo);

// console.log(parseInt(tipValue.value) * 2 )

function foo() {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    const form = document.forms[0];
    let tipValue = form.elements["tip"];
    let total = (bill * parseInt(tipValue.value)) / 100;
    if (people > 0 && bill > 0) {
        document.getElementById("total").innerHTML = "$" + total;
        let amount = (total / people).toFixed(2);
        document.getElementById("amount").innerHTML = "$" + amount;
    }

}

document.getElementById('custom').addEventListener('click', customTip)

function customTip() {
    let customValue = document.getElementById('custom').value
    document.getElementById('custom').innerHTML = "0"
}

document.getElementById("reset").addEventListener("click", reset);


function reset() {
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("amount").innerHTML = "$0.00";
}
