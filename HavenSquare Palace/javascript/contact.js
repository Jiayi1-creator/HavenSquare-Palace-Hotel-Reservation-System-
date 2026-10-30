// Contact Form Validation 

function validateForm() {
      let isValid = true;

      document.querySelectorAll('.error').forEach(e => e.textContent = '');
      document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('invalid'));

      const firstname = document.getElementById("firstname");
      const lastname = document.getElementById("lastname");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      if (firstname.value.trim() === "") {
        document.getElementById("firstnameError").textContent = "First name is required.";
        firstname.classList.add("invalid");
        isValid = false;
      }

      if (firstname.value.trim() === "") {
        document.getElementById("lastnameError").textContent = "Last name is required.";
        firstname.classList.add("invalid");
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        email.classList.add("invalid");
        isValid = false;
      }

      if (subject.value === "") {
        document.getElementById("subjectError").textContent = "Please select a subject.";
        subject.classList.add("invalid");
        isValid = false;
      }

      if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        message.classList.add("invalid");
        isValid = false;
      }

      if (isValid) {
        alert("Thanks for reaching out! We'll get back to you soon.");

        // Clear the form fields
        firstname.value="";
        lastname.value="";
        email.value="";
        subject.value="";
        message.value="";
      }

      return isValid;
    }