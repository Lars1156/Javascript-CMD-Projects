let deliveries = [];
let deliveryId = 1;

// Haversine Formula to calculate the distance between two points in kilometers
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Handle form submission
document.getElementById('deliveryForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const sender = document.getElementById('sender').value;
  const receiver = document.getElementById('receiver').value;
  const origin = document.getElementById('origin').value;
  const originLat = parseFloat(document.getElementById('originLat').value);
  const originLng = parseFloat(document.getElementById('originLng').value);
  const destination = document.getElementById('destination').value;
  const destinationLat = parseFloat(document.getElementById('destinationLat').value);
  const destinationLng = parseFloat(document.getElementById('destinationLng').value);

  // Calculate distance between origin and destination
  const distance = calculateDistance(originLat, originLng, destinationLat, destinationLng);

  // Create new delivery object
  const newDelivery = {
    id: deliveryId++,
    sender,
    receiver,
    origin,
    destination,
    distance: distance.toFixed(2), // Round distance to 2 decimal places
    status: 'Pending' // Default status
  };

  // Add to deliveries array
  deliveries.push(newDelivery);
  displayDeliveries();

  // Clear form
  document.getElementById('deliveryForm').reset();
});

// Display all deliveries in the table
function displayDeliveries() {
  const tableBody = document.getElementById('deliveryTableBody');
  tableBody.innerHTML = ''; // Clear existing rows

  deliveries.forEach(delivery => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${delivery.id}</td>
      <td>${delivery.sender}</td>
      <td>${delivery.receiver}</td>
      <td>${delivery.origin}</td>
      <td>${delivery.destination}</td>
      <td>${delivery.distance} km</td>
      <td>${delivery.status}</td>
      <td>
        <select onchange="updateDeliveryStatus(${delivery.id}, this.value)">
          <option value="Pending" ${delivery.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="In Transit" ${delivery.status === 'In Transit' ? 'selected' : ''}>In Transit</option>
          <option value="Delivered" ${delivery.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Update delivery status
function updateDeliveryStatus(id, newStatus) {
  const delivery = deliveries.find(d => d.id === id);
  if (delivery) {
    delivery.status = newStatus;
    displayDeliveries();
  }
}
