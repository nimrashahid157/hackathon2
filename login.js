document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
  
    if (!validateFirstName(firstName)) {
      alert("First name must be at least 3 characters and not exceed 20 characters.");
      return;
    }
  
    if (!validateLastName(lastName)) {
      alert("Last name must be at least 2 characters and not exceed 20 characters.");
      return;
    }
  
    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters and include capital and small letters.");
      return;
    }
  
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    alert("Signup successful!");
  });
  
  function validateFirstName(firstName) {
    return /^[a-zA-Z]{3,20}$/.test(firstName);
  }
  
  function validateLastName(lastName) {
    return /^[a-zA-Z]{2,20}$/.test(lastName);
  }
  
  function validatePassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  }
  