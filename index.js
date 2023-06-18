



// Thank you Jesus

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
     

  // I am declaring all the elements I need to make the app work
        let motherCartArray = [ ]
        let eachTitle = ""
        let eachDescription = ""
        let eachTime  = ""
        let eachDate = "" 
        let setTaskNumber = 1
        let myPromptDisplayMessage = ""
        let isSetTimerActive = false
        var generatedCartContentResult = ""
        let edit = false
        let  editTaskIndex = ""
        let cartDisplay = false
  
  
  
  
  //this code will load your cart content from local storage when you refresh page or browser
  
   let cartContentKey = 'cartContent'
    let motherCartArrayContentKey = "motherCartArrayContent"
    
    if (localStorage.getItem(cartContentKey) !== null) {
     // The element is in local storage.
         myCartContent.innerHTML = localStorage.getItem(cartContentKey) 
         
         let getMotherCartArray = JSON.parse(localStorage.getItem(motherCartArrayContentKey))  //without the JSON.parse you will get object object, useless for what you want.
          motherCartArray =  getMotherCartArray
        } 
  
  
             const addToCart = () => {
                 
               if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) } // to ensure no two set timer for my display prompt control runs concurrently
              
              if (myToDoTitleInputField.value==="") { 
                  myPrompt.textContent = "❌...Please, add a Title" // in my view, a ToDo list must at least have a title if its really a toDo list.
                   } else {
                        generatedCartContentResult = ""
                       setTaskNumber = 1
                        eachTitle = myToDoTitleInputField.value; // I am saving the title imputed by user
                        myToDoTitleInputField.value = ""   //when Title is saved, then this clears the input field for another entry
                        
              
                        if (myTaskDescriptionInputField.value ==="") { 
                            eachDescription = "Not provided"  // if user ignores description i want it recorded that he/she did not provide it so "Not Provide"
                            } else { eachDescription = myTaskDescriptionInputField.value //if description is provide, save it
                            myTaskDescriptionInputField.value = "" // since its now saved, I clear the input field for another entry
                            }
                                        
                        if (myTimeInputField.value==="") {eachTime = "Not provided"
                            } else {eachTime = myTimeInputField.value
                            myTimeInputField.value = "" }
                            
                        if (myDateInputField.value==="") {eachDate = "Not provided"
                            } else {eachDate = myDateInputField.value
                            myDateInputField.value = "" }
                            
                            // at this point I am saving all data acquired (title, description, Date and time  as one single object by calling the function object maker and pushing the generated object into a universal array i called motherCartArray)
                            
                  objectMarker()  
                  localStorage.setItem( motherCartArrayContentKey, JSON.stringify(motherCartArray) )//I am saving the completed data to local storage again remember that its an array containing objects so JSON.STRIGIFY is very vital to save to local storage
                    motherCartArray.forEach(generateCartContents) // I am now generating the content the user will see in their cart
            
                    myCartContent.innerHTML = generatedCartContentResult  // this will display the cart content generated
                    
                 localStorage.setItem( cartContentKey, generatedCartContentResult ) // I am saving the cart content result, notice I didnt use JSON. Actually this second saving can be avoided and the code adjusted to play from the motherCartArray, but its simpler to me this way and more readable I preesume and also sort of double assurance.
                 
                if(edit) {  myPrompt.textContent = "...EDIT SUCCESSFUL✅ "
                  edit = false
                  editTaskIndex = "" // I had earlier set edit to false, but once you start editing it becomes True after which you would see Edit successful to assure some confidence to the user.
                 }
                 else { myPrompt.textContent = "✅ Successfully Added to cart" } // if its not an edit, then it must be a direct addition so this message is to be logged and the user should be satisfied.
                 }
              
              
              myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 3000); // this guy controls the prompt, so after 3secs anything on the prompt should wipe off.
              isSetTimerActive = true   //this is to control the timing of the prompt
              };
              
                  
                  // this function makes the object that stores every dataSet and pushes it to the motherCartArray
                  
        const  objectMarker  = ()=> {
          let task = {
                    title: eachTitle,
                    Description: eachDescription,
                    AlertTime: eachTime,
                    AlertDate: eachDate,
                    Status: ""  
                     }
                   if(edit){             
                        //if you are editing, this code will take out that particular item and replace it with the new edit, so the position does not change. One could also use the replace() method or map method.
                    motherCartArray.splice(editTaskIndex, 1, task)                   
                   } else{motherCartArray.push(task)}  
                    // else just push the grouped data set in form of object.
          
                  }  
                  
                  
              //this function is what it is, it helps to wipe the screen to follow D.R.Y JS rule
          const wipeScreen = (data) => {
              data.textContent = ""
              data.value = ""
              isSetTimerActive = false
              }
  
  
  
  
  // This code generates my cart inner html to display your task in the cart, it generates content for each data passed by taking the augument data. One at a time. It also assigns class and value to each data, so we can identify each individual data. study it more succintly.
        
  generateCartContents = (data)=> {

              
                    
                generatedCartContentResult += `
                <div class="each-task">
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>Description:</strong> ${data.Description}</p>
                <P><strong>Time:</strong> ${data.AlertTime}  <strong>Date:</strong> ${data.AlertDate}</P>
                <div class="cart-buttons">
                    <button class="cart-buttons-number"> ${setTaskNumber} </button>
                    <label for="status${setTaskNumber}">
                    <input type ="checkbox" value="${setTaskNumber}" id="status${setTaskNumber}" name="status" ${data.Status} onclick="taskStatusUpdate(${setTaskNumber})"  )> status (check! if done.)
                </label>
                    <button class="cart-buttons-edit" value = ${setTaskNumber} onclick="editTask(${setTaskNumber})"> edit</button>
                    <button class="cart-buttons-delete" value = ${setTaskNumber} onclick="deleteTask(${setTaskNumber})"> delete</button>
                </div>
                </div>
                `
                setTaskNumber += 1
                    }

                  
         function taskStatusUpdate(particularObjectIndex) {
                let index = particularObjectIndex - 1
                
                if (motherCartArray[index].Status === "") {
                console.log(motherCartArray[index].Status)
                motherCartArray[index].Status = "checked"
                console.log(motherCartArray[index].Status)
                } else{
                motherCartArray[index].Status = ""
                console.log(motherCartArray[index].Status)
               }
               
   console.log(motherCartArray[index])
    localStorage.setItem( motherCartArrayContentKey, JSON.stringify(motherCartArray) )

}
      
  
  myAddToCartBtn.addEventListener("click", addToCart)  //event listener for add to cart button
  

