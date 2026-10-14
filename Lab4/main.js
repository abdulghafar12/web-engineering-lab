const bookingStatus = document.querySelector("#booking-status");
document.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-day]");
  if (!button) {
    return;
  }
  const day = button.dataset.day;
  bookingStatus.textContent = `You selected ${day} for office hours booking!`;
});