/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  /* formElement is being assigned a value returned by the getElementById function using a given HTML id.*/
  let formElement = document.getElementById(id);
  
  /* This is a conditional statement comparing the value in formElement to a null character which if true, essentially means that the id was not found/valid and was assigned a default null character. The return statement gives a string saying the id was not found.*/
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	/* This if statement compares the trimmed version of formElement using the trim function to a blank string. If this is true, then it returns a default value for the element as the placeholder attribute for that specific input tag (ex."Aunt")*/
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  console.log("button clicked.");

  // Retrieve form values
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");
  
  // Insert form values into madlib
  let madLib = `
  Dear ${relative},
  <br><br>
  I have been having a really ${adjective1} time 
  at camp. The counselour is ${adjective2} and 
  the food is ${adjective3}. I met ${famousPerson} 
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}
  `;

  console.log(madLib);

  // Output madlib to player
  document.getElementById("output").innerHTML = madLib;

  addClassToElement("container","generated")


  
  
}