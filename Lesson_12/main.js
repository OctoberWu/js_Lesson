// ======== Here Text Block ======== 
function copyTextToClipboard(elementId) {

  // Create an auxiliary hidden input
  var aux = document.createElement("input");

  // Get the text from the element passed into the input
  // <p> DOM
  aux.setAttribute("value", document.getElementById('text_element').innerHTML);

  // Append the aux input to the body
  document.body.appendChild(aux);

  // Highlight the content
  aux.select()

  // Execute the copy command
  document.execCommand("copy");

  // Remove the input from the body
  document.body.removeChild(aux);

}

const textCopyBtn = document.getElementById("text-copy-btn")
textCopyBtn.addEventListener("click", copyTextToClipboard);

// ======== Here Text Block ======== 
function copyInputToClipboard(elementId) {

  // Create an auxiliary hidden input
  var aux = document.createElement("input");

  // Get the text from the element passed into the input
  // <input> DOM
  aux.setAttribute("value", document.getElementById('input_element').value);

  // Append the aux input to the body
  document.body.appendChild(aux);

  // Highlight the content
  aux.select()

  // Execute the copy command
  document.execCommand("copy");

  // Remove the input from the body
  document.body.removeChild(aux);
}

const inputCopyBtn = document.getElementById("input-copy-btn")
inputCopyBtn.addEventListener("click", copyInputToClipboard);
