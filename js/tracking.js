function trackShipment() {
  const id = document.getElementById('trackingInput').value;
  const shipment = shipments.find(s => s.id === id);

  if (!shipment) {
    alert('Shipment not found');
    return;
  }

  document.getElementById('result').classList.remove('hidden');
  document.getElementById('status').textContent = shipment.status;
  document.getElementById('from').textContent = shipment.from;
  document.getElementById('to').textContent = shipment.to;
  document.getElementById('eta').textContent = shipment.eta;

  for (let i = 1; i <= 5; i++) {
    document.getElementById('s' + i).classList.remove('active');
    if (i <= shipment.status) {
      document.getElementById('s' + i).classList.add('active');
    }
  }
}
