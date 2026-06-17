//creates references to
const userInput = document.getElementById("nameInput");
//const btnINput = document.getElementById("greetBtn");
const msgArea = document.getElementById("message-area");

//Attach addEventListener to input object

userInput.addEventListener("input",greetUser);

function greetUser(event){
    //const  userNameInput = userInput.event.target.value;
   // JavaScript creates a greeting message using that value.

   //if(userNameInput === ""){
    if(event.target.value === ""){
       msgArea.textContent = "Please Enter Name";
   }else if(event.target.value === "Sifat"){
        msgArea.textContent = `Hello, ${event.target.value}! Nice to see You.`; 
   }else{
     // msgArea.textContent = `Hello,${userInput.value}! Welcome back.`;
      msgArea.textContent = `Hello, ${event.target.value}! Welcome back.`;

   }
  
}

//greetUser(inputEventObject);

//greetUser(event);