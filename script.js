function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]";
  let passwordLength = 12;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    password += randomChar;
  }

  document.getElementById('password').value = password;
}

function copyToClipboard() {
  const passwordField = document.getElementById('password');
  
  if (passwordField.value) {
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard: " + passwordField.value);
  } else {
    alert("Generate a password first!");
  }
}

document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);