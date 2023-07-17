// acess to the input
let inp = document.querySelector("#inp")
let btn = document.querySelector("#btn")
let validP = document.querySelector("#valid-p")
let conatainer2 = document.querySelector(".conatainer2")
let conatainer = document.querySelector(".conatainer")
let SuccessP = document.querySelector("#Success-P")
let btn2 = document.querySelector("#btn2")
/*check the elements accessed
console.log(inp)
console.log(btn)*/

if(inp !== "") {
    btn.addEventListener("click" , function() {
        let rejexemail = /[a-z](\d+)?@\w+(.\w+)/ig
        let getValid =  rejexemail.test(inp.value);
        if(getValid === false) {
            inp.style.backgroundColor = "rgba(255, 1, 1, 0.315)";
            inp.style.border = "1px solid rgba(255, 1, 1, 0.315)";
            inp.style.color = " rgba(255, 1, 1, 1)";
            validP.style.display = "block";
        } else if (getValid === true) {
            conatainer.style.display = "none";
            conatainer2.style.display = "flex";
            SuccessP.innerHTML = `A confirmation email has been sent to <br> <span>${inp.value}</span>  
            Please open it and click <br> the button inside to confirm your subscription.`;
            if(scrollY >= 300) {
                window.onscroll = function() {
                scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            }
            }
            
        }
    })
}

btn2.addEventListener("click" , function() {
    conatainer2.style.display = "none";
    conatainer.style.display = "flex";
    inp.value = "";
})