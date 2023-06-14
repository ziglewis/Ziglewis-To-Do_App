
  // code for live time on screen
setInterval(myTimer, 1000);

function myTimer() {
const digitalTime = document.querySelector(".display")
 const date = new Date();
digitalTime.textContent = date.toLocaleTimeString() + " " + date.toLocaleDateString()

; }




// I am getting all the elements I need to manipulate the DOM

 let myPrompt = document.querySelector(".prompt-display")
 let myToDoTitleInputField = document.querySelector(".To-do-title")
 let myTaskDescriptionInputField = document.querySelector("Task-description")
 let myTimeInputField = document.querySelector(".time-input")
 let myDateInputField = document.querySelector(".date-input")
 let myAddToCartBtn = document.querySelector(".Add-to-cart-btn")
 let myViewCartBtn = document.querySelector(".View-cart-btn")
 let myCartBtnNumber = document.querySelector(".cart-buttons-number")
 let myCartBtnEdit = document.querySelector("cart-buttons-edit")
 let myCartBtnDelete = document.querySelector(".cart-buttons-delete")
 let myCartBtnStatus = document.querySelector(".cart-buttons-status")
 let myEachTask = document.querySelectorAll(".each-task")






