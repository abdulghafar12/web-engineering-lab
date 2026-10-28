import { delay, makeCounter, getRequired, describeSlot, } from "./utils.js";
const slots = [
    { day: "Monday", start: "10:00 AM", end: "12:00 PM", room: "Room 214" },
    { day: "Wednesday", start: "2:00 PM", end: "4:00 PM", room: "Room 214" },
    { day: "Friday", start: "10:00 AM", end: "12:00 PM", room: "Room 214" },
];
const status = getRequired("#booking-status");
const tbody = getRequired("#schedule tbody");
const nextBooking = makeCounter();
tbody.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof Element))
        return;
    const button = target.closest("button[data-day]");
    const row = target.closest("tr");
    if (button === null || row === null)
        return;
    const slot = slots.find((s) => s.day === button.dataset.day);
    if (slot === undefined)
        return;
    status.textContent = `Updating ${slot.day}…`;
    await delay(1000);
    const booked = row.classList.toggle("selected");
    const count = document.querySelectorAll("#schedule tr.selected").length;
    status.textContent = booked
        ? `Booking #${nextBooking()} confirmed: ${describeSlot(slot)}. ${count} of ${slots.length} slots booked.`
        : `Booking for ${slot.day} cancelled. ${count} of ${slots.length} slots booked.`;
});
