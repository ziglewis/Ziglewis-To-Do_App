


// localStorage.clear()


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

  
  
  
    let motherCartArray = [ ]
        let eachTitle = ""
        let eachDescription = ""
        let eachTime  = ""
        let eachDate = "" 
        let setTaskNumber = 1
        let myPromptDisplayMessage = ""
        let isSetTimerActive = false
         var generatedCartContentResult = ""
  
  
  
  
  
   let cartContentKey = 'cartContent'
    let motherCartArrayContentKey = "motherCartArrayContent"
    
    if (localStorage.getItem(cartContentKey) !== null) {
  // The element is in local storage.
         myCartContent.innerHTML = localStorage.getItem(cartContentKey)
         
         let getMotherCartArray = JSON.parse(localStorage.getItem(motherCartArrayContentKey))
          motherCartArray =  getMotherCartArray
      console.log(motherCartArray)
        
        } 
  
  
             const addToCart = () => {
                 
                 
              
               if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }
              
              if (myToDoTitleInputField.value==="") { 
                  myPrompt.textContent = "❌...Please, add a Title"
                   } else {
                       
                                    
                    // if (localStorage.getItem(cartContentKey) !== null) {
                    //     // The element is in local storage.
                    //     localStorage.removeItem(cartContentKey)       
                    //     } 

                    
                    
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
                  localStorage.setItem( motherCartArrayContentKey, JSON.stringify(motherCartArray) )
                    motherCartArray.forEach(generateCartContents)
                    console.log(generatedCartContentResult)
                    myCartContent.innerHTML = generatedCartContentResult
                    
                 localStorage.setItem( cartContentKey, generatedCartContentResult )
                 
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
                    <button class="cart-buttons-edit" value = ${setTaskNumber} onclick="editTask()"> edit</button>
                    <button class="cart-buttons-delete" value = ${setTaskNumber} ondblclick="deleteTask()"> delete</button>
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
  
  
  function deleteTask(data) {
      
      if(isSetTimerActive) { clearTimeout(myPromptDisplayMessage) }
                      
         
      
     const allDeleteBtns = document.querySelectorAll('.cart-buttons-delete');

for (let desiredDeleteBtn of allDeleteBtns) {
    // Remove the item from the cart
    // desiredDeleteBtn.parentElement.removeChild(desiredDeleteBtn);
    
    
    let itemToDeleteIndex = desiredDeleteBtn.value -1
    
    
    generatedCartContentResult = ""
                       setTaskNumber = 1
    
    motherCartArray.splice(itemToDeleteIndex, 1)
    
      localStorage.setItem( motherCartArrayContentKey, JSON.stringify(motherCartArray) )
      motherCartArray.forEach(generateCartContents)
                    console.log(generatedCartContentResult)
                    myCartContent.innerHTML = generatedCartContentResult
                    
                    localStorage.setItem( cartContentKey, generatedCartContentResult )
                    
                    myPrompt.textContent = "✅ Successfully deleted a task from cart";
    
    
    
    myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 3000);
              isSetTimerActive = true
    
    console.log (desiredDeleteBtn.value)
    console.log(motherCartArray)
    
                  }
     
  }
  
  
  //  HANDLING EDITING
  
  
  
  function editTask(data) {
      
      if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }
                      
         
      
     const allEditBtns = document.querySelectorAll('.cart-buttons-edit');

for (let desiredEditBtn of allEditBtns) {
  desiredEditBtn.addEventListener('click', () => {
    // Remove the item from the cart
    // desiredDeleteBtn.parentElement.removeChild(desiredDeleteBtn);
    
    
    let itemToEditIndex = desiredEditBtn.value -1
    
    // stoped here ooooo
    
    myToDoTitleInputField.value = motherCartArray[itemToEditIndex].title
    
    if (motherCartArray[itemToEditIndex].Description === "Not provided" ){
        myTaskDescriptionInputField = ""
    }else{ myTaskDescriptionInputField = motherCartArray[itemToEditIndex].Description }
    
     if (motherCartArray[itemToEditIndex].AlertTime === "Not provided" ){
        myTimeInputField = ""
    }else{ myTimeInputField = motherCartArray[itemToEditIndex].AlertTime }
    
     if (motherCartArray[itemToEditIndex].AlertDate === "Not provided" ){
        myDateInputField = ""
    }else{ myDateInputField = motherCartArray[itemToEditIndex].AlertDate}
    
   
    
   
    
    
    // generatedCartContentResult = ""
    //                    setTaskNumber = 1
    
    // motherCartArray.splice(itemToDeleteIndex, 1)
    
    //   localStorage.setItem( motherCartArrayContentKey, JSON.stringify(motherCartArray) )
    //   motherCartArray.forEach(generateCartContents)
    //                 console.log(generatedCartContentResult)
    //                 myCartContent.innerHTML = generatedCartContentResult
                    
    //                 localStorage.setItem( cartContentKey, generatedCartContentResult )
                    
    //                 myPrompt.textContent = "✅ Successfully deleted a task from cart";
    
    
    
    // myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 3000);
    //           isSetTimerActive = true
    
    // console.log (desiredDeleteBtn.value)
    // console.log(motherCartArray)
    
                  });}
     
  }
  
    