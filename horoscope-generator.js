const fs = require('fs');

const signs = [
  "Saltwater Sovereign",
  "Jungle Centaur",
  "Star-Walker",
  "Deep Current",
  "Golden Swimmer",
  "Ashwing",
  "Silent Coil",
  "Laughing Beak",
  "Night Howler",
  "Celestial Peacock",
  "Many-Skin",
  "Sky Glider"
];

const generateFunnyForecast = (sign) => {
  const chaos = [
    "Prepare for drama in a group chat.",
    "Avoid all eye contact with authority figures.",
    "Accidentally become the main character at brunch.",
    "Something retrograde is probably your excuse.",
    "Embrace your inner gremlin — responsibly.",
    "Today’s snack will become a life decision.",
    "Laugh inappropriately during serious meetings.",
    "Love might arrive. Or a scam DM. Who knows?",
    "That email can wait. Trust the stars.",
    "Someone will test you. Don’t take the bait — unless it’s sushi.",
    "Your aura says ‘unbothered.’ Your group texts say otherwise.",
    "Ghosting is an act of self-care this week."
  ];
  const chaosLine = chaos[Math.floor(Math.random() * chaos.length)];
  return `
    <div class="bg-pink-200 p-6 rounded-xl shadow-xl">
      <h2 class="text-xl font-black">${sign}</h2>
      <p class="mt-1 font-semibold">This week:</p>
      <p>${chaosLine}</p>
    </div>
  `;
};

const newContent = signs.map(sign => generateFunnyForecast(sign)).join("\n");

const html = fs.readFileSync("index.html", "utf-8");

// Find the grid wrapper
const updated = html.replace(
  /<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">[\s\S]*?<\/div>/,
  `<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
${newContent}
</div>`
);

fs.writeFileSync("index.html", updated);
console.log("✨ Horoscope section updated!");
