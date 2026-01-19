const shipments = [
  {
    id: "TX-1001",
    from: "Jakarta Hub",
    to: "Surabaya Hub",
    eta: "18 Jan 2026",
    status: 3
  },
  {
    id: "TX-1002",
    from: "Bandung Hub",
    to: "Bali Hub",
    eta: "20 Jan 2026",
    status: 2
  }
];

function trackShipment(event) {
  event.preventDefault();

  const input = document.getElementById("trackingInput").value.trim();
  const result = document.getElementById("trackingResult");

  const shipment = shipments.find(s => s.id === input);

  if (!shipment) {
    alert("Tracking number not found");
    return;
  }

  result.classList.remove("hidden");

  document.getElementById("statusText").textContent =
    ["Created", "Picked Up", "In Transit", "Out for Delivery", "Delivered"][shipment.status - 1];

  document.getElementById("from").textContent = shipment.from;
  document.getElementById("to").textContent = shipment.to;
  document.getElementById("eta").textContent = shipment.eta;

  for (let i = 1; i <= 5; i++) {
    const step = document.getElementById("s" + i);
    step.classList.remove("active");
    if (i <= shipment.status) {
      step.classList.add("active");
    }
  }
}
