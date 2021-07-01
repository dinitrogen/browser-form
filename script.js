// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    emailError.textContent = 'Please enter a valid email address.';
    emailError.className = 'error active';
  }
});


const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');
country.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (country.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      countryError.textContent = ''; // Reset the content of the message
      countryError.className = 'error'; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      countryError.textContent = 'Please enter a country.';
      countryError.className = 'error active';
    }
  });

const zip = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');
zip.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (zip.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    zipError.textContent = ''; // Reset the content of the message
    zipError.className = 'error'; // Reset the visual state of the message
    } else {
    // If there is still an error, show the correct error
    zipError.textContent = 'Please enter a five-digit zip code.';
    zipError.className = 'error active';
    }
});

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');
password.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (password.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    passwordError.textContent = ''; // Reset the content of the message
    passwordError.className = 'error'; // Reset the visual state of the message
    } else {
    // If there is still an error, show the correct error
    passwordError.textContent = `Password must be at least ${password.minLength} characters.`;
    passwordError.className = 'error active';
    }
});

const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmError = document.querySelector('#passwordConfirm + span.error');
passwordConfirm.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    let firstPassword = document.getElementById('password').value;
    let secondPassword = document.getElementById('passwordConfirm').value;
    console.log(firstPassword);
    console.log(secondPassword);

    if (secondPassword !== firstPassword) {
        passwordConfirm.setCustomValidity('Does not match.');
        passwordConfirmError.textContent = 'Does not match original password.';
        passwordConfirmError.className = 'error active';
    } else {
        passwordConfirm.setCustomValidity('');
        passwordConfirmError.textContent = '';
        passwordConfirmError.className = 'error';
    }
});

const submitButton = document.getElementById('submitButton')
const submitText = document.getElementById('submitText');
form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid || !country.validity.valid || !zip.validity.valid || !password.validity.valid || !passwordConfirm.validity.valid) {
    // If it isn't, we display an appropriate error message 
    submitText.textContent = 'Please correctly complete the form.'
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
    return;
  } 
  const highfive = document.getElementById('highfive');
  highfive.textContent = 'High five!';

});

// function showError() {
//   if(email.validity.valueMissing) {
//     // If the field is empty,
//     // display the following error message.
//     emailError.textContent = 'You need to enter an e-mail address.';
//   } else if(email.validity.typeMismatch) {
//     // If the field doesn't contain an email address,
//     // display the following error message.
//     emailError.textContent = 'Entered value needs to be an e-mail address.';
//   } else if(email.validity.tooShort) {
//     // If the data is too short,
//     // display the following error message.
//     emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
//   }

//   // Set the styling appropriately
//   emailError.className = 'error active';
// }