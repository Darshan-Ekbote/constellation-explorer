const constellationData = {
  orion: {
    name: "Orion",
    season: "Winter",
    story: "Orion was a great hunter in Greek mythology. His belt of three stars is one of the most recognizable patterns in the sky."
  },
  ursaMajor: {
    name: "Ursa Major",
    season: "Year-round",
    story: "Also known as the Great Bear, it contains the Big Dipper asterism and is linked to many mythologies."
  },
  scorpius: {
    name: "Scorpius",
    season: "Summer",
    story: "Represents a scorpion who killed Orion. When Scorpius rises, Orion sets — they're never seen in the sky together."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('constellation-info');

  Object.keys(constellationData).forEach(key => {
    const btn = document.createElement('button');
    btn.textContent = constellationData[key].name;
    btn.onclick = () => {
      container.innerHTML = `
        <h2>${constellationData[key].name}</h2>
        <p><strong>Season:</strong> ${constellationData[key].season}</p>
        <p>${constellationData[key].story}</p>
      `;
    };
    container.appendChild(btn);
  });
});
