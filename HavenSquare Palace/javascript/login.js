// Login Form Validation

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const emailInput = document.getElementById('email').value.trim().toLowerCase();
  const passInput = document.getElementById('password').value;

  const acceptedDomains = ['@gmail.com', '@hotmail.com'];
  let domainValid = false;

  for (let i = 0; i < acceptedDomains.length; i++) {
    if (emailInput.endsWith(acceptedDomains[i])) {
      domainValid = true;
      break;
    }
  }

  if (!domainValid) {
    alert("Please use a Gmail or Hotmail address");
    return;
  }

  let allUsers = JSON.parse(localStorage.getItem('users')) || [];

  let foundUser = allUsers.find(function(user) {
    return user.emailAddress === emailInput && user.password === passInput;
  });

  if (!foundUser) {
    alert("It didn't work. Either your email or password is wrong.");
    return;
  }

  alert("You're in!");
  window.location.href = "index.html"; // Redirect to Home Page
});