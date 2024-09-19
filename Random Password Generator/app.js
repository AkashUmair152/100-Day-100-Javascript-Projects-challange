// Function to generate a random password
function generateRandomPassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const number = "0123456789";

  // Combine all characters into a single string
  const allChars = upperCase + lowerCase + symbol + number;

  // Randomly determine the length of the password (between 10 and 15)
  const passwordLength = Math.floor(Math.random() * 6) + 10;

  let password = "";

  // Randomly select characters from allChars to create the password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Function to copy the password to clipboard
function copyToClipboard() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

// When the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the password field and button
  const passwordField = document.getElementById("password");
  const generateButton = document.querySelector("button");
  const copyIcon = document.querySelector(".display img");

  // Generate password on button click
  generateButton.addEventListener("click", function () {
    const newPassword = generateRandomPassword();
    passwordField.value = newPassword;
  });

  // Copy password on icon click
  copyIcon.addEventListener("click", copyToClipboard);
});
