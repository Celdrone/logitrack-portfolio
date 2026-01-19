const select = document.getElementById('shipmentSelect');

shipments.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s.id;
  opt.textContent = s.id;
  select.appendChild(opt);
});

function updateStatus() {
  const id = select.value;
  const status = Number(document.getElementById('statusSelect').value);

  const shipment = shipments.find(s => s.id === id);
  shipment.status = status;

  alert('Status updated (refresh tracking page)');
}
