//call the variables:
let submitButton = document.querySelector("#btn");
let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function () {
    notEmpty(inputDay, inputMonth, inputMonth);
    valideDate(inputDay, inputMonth, inputYear);
    AgeCalculator(inputDay,inputMonth,inputYear)
});
//check if the string not empty:
function notEmpty(I1, I2, I3) {
  let arrayOfInputs = [I1.value, I2.value, I3.value];
  //calling this variables for styling them
  let inputs = document.querySelectorAll("input[type='text']");
  let labels = document.querySelectorAll("label");
  let textError = document.querySelectorAll(".er-text");
  //set options:
  let E = 0;
  for (i = 0; i < arrayOfInputs.length; i++) {
    if (arrayOfInputs[i] !== "" && !isNaN(arrayOfInputs[i])) {
      E++;
    }
  }
  if (E === arrayOfInputs.length) {
    inputs.forEach((input) => {
      input.classList.remove("error");
    });
    labels.forEach((label) => {
      label.classList.remove("error");
    });
    textError.forEach((text) => {
      text.style.display = "none";
    });
  } else {
    inputs.forEach((input) => {
      input.classList.add("error");
    });
    labels.forEach((label) => {
      label.classList.add("error");
    });
    textError.forEach((text) => {
      text.style.display = "flex";
    });
  }
}
//checking the inputs if valid or not:
function valideDate(I1, I2, I3) {
  let dateObj = new Date();
  //calling this variables for styling them
  let inputs = document.querySelectorAll("input[type='text']");
  let labels = document.querySelectorAll("label");
  let textInvalid = document.querySelectorAll(".invalid-text");

  if (I1.value > 30 || I2.value > 12 || I3.value > dateObj.getFullYear()) {
    inputs.forEach((input) => {
      input.classList.add("invalid");
    });
    labels.forEach((label) => {
      label.classList.add("invalid");
    });
    textInvalid.forEach((text) => {
      text.style.display = "flex";
    });
  } else {
    inputs.forEach((input) => {
      input.classList.remove("invalid");
    });
    labels.forEach((label) => {
      label.classList.remove("invalid");
    });
    textInvalid.forEach((text) => {
      text.style.display = "none";
    });
  }
}
// the results function;
function AgeCalculator(I1, I2, I3) {
  let r1;
  let r2;
  let r3;
  let date = new Date();
  r1 = I1.value - date.getDate();
  r2 = I2.value - date.getMonth();
  r3 =date.getFullYear() -I3.value  ;

  let shape = document.querySelectorAll(".shape");
  shape.forEach((s) => {
    s.remove(); 
  })
  let datea = document.querySelectorAll(".results .date");
  let age = document.querySelectorAll(".results .age");
  age.forEach((a) => {
    a.remove();
  })
  let arrayofresulat = [r3, r2, r1];
  for (i = 0; i < arrayofresulat.length; i++){
    let p = document.createElement("p");
    p.className = "age";
    p.textContent = arrayofresulat[i];
    datea[i].prepend(p)
    
  }
  

}