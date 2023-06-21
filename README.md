# Ziglewis-To-Do_App
 This is a to-do app that helps you make an itinerary that works.
 It has a dark and light mode to suit user preference.
 It's very easy to add a task, edit a task, and delete a task.
 Your tasks are always saved and you do not have to worry even if you turn off the browser.
 You can set both time and date for each event.
 You can also mark completed events by checking the status checkbox.
 

 UNDERSTANDING THE CODE IN BRIEF.
 The code makes use of the Mother Cart Array which is the central array of all the codes. It was initialized to an empty array.
 When a task is imputed, and the  "add To Cart" button is clicked, JS collects imputed data, then calls the object Maker function
This object maker function stores all the imputed data as an object with individual keys, then pushes it onto the mother Cart Array.
For the user to see an output another function which is "generateContentResults" is called and it loops through the mother cart array and displays all tasks in it at that moment, as the cart content result the user will see. I employed template literals for writing inner HTML and assigned a value to each data using a variable I declared as "SetTaskNumber"

If you make a delete, that task index is found and then straight in the mother cart array, it is spliced(cut) off and the "generateContentResults" function runs again, displaying only what is left in the array.

While edit is a little bit different from delete, it actually finds that particular task index and then replaces it with the new edited result, thereby the Mother Cart Array neither increases nor reduces. (I used splice with augments meaning that that item is deleted and replaced with a new one, you may use replace() method as well)

You also have a checkbox that you can use to check or mark finished or completed tasks.

LOCAL STORAGE WAS EMPLOYED TO SAVE THE DATA AT ALL POINTS OF A CHANGE. The data was saved as an array, so Json.stringify and Json.paurse were necessary to achieve this.

The rest were DOM manipulation to give the right display as a prompt whenever any action is taken to give the user confidence. I employed the set interval and clear interval to control the timing.
