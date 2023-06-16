










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
   let myCartContent = document.querySelector(".cart")
  
//   console.log(myAddToCartBtn.dataset.value)
//    console.log(myAddToCartBtn.value)
  
  
        let motherCartArray = [ ]
        let eachTitle = ""
        let eachDescription = ""
        let eachTime  = ""
        let eachDate = "" 
        let setTaskNumber = 1
        let myPromptDisplayMessage = ""
        let isSetTimerActive = false
         var generatedCartContentResult = "<p>wonder</p>"
  
  
  
             const addToCart = () => {
              
               if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }
              
              if (myToDoTitleInputField.value==="") { 
                  myPrompt.textContent = "❌...Please, add a Title"
                   } else {
              eachTitle = myToDoTitleInputField.value;
              myToDoTitleInputField.value = "" 
              
               if (myTaskDescriptionInputField.value .value==="") { 
                 eachDescription = "Not provided"
                   } else { eachDescription = myTaskDescriptionInputField.value
                   myTaskDescriptionInputField.value = ""}
                   
            if (myTimeInputField.value==="") {eachTime = "Not provided"
                   } else {eachTime = myTimeInputField.value
                  myTimeInputField.value = "" }
                   
            if (myDateInputField.value==="") {eachDate = "Not provided"
                   } else {eachDate = myDateInputField.value
                   myDateInputField.value = "" }
                
                  objectMarker()
                    motherCartArray.forEach(generateCartContents)
                    console.log(generatedCartContentResult)
                    myCartContent.innerHTML = generatedCartContentResult
                 
              myPrompt.textContent = "✅ Successfully Added to cart";
                 }
  
              console.log(eachTitle);
              console.log(eachDescription )
              console.log(eachTime)
              console.log(eachDate)
            //   console.log(myAddToCartBtn.value)
            console.log(generatedCartContentResult)
               
            
                
              
              
              myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 3000);
              isSetTimerActive = true
              
          };
  
      let  objectMarker  = ()=> {
          let task = {
                    title: eachTitle,
                    Description: eachDescription,
                    AlertTime: eachTime,
                    AlertDate: eachDate  
                     }
                 motherCartArray.push(task)
                 console.log(motherCartArray.length)
                 console.log(motherCartArray[0].title)
                 console.log(task)
          
                  }  
           
          const wipeScreen = (data) => {
              data.textContent = ""
              data.value = ""
              isSetTimerActive = false
          }
  
  
         
          
  
  myAddToCartBtn.addEventListener("click", addToCart)
  
  // generating the cart html to store your task
        
  generateCartContents = ()=> {
                    
                generatedCartContentResult += `
                <div class="each-task">
                <p>Title: ${this.title}</p>
                <p>Description: ${this.Description}</p>
                <P>Time: ${this.AlertTime} (${this.AlertDate})</P>
                <div class="cart-buttons">
                    <div class="cart-buttons-number"> ${setTaskNumber} </div>
                    <div class="cart-buttons-edit" value = ${setTaskNumber} > edit</div>
                    <div class="cart-buttons-delete" value = ${setTaskNumber} > delete</div>
                    <div class="cart-buttons-status">Pending</div>
                </div>
                `
                setTaskNumber += 1
                if (setTaskNumber === motherCartArray.length) {
                    setTaskNumber = 1
                }
                console.log(motherCartArray)
  }
  
  
  
//   motherCartArray.forEach(generateCartContents)
  
//                 myCartContent.innerHTML = generatedCartContentResult
  
  
  