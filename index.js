



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
   let myTaskDescriptionInputField = document.querySelector(".Task-description")
   let myTimeInputField = document.querySelector(".time-input")
   let myDateInputField = document.querySelector(".date-input")
   let myAddToCartBtn = document.querySelector(".Add-to-cart-btn")
   let myViewCartBtn = document.querySelector(".View-cart-btn")
   let myCartBtnNumber = document.querySelector(".cart-buttons-number")
   let myCartBtnEdit = document.querySelector("cart-buttons-edit")
   let myCartBtnDelete = document.querySelector(".cart-buttons-delete")
   let myCartBtnStatus = document.querySelector(".cart-buttons-status")
   let myEachTask = document.querySelectorAll(".each-task")
  
  
  
  
           let myPromptDisplayMessage = ""
           let isSetTimerActive = false
           
          const wipeScreen = (data) => {
              data.textContent = ""
              data.value = ""
              isSetTimerActive = false
          }
  
          const addToCart = () => {
              
              let eachTitle = ""
              let eachDescription = ""
               let eachTime  = ""
                let eachDate = ""
              
              
               if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }
              
              if (myToDoTitleInputField.value==="") { 
                  myPrompt.textContent = "Please, add a Title"
                   } else {
              eachTitle = myToDoTitleInputField.value;
              myToDoTitleInputField.value = "" };
              
               if (myTaskDescriptionInputField.value .value==="") { 
                 eachDescription = "Not provided"
                   } else {
                       eachDescription = myTaskDescriptionInputField.value 
                   }
                   
            if (myTimeInputField.value==="") { 
                  eachTime = "Not provided"
                   } else {
                       eachTime = myTimeInputField.value
                   }
                   
            
            if (myDateInputField.value==="") { 
                 eachDate = "Not provided"
                   } else {
                       eachDate = myDateInputField.value
                   }
              
             
              myPrompt.textContent = "Successfully Added to cart";
              
  
              console.log(eachTitle);
              console.log(eachDescription )
              console.log(eachTime)
              console.log(eachDate)
              
               
  
              
              myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 5000);
              isSetTimerActive = true
          };
          
  
  myAddToCartBtn.addEventListener("click", addToCart)