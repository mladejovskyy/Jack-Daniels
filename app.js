// Nav scroll background
const navLogo = document.getElementById("navLogo");
const nav = document.getElementById("nav");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    nav.style.backgroundColor = "#392009";
    navLogo.style.scale = 0.75;
  } else {
    nav.style.backgroundColor = "#39200900";
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

modalBtn.disabled = true;

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

  if (age === -1) {
    modalBtn.disabled = true; // Invalid date, disable button
    return;
  }

  if (age >= 18) {
    modalBtn.disabled = false; // Enable button
    modalBtn.classList.remove("disabled");
  } else {
    modalBtn.disabled = true; // Disable button
    modalBtn.classList.add("disabled");
  }
}

// Automatically open the modal on page load
window.onload = function () {
  openModal();
};

// Attach event listeners to input fields
document.getElementById("d").addEventListener("input", checkAgeAndEnableButton);
document.getElementById("m").addEventListener("input", checkAgeAndEnableButton);
document.getElementById("y").addEventListener("input", checkAgeAndEnableButton);

// Attach event listener to "Enter" button
document
  .getElementById("modalBtn")
  .addEventListener("click", checkAgeAndCloseModal);
