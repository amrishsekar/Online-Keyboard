const input = document.querySelector("input");
const btns  = document.querySelectorAll("button");
const caps = document.querySelector(".capsbtn");
// console.log(btns);

window.addEventListener("click",(e)=>{
    e.preventDefault()
})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",(e)=>{  
        if (e.target.innerHTML !=="Backspace" && e.target.innerHTML !=="Del" && e.target.innerHTML !=="" && e.target.innerHTML !=="Tab" && e.target.innerHTML !=="Capslock" && e.target.innerHTML !=="Enter" &&e.target.innerHTML !=="shift") {
            input.value += e.target.innerHTML
        }
        else if (e.target.innerHTML === "Backspace") {
            input.value = input.value.slice(0, input.value.length - 1);
        }
        else if (e.target.innerHTML === "") {
            input.value += ` `;
        }
        else if (e.target.innerHTML === "Tab") {
            input.value += `    `;
        }
        else if (e.target.innerHTML === "Del") {
            input.value = input.value.slice(-1, input.value.length - 1);
        } 
    })
}

caps.addEventListener('click',()=>{
    caps.classList.toggle("cap")
    for(let j=0;j<btns.length;j++){
        if(caps.classList.contains("cap")){
            if (btns[j].innerHTML !=="Backspace" && btns[j].innerHTML !=="Del" && btns[j].innerHTML !=="" && btns[j].innerHTML !=="Tab" && btns[j].innerHTML !=="Capslock" && btns[j].innerHTML !=="Enter" &&btns[j].innerHTML !=="shift") {
                btns[j].textContent = btns[j].textContent.toUpperCase()
            }
        }
        else{
            if (btns[j].innerHTML !=="Backspace" && btns[j].innerHTML !=="Del" && btns[j].innerHTML !=="" && btns[j].innerHTML !=="Tab" && btns[j].innerHTML !=="Capslock" && btns[j].innerHTML !=="Enter" &&btns[j].innerHTML !=="shift") {
                btns[j].innerText = btns[j].innerText.toLowerCase()
            }
        }
    }

})