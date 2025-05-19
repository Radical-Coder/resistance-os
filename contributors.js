    let contributions = [
      {
        name: "Ryan",
        alias: "Radical Coder"
      }
      // Add more contributors here as objects
    ];

    const container = document.getElementById("contributors");
    container.innerHTML = contributions.map(c => `
      <div class="contributor">
        <div class="name">${c.name}</div>
        <div class="alias">${c.alias}</div>
      </div>
    `).join('');