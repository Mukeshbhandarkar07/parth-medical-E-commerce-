document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const enteredEmail = document.getElementById('email').value;
  const enteredPassword = document.getElementById('password').value;

  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (storedUser && storedUser.email === enteredEmail && storedUser.password === enteredPassword) {
    alert("Login successful!");
    window.location.href = "item.html"; 
  } else {
    alert("Invalid email or password!");
  }
});


