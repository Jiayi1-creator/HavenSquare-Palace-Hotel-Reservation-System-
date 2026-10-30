// Sign Up Form Validation

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const enteredName = document.getElementById('fullName').value.trim();
  const userEmail = document.getElementById('emailAddress').value.trim().toLowerCase();
  const pwd = document.getElementById('password').value;
  const confirmPwd = document.getElementById('confirm-password').value;

  const acceptedDomains = ['@gmail.com', '@hotmail.com'];
  let domainMatch = false;

  for (let domain of acceptedDomains) {
    if (userEmail.endsWith(domain)) {
      domainMatch = true;
      break;
    }
  }

  if (!domainMatch) {
    alert("Oops! Only Gmail or Hotmail addresses are currently supported.");
    return;
  }

  if (pwd !== confirmPwd) {
    alert("Hmm, your passwords don't match. Try again!");
    return;
  }

  const hasNumber = /\d/.test(pwd);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
  const longEnough = pwd.length >= 8;

  if (!longEnough || !hasNumber || !hasSymbol) {
    alert("Your password should be at least 8 characters and include a number and a special symbol like @, #, $.");
    return;
  }

  let storedUsers = [];
  const rawUsers = localStorage.getItem("users");
  if (rawUsers) {
    try {
      storedUsers = JSON.parse(rawUsers);
    } catch (error) {
      console.warn("Failed to parse users JSON — fallback to empty list.");
      storedUsers = [];
    }
  }

  const nameExists = storedUsers.find(user => user.fullName.toLowerCase() === enteredName.toLowerCase());
  const emailExists = storedUsers.find(user => user.emailAddress === userEmail);

  if (nameExists) {
    alert("That full name is already in use.");
    return;
  }

  if (emailExists) {
    alert("Email has been taken.");
    return;
  }

  const freshUser = {
    fullName: enteredName,
    emailAddress: userEmail,
    password: pwd
  };

  storedUsers.push(freshUser);
  localStorage.setItem("users", JSON.stringify(storedUsers));

  alert("Sign up complete!");
  window.location.href = "login.html"; // Redirect to Login Page
});