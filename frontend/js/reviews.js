fetch("http://127.0.0.1:8000/reviews")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("reviews");
    container.innerHTML = data.map(r => `
      <div class="card">
        <p>⭐ ${r.rating}</p>
        <p>${r.comment}</p>
      </div>
    `).join("");
  });
