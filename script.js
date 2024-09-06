const btn = document.getElementById("generate");
const check = document.getElementById("checks");
const text = document.getElementById("password");
text.style.display = "none";


function generate(display){
    let atleast_1 = false;
    const lwr = document.getElementById("include-lowercase");
    const upr = document.getElementById("include-uppercase");
    const num = document.getElementById("include-numbers");
    const sym = document.getElementById("include-symbols");

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "012345678901234567891234";
    let symbols = "!@#$%^&*_-!@#$%^&*_-";
    let allowed = "";
    let pass;
    let checked;

    if(lwr.checked == true){
        allowed += lower;
    }
    if(upr.checked == true){
        allowed += upper;
    }
    if(num.checked == true){
        allowed += numbers;
    }
    if(sym.checked == true){
        allowed += symbols;
    }
    else{
        check.textContent = `Select an option`;
    }

    return allowed;
}

btn.onclick = function(){
    let array = generate();
    let pass = "";
    const len = document.getElementById("length").value;


    if(len == ""){
        check.textContent = `Enter a length`;
    }
    else if(len < 8){
        check.textContent = `Length should be greater than 7`;
    }
    else{
        for(let i=0; i<len; i++){
            let index = Math.floor(Math.random()*(array.length));
            pass += array[index];
        }

        if(pass.includes("undefined")!=true){
            check.textContent = "";
            text.style.display = "block";
            text.textContent = `Your password is : ${pass}`;
            console.log(pass);
        }
        else{
            text.style.display = "none";
        }
    }
}
