fetch("http://127.0.0.1:8000/bookings")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("bookings");
    container.innerHTML = data.map(b => `
      <div class="card">
        <p><b>Booking ID:</b> ${b.id}</p>
        <p>Status: ${b.status}</p>
      </div>
    `).join("");
  });
