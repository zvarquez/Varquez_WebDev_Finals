const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');

form.addEvenListener('submit', (e) => {
  e.prevenDefault();
  
  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();
  
  if(firstnameValue === ''){
    setErrorFor(firstname, 'Firstname cannot be blank');
  }else{
    setSuccessFor(firstname);
  }
   if(lastnameValue === ''){
    setErrorFor(lastname, 'Lastname cannot be blank');
  }else{
    setSuccessFor(lastname);
  }
   if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank');
  }else{
    setSuccessFor(email);
  }
  if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be blank');
  }else{
    setSuccessFor(password);
  }
   if(confirmpasswordValue === ''){
    setErrorFor(confirmpassword, 'Confirm Password cannot be blank');  
  }else if(passwordValue !== confirmpassword){
    setErrorFor(confirmpassword, 'Confirm Password does not match');
  }else{
    setSuccessFor(confirmpassword);
  }
}
function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}
function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
