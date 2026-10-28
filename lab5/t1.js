
/* Task 11: Import Utility Functions */

import { delay, makeCounter } from "./utils.js";

// Get booking status paragraph
const bookingStatus = document.querySelector("#booking-status");

// Create confirmation counter
const nextConfirmation = makeCounter();

// Event delegation
document.addEventListener("click", async function (event) {

  // Find the nearest Book button
  const button = event.target.closest("button[data-day]");

  // Stop if another element was clicked
  if (!button) {
    return;
  }

  // Get selected day
  const day = button.dataset.day;

  // Find the table row
  const row = button.closest("tr");

  // Toggle selected class
  const isSelected = row.classList.toggle("selected");

  // Show processing message
  bookingStatus.textContent = `Processing ${day} selection...`;

  // Wait for one second
  await delay(1000);

  // Count selected rows
  const bookedRows = document.querySelectorAll(
    "tbody tr.selected"
  );

  const totalBooked = bookedRows.length;

  // Generate confirmation number
  const confirmationNumber = nextConfirmation();

  // Display numbered confirmation
  bookingStatus.textContent = isSelected
    ? `Confirmation #${confirmationNumber}: ${day} selected successfully! Total selected days: ${totalBooked}`
    : `Confirmation #${confirmationNumber}: ${day} removed from selection. Total selected days: ${totalBooked}`;

});
