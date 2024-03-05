// Nav scroll background
const navLogo = document.getElementById("navLogo");
const navOverlay = document.getElementsByClassName("overlay");
const nav = document.getElementById("nav");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navLogo.style.scale = 0.75;
  } else {
    navLogo.style.scale = 1;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Update the content of the first paragraph
  const firstParagraph = document.querySelector(".js-contact-first");
  firstParagraph.textContent = "Jack Daniel's Distillery";

  // Update the content of the second paragraph
  const secondParagraph = document.querySelector(".js-contact-second");
  secondParagraph.textContent =
    "280 Lynchburg Hwy, Lynchburg, TN 37352, United States";
});

document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const currYear = date.getFullYear();
  const copyrightBox = document.querySelector(".copyright");

  copyrightBox.textContent = `© ${currYear}, Jack Daniels • All rights reserved.`;

   modalBtn.disabled = true;
});

// AGE CHECK

// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Automatically open the modal on page load
window.onload = function () {
  openModal();
};

// Attach event listeners to input fields
document
  .getElementById("d")
  .addEventListener("input", checkDateAndEnableButton);
document
  .getElementById("m")
  .addEventListener("input", checkDateAndEnableButton);
document
  .getElementById("y")
  .addEventListener("input", checkDateAndEnableButton);

// Add event listener for "keydown" on input fields
document.getElementById("d").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkDateAndEnableButton();
  }
});
document.getElementById("m").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkDateAndEnableButton();
  }
});
document.getElementById("y").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkDateAndEnableButton();
  }
});

// Function to validate input values
function validateInput(value, min, max) {
  return value >= min && value <= max;
}

// Function to check date validity and enable/disable modalBtn
function checkDateAndEnableButton() {
  var dayInput = document.getElementById("d");
  var monthInput = document.getElementById("m");
  var yearInput = document.getElementById("y");
  var modalBtn = document.getElementById("modalBtn");

  var day = parseInt(dayInput.value);
  var month = parseInt(monthInput.value);
  var year = parseInt(yearInput.value);

  // Validate input values
  var validDay = validateInput(day, 1, 31);
  var validMonth = validateInput(month, 1, 12);
  var validYear = validateInput(year, 1900, 2024);

  // Set border color based on validation
  dayInput.style.border = validDay ? "2px solid #BAAB8F" : "2px solid red";
  monthInput.style.border = validMonth ? "2px solid #BAAB8F" : "2px solid red";
  yearInput.style.border = validYear ? "2px solid #BAAB8F" : "2px solid red";

  if (validDay && validMonth && validYear) {
    checkAgeAndEnableButton();
  } else {
    modalBtn.disabled = true;
    modalBtn.classList.add("disabled");
  }
}

// Function to calculate age
function calculateAge() {
  var day = document.getElementById("d").value;
  var month = document.getElementById("m").value;
  var year = document.getElementById("y").value;

  // Validate input values
  if (!day || !month || !year) {
    return -1; // Invalid date
  }

  var currentDate = new Date();
  var inputDate = new Date(year, month - 1, day); // Month is 0-indexed

  var age = currentDate.getFullYear() - inputDate.getFullYear();

  // Check if birthday has occurred this year
  if (
    currentDate.getMonth() < inputDate.getMonth() ||
    (currentDate.getMonth() === inputDate.getMonth() &&
      currentDate.getDate() < inputDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Function to check age and enable/disable modalBtn
function checkAgeAndEnableButton() {
  var age = calculateAge();
  var modalBtn = document.getElementById("modalBtn");

  if (age === -1 || !modalBtn.disabled) {
    modalBtn.disabled = true; // Invalid date or button already enabled, disable button
    modalBtn.classList.add("disabled");
    modalBtn.classList.remove("active");
    return;
  }

  if (age >= 18) {
    modalBtn.disabled = false; // Enable button
    modalBtn.classList.remove("disabled");
    modalBtn.classList.add("active");
  } else {
    modalBtn.disabled = true; // Disable button
    modalBtn.classList.add("disabled");
    modalBtn.classList.remove("active");
  }
}

// Attach event listener to "Enter" button
document
  .getElementById("modalBtn")
  .addEventListener("click", checkAgeAndCloseModal);
