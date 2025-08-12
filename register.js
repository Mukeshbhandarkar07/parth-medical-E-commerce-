document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html";
});
