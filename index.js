









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
         var generatedCartContentResult = ""
  
  
  
             const addToCart = () => {
                 
                 
              
               if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }
              
              if (myToDoTitleInputField.value==="") { 
                  myPrompt.textContent = "❌...Please, add a Title"
                   } else {
                       generatedCartContentResult = ""
                       setTaskNumber = 1
                       
              eachTitle = myToDoTitleInputField.value;
              myToDoTitleInputField.value = "" 
              
              
               if (myTaskDescriptionInputField.value ==="") { 
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
        
  generateCartContents = (data)=> {
                    
                generatedCartContentResult += `
                <div class="each-task">
                <p>Title: ${data.title}</p>
                <p>Description: ${data.Description}</p>
                <P>Time: ${data.AlertTime} Date: ${data.AlertDate}</P>
                <div class="cart-buttons">
                    <button class="cart-buttons-number"> ${setTaskNumber} </button>
                    <button class="cart-buttons-edit" value = ${setTaskNumber} > edit</button>
                    <button class="cart-buttons-delete" value = ${setTaskNumber} onclick="deleteTask()"> delete</button>
                    <button class="cart-buttons-status">Pending</button>
                </div>
                </div>
                `
                setTaskNumber += 1
                // if (setTaskNumber === motherCartArray.length) {
                //     setTaskNumber = 1
                // }
                console.log(motherCartArray)
  }
  
  
  

  
//  HANDLING DELETING       
  
//   for (let i = 0; i < motherCartArray.length ; i++) {
//         document.querySelectorAll(".all-score-btns")[i].addEventListener("click", function() {
//          if( this.className.includes("away")) { 
//               awayScore.textContent = Number(awayScore.textContent) + Number(this.textContent)
//          } else{ homeScore.textContent = Number(homeScore.textContent) + Number(this.textContent)
//               }
//          });

// localStorage.setItem('name', 'John Doe');
// const name = localStorage.getItem('name')
// localStorage.removeItem('name');
  
  localStorage.setItem('cartContent', generatedCartContentResult )
  localStorage.removeItem('cartContent')
  
  function deleteTask(data) {
      
      if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }
      
     const allDeleteBtns = document.querySelectorAll('.cart-buttons-delete');

for (let desiredDeleteBtn of allDeleteBtns) {
  desiredDeleteBtn.addEventListener('click', () => {
    // Remove the item from the cart
    // desiredDeleteBtn.parentElement.removeChild(desiredDeleteBtn);
    
    let itemToDeleteIndex = desiredDeleteBtn.value -1
    
    
    generatedCartContentResult = ""
                       setTaskNumber = 1
    
    motherCartArray.splice(itemToDeleteIndex, 1)
    
    
      motherCartArray.forEach(generateCartContents)
                    console.log(generatedCartContentResult)
                    myCartContent.innerHTML = generatedCartContentResult
                    
                    myPrompt.textContent = "✅ Successfully deleted a task from cart";
    
    
    
    myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 3000);
              isSetTimerActive = true
    
    console.log (desiredDeleteBtn.value)
    console.log(motherCartArray)
    
  });
}
     
  }
  