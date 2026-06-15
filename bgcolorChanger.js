function colorChanger() {
    let userInput = document.getElementById("colorDisplay");
    let userTextInput = userInput.value;
    console.log(userTextInput);
    
   
    console.log("button clicked");
   
    document.body.style.backgroundColor = userTextInput;
    
    
    const span = document.getElementById('mySpan');


   span.textContent = userTextInput;
    
   
    
}
 