//  HANDLING EVERYTHING ABOUT DELETING       

  function deleteTask(data) {

               if(isSetTimerActive) {clearTimeout(myPromptDisplayMessage) }
               if(isSetTimerActive) { clearTimeout(myPromptDisplayMessage) }
               let itemToDeleteIndex = data -1
    
                generatedCartContentResult = ""
                            setTaskNumber = 1
                motherCartArray.splice(itemToDeleteIndex, 1)
            
                localStorage.setItem( motherCartArrayContentKey, JSON.stringify(motherCartArray) )
                motherCartArray.forEach(generateCartContents)
                   
                myCartContent.innerHTML = generatedCartContentResult

                localStorage.setItem( cartContentKey, generatedCartContentResult )
                    
                myPrompt.textContent = "✅ Successfully deleted a task from cart";
    
    myPromptDisplayMessage = setTimeout(wipeScreen.bind(null, myPrompt), 3000);
              isSetTimerActive = true
         }






  //  HANDLING ALL ABOUT EDITING i.e Edit button



  function editTask(data) {

        if(isSetTimerActive) {
                      clearTimeout(myPromptDisplayMessage) }

        const allEditBtns = document.querySelectorAll('.cart-buttons-edit');

        let itemToEditIndex = data -1
        myToDoTitleInputField.value = motherCartArray[itemToEditIndex].title
        
        if (motherCartArray[itemToEditIndex].Description === "Not provided" ){
            myTaskDescriptionInputField.value = ""
        }else{ myTaskDescriptionInputField.value = motherCartArray[itemToEditIndex].Description }

        if (motherCartArray[itemToEditIndex].AlertTime === "Not provided" ){
            myTimeInputField.value = ""
        }else{ myTimeInputField.value = motherCartArray[itemToEditIndex].AlertTime }

        if (motherCartArray[itemToEditIndex].AlertDate === "Not provided" ){
            myDateInputField.value = ""
        }else{ myDateInputField.value = motherCartArray[itemToEditIndex].AlertDate}
 
        edit = true
        editTaskIndex = itemToEditIndex     
         }

//HANDLING THE VIEW CART BTN


 const viewOrCloseCart = () => {
      
      if (cartDisplay){  
      myCartContent.style.display = "none"
      cartDisplay = false
      }else { myCartContent.style.display = "flex"
      cartDisplay = true}
}

 myViewCartBtn.addEventListener("click", viewOrCloseCart) 

 