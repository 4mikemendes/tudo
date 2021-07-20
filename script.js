const submitBtn = document.getElementById("submit-btn")
const clearBtn = document.getElementById("clear-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")


submitBtn.addEventListener("click", function(){
ulEl.textContent += inputEl.value
  })

clearBtn.addEventListener("click", function(){
  console.log("cliked")
})

