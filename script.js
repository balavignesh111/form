'use strict';

/* steps to solve it...
  1. Get all the elements.
  2. validation -->
  3. for every element we have to set up a validation criteria.
  4. validating the form & showing the results. 

  criteria -->
  1. for username --> min - 3 & max - 15
  2. for password --> min - 8 & max - 15
  3. for email --> just check the email pattern
  4. for confirm --> it should be same as password.
*/

// elements

const userNameElement = document.getElementById('username');  
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const confirmPasswordElement =document.getElementById('confirmPassword');
const submitBtnElement = document.querySelector('.submitButton');

//message elements
const userNameMsgElement = document.querySelector('.userNameErrorMsg');
const emailMsgElement = document.querySelector('.emailErrorMsg');
const passwordMsgElement = document.querySelector('.passwordErrorMsg');
const confirmPasswordMsgElement = document.querySelector('.confirmPasswordErrorMsg');

//global variable---
const userNameMandatoryMsg = `Username is mandatory`;
const emailMandatoryMsg = `Email is mandatory`;
const passwordMandatoryMsg = `Password is mandatory`;
const confirmPasswordMandatoryMsg = `Confirm Password is mandatory`;
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 


//functions
function addingErrorMsg(element1,element2){
  element1.parentElement.classList.add('error');
  element2.style.visibility = 'visible';
}

function addingSuccessMsg(element1,element2){
  element1.parentElement.classList.add('success');
  element2.style.visibility = 'visible';
}

function result(){
  if(userNameElement.value !== ''){
    if(userNameElement.value.trim().length < 5){
      addingErrorMsg(userNameElement,userNameMsgElement);
      userNameMsgElement.innerText = `username should more than 5 characters`;
    }
    else if(userNameElement.value.trim().length > 15){
      addingErrorMsg(userNameElement,userNameMsgElement);
      userNameMsgElement.innerText = `username should be less than 15 characters`;
    }
    else if(userNameElement.value.trim().length >= 5 && userNameElement.value.length <= 15){
      userNameElement.parentElement.classList.contains('error') ? userNameElement.parentElement.classList.remove('error') : '';
      userNameMsgElement.innerText = `Username is valid`;
      addingSuccessMsg(userNameElement,userNameMsgElement);
    }
  }
  else{
    addingErrorMsg(userNameElement,userNameMsgElement);
    userNameMsgElement.innerText = `Username is mandatory`;
  }
  // email
  if(emailElement.value !== ''){
    if(emailElement.value.match(pattern)){
      emailElement.parentElement.classList.contains('error') ? emailElement.parentElement.classList.remove('error') : '';
      emailMsgElement.innerText = `Email is valid`;
      addingSuccessMsg(emailElement,emailMsgElement);
    }else{
      emailMsgElement.innerText = `Email is Invalid`;
      addingErrorMsg(emailElement,emailMsgElement);
    }
  }
  else{
    emailMsgElement.innerText = `Email is mandatory`;
    addingErrorMsg(emailElement,emailMsgElement);
  }

  // password
  if(passwordElement.value !== ''){
    if(passwordElement.value.length < 8){
      addingErrorMsg(passwordElement,passwordMsgElement);
      passwordMsgElement.innerText = `Password should more than 8 characters`;
    }
    else if(passwordElement.value.length > 15){
      addingErrorMsg(userNameElement,passwordMsgElement);
      passwordMsgElement.innerText = `Password should be less than 15 characters`;
    }
    else if(passwordElement.value.length >= 8 && passwordElement.value.length <= 15){
      passwordElement.parentElement.classList.contains('error') ? passwordElement.parentElement.classList.remove('error') : '';
      passwordMsgElement.innerText = `Password is valid`;
      addingSuccessMsg(passwordElement,passwordMsgElement);
    }
  }
  else{
    addingErrorMsg(passwordElement,passwordMsgElement);
    passwordMsgElement.innerText = `Password is mandatory`;
  }

// confirm password
  if(confirmPasswordElement.value !== ''){
    if(confirmPasswordElement.value === passwordElement.value){
      confirmPasswordElement.parentElement.classList.contains('error') ? confirmPasswordElement.parentElement.classList.remove('error') : '';
      confirmPasswordMsgElement.innerText = `Password is valid`;
      addingSuccessMsg(confirmPasswordElement,confirmPasswordMsgElement);
      
    }else{
      confirmPasswordMsgElement.style.visibility = 'visible';
      confirmPasswordMsgElement.innerText = `Password not matching`;
      addingErrorMsg(confirmPasswordElement,confirmPasswordMsgElement);
    }
  }
  else{
    addingErrorMsg(confirmPasswordElement,confirmPasswordMsgElement);
    confirmPasswordMsgElement.innerText = `Confirm Password is mandatory`;
  }
}






//event listeners


submitBtnElement.addEventListener('click',()=>{
  result();
});