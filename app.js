document.getElementById("input").addEventListener("change", foo);


function foo() {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let customValue = document.getElementById("customValue").value;
    const form = document.forms[0];
    let tipValue = form.elements["tip"];
    let total = 0
    let checkbox = document.getElementById('custom')
    let raz = document.getElementById('customValue')
    
    if (checkbox.checked != true) {
        raz.value = 0;
    }

    if (customValue > 0) {
        total = ((bill * customValue) / 100).toFixed(2);
    } else {
        total = (bill * parseInt(tipValue.value) / 100).toFixed(2);
    }
    
    
    if (people == 0) {
        document.getElementById('error').classList.add('errordisplay')
        document.getElementById('people').style.border = '2px solid red'
        
    }
    
    else {

        if (bill > 0 && people >0) {
            document.getElementById('error').classList.remove('errordisplay')
            document.getElementById('people').style.border = "2px solid hsl(173, 46%, 50%)"  
            document.getElementById("total").innerHTML = "$" + total;
            let amount = (total / people).toFixed(2);
            document.getElementById("amount").innerHTML = "$" + amount;
            
        }

    }
    
}



document.getElementById("reset").addEventListener("click", reset);

function reset() {
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("amount").innerHTML = "$0.00";
}

