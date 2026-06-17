//creates references to
 const userInput = document.getElementById("nameInput");
const btnINput = document.getElementById("greetBtn");
const msgArea = document.getElementById("message-area");


// JavaScript attaches an addEventListener to the button.
btnINput.addEventListener("click", greetUser);

function greetUser(){
    //JavaScript gets the value from the input field.
    const  userNameInput = userInput.value;
   // JavaScript creates a greeting message using that value.

   if(userNameInput === ""){
       msgArea.textContent = "Please Enter Name";
   }else if(userNameInput === "Sifat"){
        msgArea.textContent = `Hello, ${userNameInput}! Nice to see You.`; 
   }else{
     // msgArea.textContent = `Hello,${userInput.value}! Welcome back.`;
      msgArea.textContent = `Hello, ${userNameInput}! Welcome back.`;

   }
  // const greetMessage = `Hello,${userInput.value}! Welcome back.`;
  // msgArea.textContent = greetMessage;
  
  
  
}