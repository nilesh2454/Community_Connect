fetch("http://127.0.0.1:8000/services")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("services");
    container.innerHTML = data.map(s => `
      <div class="card">
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <p><strong>${s.category}</strong> - $${s.price}</p>
      </div>
    `).join("");
  })
  .catch(err => console.error(err));
