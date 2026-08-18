//When browser sees HTML code it creates document root node using built-in Document interface for the whole HTML code."
//After creating the root node document browser looks at <!DOCTYPE html> and starts creating DocumentType Object
// for the tag <!DOCTYPE html>.
//Root node → Document object
//DOCTYPE declaration → DocumentType object

//The DocumentType object is connected to the Document object.
//So step by step
//Browser creates the root Document object.
//Parser starts reading the HTML.
//Parser encounters <!DOCTYPE html>.
//Browser creates a DocumentType object.
//Browser attaches it to the Document object.
const openBtn = document.getElementById("openModalBtn");
const modalContainer = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModalBtn");
//const 
openBtn.addEventListener("click",openModal);

function openModal(){
    modalContainer.style.display = "flex";
}
closeBtn.addEventListener("click",closeModal);

function closeModal(){
    modalContainer.style.display = "none";
}