const startBtn = document.getElementById("startBtn");
const letters = document.querySelectorAll(".letter-card");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const letterTitle = document.getElementById("letterTitle");
const letterMessage = document.getElementById("letterMessage");
const spinBtn = document.getElementById("spinBtn");
const quoteWheel = document.getElementById("quoteWheel");
const quoteDisplay = document.getElementById("quoteDisplay");
const gameCards = document.querySelectorAll(".game-card");
const resetGameBtn = document.getElementById("resetGameBtn");
const imagePuzzle = document.getElementById("imagePuzzle");
const puzzlePreview = document.getElementById("puzzlePreview");
const resetPuzzleBtn = document.getElementById("resetPuzzleBtn");
const puzzleFeedback = document.getElementById("puzzleFeedback");
const secretMessage = document.getElementById("secretMessage");
const giftModal = document.getElementById("giftModal");
const closeGift = document.getElementById("closeGift");

const familyLetters = {
  papa: {
    title: "From Papa",
    photoSrc: "./images/papa.png",
    initials: "Papa",
    message: [
      "Will send through private message.",
      "Love, Papa"
    ]
  },
  mama: {
    title: "From Mama",
    photoSrc: "./images/mama.jpg",
    initials: "Mama",
    videoSrc: "https://drive.google.com/file/d/1AX5PmRDA6jkc31_pLcAjsgzrDIUImlzM/preview",
    message: [
      "From mama:",
      "The message of mama is a video."
    ]
  },
  angelo: {
    title: "From Angelo",
    photoSrc: "./images/angelo.jpg",
    initials: "Angelo",
    message: [
  "Happy 27th Birthday, Maia!",
  "Today is a beautiful reminder of how far you've come and how much more life still has in store for you. Twenty-seven years old is a milestone—a breakthrough for many of the greats who came before us. It is a chapter where dreams become clearer, lessons grow wiser, and every experience shapes the melody of who you are becoming—where everything begins to fall into place.",
  "John Lennon once said, \"Life is what happens to you while you're busy making other plans.\" Much like music, life rarely follows the sheet exactly as expected. It surprises us with unexpected tunes, quiet pauses, melodic shifts, and powerful crescendos. Yet those moments are precisely what make every song a unique experience of its own. In the same way, every twist and turn gives your life its own timeless story.",
  "Embrace each note, whether blissful or arduous, because together they compose a masterpiece that is uniquely yours.",
  "May this new year of your life be filled with meaningful moments, genuine laughter, unwavering courage, and people who make your heart feel safe and secure. Keep chasing your passions, speaking your truth, and dancing through both La Niña and El Niño with growing confidence and grace.",
  "Happy Birthday, Maia. May your 27th year become your most beautiful symphony yet!",
  "Love,Angelo"
]
  },
  gab: {
    title: "From Gab",
    photoSrc: "./images/gab.jpg",
    initials: "Gab",
    message: [
    "Happy Birthday, Ate Maia! 🎉💖",
    "Thank you for always being there for us, kahit malayo ka. We truly appreciate all your efforts, sacrifices, and unconditional love.",
    "We miss you during every occasion here, and it never feels quite complete without you.",
    "Always take care of yourself, and may God continue to bless and guide you wherever you are.",
    "We love and miss you so much. Happy Birthday again!",
    "Love, Gab"
    ]
  },
  tala: {
    title: "From Tala",
    photoSrc: "./images/tala.jpg",
    initials: "Tala",
    message: [
      "Happy Birthday, Ate Maia! 💖",
      "Grateful that you have your own life set up for yourself. I'm inspired by the way you live and how diligent you are. I'm so grateful that you are my older sister, and that we get to be part of your successes.",
      "I love you always as I strive to be a better sibling. <33 Know that we always include you in our life plans too, and we're going to achieve our sisters' travel goals together.",
      "Enjoy your day! I wish you more delicious food, amazing friends, and countless blessings. Happy Birthday! 🥳",
      "Love, Tala"
    ]
  },
  hana: {
    title: "From Hana",
    photoSrc: "./images/hana.jpg",
    initials: "Hana",
    message: [
    "Dear Ate Maia,",
    "Happiest Birthday, Ate Maia!! 🥳💖",
    "Thank you so much for everything. Thank you for always accompanying me on our gala adventures whenever you're here and for always supporting all the random ideas I come up with. I really appreciate how generous you've always been, whether it's helping us financially when we need it, giving us thoughtful gifts, or the monetary gifts you always send. It truly means so much to us.",
    "Thank you also for always making an effort to talk to me every day, even when you're busy. I appreciate everything you do and all the kind things you say to me.",
    "Thank you so much for Chopper too, for letting him stay with us a little longer. ❤️ I'm sure he misses you just as much as you miss him.",
    "I hope you're doing well there in Manila. Please always take care of yourself and your health. I miss you so much.",
    "I wish you nothing but happiness, good health, success, and all the blessings you deserve. May this be the most beautiful year of your life yet, and I can't wait to see you again soon. Love you always! Happy Birthday! 🎂🎉💕",
    "Love, Hana ❤️"
    ]
  },
  joey: {
    title: "From Joey",
    photoSrc: "./images/joey.jpg",
    initials: "Joey",
    message: [
      "Will send through private message.",
      "Love, Joey"
    ]
  },
  rain: {
    title: "From Rain",
    photoSrc: "./images/rain.jpg",
    initials: "Rain",
    message: [
      "Dear Ate Maia,",
      "Hi ate Maia, happy birthday, thank you for always supporting kahit malayo ka samin. For being a provider and a sister at the same time takes a lot of work, which is why I look up to you the most sa magkakapatid. Thank you for helping mama and papa sa mga problema sa bahay. And thank you sa mga gifts samin everytime nag vvisit ka dito (thanks sa libro hehehe) I hope safe kapo diyan ate and inaalagaan mo sarili mo. Happy birthdayy and enjoy your day",
      "Love, Rain"
    ]
  }
};

const quotes = [
  "You do not have to be perfect to be deeply loved.",
  "Your magic is not one gift. It is the way you keep showing up.",
  "Softness can be brave too.",
  "A home becomes warmer when your heart is in it.",
  "You are allowed to grow into a new version of yourself.",
  "The people who love you see your effort, even on quiet days.",
  "Joy is a kind of courage.",
  "Keep choosing the life that feels honest to your heart.",
  "You are more than what you carry for everyone else.",
  "Let this year be gentle, bold, and beautifully yours."
];

let wheelRotation = 0;
let firstCard = null;
let secondCard = null;
let boardLocked = false;
let puzzleState = [];
let emptyTile = 8;
let matchGameComplete = false;
let puzzleGameComplete = false;
let giftShown = false;

function svgUrl(svg) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const cardImages = {
  door: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="24" fill="#fff5df"/><path d="M45 134V67a35 35 0 0 1 70 0v67z" fill="#6f2d73"/><path d="M58 134V70a22 22 0 0 1 44 0v64z" fill="#2f8a70"/><circle cx="94" cy="99" r="5" fill="#ffe08b"/><path d="M39 134h82" stroke="#d75d3d" stroke-width="8" stroke-linecap="round"/></svg>`),
  candle: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="24" fill="#fff5df"/><path d="M80 18c18 20 1 29 0 39-19-14-5-28 0-39z" fill="#f2b84b"/><rect x="62" y="58" width="36" height="74" rx="10" fill="#b73574"/><path d="M68 70h24M68 90h24M68 110h24" stroke="#ffe08b" stroke-width="7" stroke-linecap="round"/><ellipse cx="80" cy="136" rx="42" ry="10" fill="#2f8a70"/></svg>`),
  flower: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="24" fill="#fff5df"/><path d="M80 82c-18-32 25-32 0 0zm0 0c18-32 43 3 0 0zm0 0c36 0 8 38 0 0zm0 0c-8 38-36 0 0 0zm0 0c-43 3-18-32 0 0z" fill="#d75d3d"/><circle cx="80" cy="82" r="15" fill="#ffe08b"/><path d="M80 96v38" stroke="#2f8a70" stroke-width="9" stroke-linecap="round"/><path d="M79 116c-28-19-39 5-39 5 23 7 36 2 39-5zm5 7c30-16 38 10 38 10-24 5-36-2-38-10z" fill="#2f8a70"/></svg>`),
  gift: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="24" fill="#fff5df"/><rect x="35" y="69" width="90" height="64" rx="8" fill="#2f8a70"/><rect x="31" y="55" width="98" height="24" rx="7" fill="#b73574"/><path d="M80 55v78M35 86h90" stroke="#ffe08b" stroke-width="10"/><path d="M78 55C50 45 55 25 72 29c13 3 13 17 6 26zm4 0c28-10 23-30 6-26-13 3-13 17-6 26z" fill="#f2b84b"/></svg>`),
  star: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="24" fill="#fff5df"/><path d="m80 20 15 41 43 2-34 26 12 42-36-24-36 24 12-42-34-26 43-2z" fill="#f2b84b" stroke="#d75d3d" stroke-width="8" stroke-linejoin="round"/><circle cx="80" cy="80" r="13" fill="#fff5df"/></svg>`),
  heart: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="24" fill="#fff5df"/><path d="M80 132C37 99 24 79 31 55c7-24 37-26 49-5 12-21 42-19 49 5 7 24-6 44-49 77z" fill="#b73574"/><path d="M48 64c4-13 20-15 29-3" fill="none" stroke="#ffe08b" stroke-width="8" stroke-linecap="round"/></svg>`)
};

const puzzleImage = svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="sky" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#8ccfc0"/><stop offset=".55" stop-color="#f7c66f"/><stop offset="1" stop-color="#d75d3d"/></linearGradient></defs><rect width="600" height="600" fill="url(#sky)"/><path d="M0 400c80-60 135-40 210-92 93-65 166-77 390-26v318H0z" fill="#2f8a70"/><path d="M122 235h356v260H122z" fill="#fff5df"/><path d="M95 245 300 92l205 153z" fill="#b73574"/><path d="M155 245 300 137l145 108z" fill="#ffe08b"/><path d="M225 495V335a75 75 0 0 1 150 0v160z" fill="#6f2d73"/><path d="M252 495V348a48 48 0 0 1 96 0v147z" fill="#2f8a70"/><circle cx="330" cy="425" r="12" fill="#ffe08b"/><path d="M91 495h418" stroke="#3b1744" stroke-width="16" stroke-linecap="round"/><circle cx="140" cy="512" r="34" fill="#d75d3d"/><circle cx="190" cy="524" r="28" fill="#f2b84b"/><circle cx="447" cy="521" r="31" fill="#b8e0c6"/><circle cx="493" cy="509" r="25" fill="#b73574"/><path d="M72 142c55 23 83-21 120 28m331-27c-55 23-83-21-120 28" fill="none" stroke="#fff5df" stroke-width="14" stroke-linecap="round"/><path d="M300 78c18 15 23 36 0 53-23-17-18-38 0-53z" fill="#f2b84b"/></svg>`);

startBtn.addEventListener("click", () => {
  document.getElementById("letters").scrollIntoView({ behavior: "smooth" });
});

letters.forEach((card) => {
  card.addEventListener("click", () => {
    const letter = familyLetters[card.dataset.letter];
    letterTitle.textContent = letter.title;
    const faceMarkup = letter.photoSrc
      ? `<img src="${letter.photoSrc}" alt="${letter.initials}">`
      : `<span>${letter.initials}</span>`;

    letterMessage.innerHTML = `
      <div class="letter-face-row">
        <div class="letter-face-placeholder">${faceMarkup}</div>
        <span>${letter.initials}'s birthday letter for Ate Maia</span>
      </div>
      ${letter.message.map((line) => `<p>${line}</p>`).join("")}
      ${letter.videoSrc ? `<iframe class="letter-video" src="${letter.videoSrc}" title="${letter.title} video message" allow="autoplay" allowfullscreen></iframe>` : ""}
    `;
    letterModal.classList.add("show");
    letterModal.setAttribute("aria-hidden", "false");
  });
});

function hideLetter() {
  letterModal.classList.remove("show");
  letterModal.setAttribute("aria-hidden", "true");
}

closeLetter.addEventListener("click", hideLetter);

letterModal.addEventListener("click", (event) => {
  if (event.target === letterModal) {
    hideLetter();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideLetter();
    hideGift();
  }
});

function showGiftIfUnlocked() {
  if (!matchGameComplete || !puzzleGameComplete || giftShown) {
    return;
  }

  giftShown = true;
  giftModal.classList.add("show");
  giftModal.setAttribute("aria-hidden", "false");
}

function hideGift() {
  giftModal.classList.remove("show");
  giftModal.setAttribute("aria-hidden", "true");
}

closeGift.addEventListener("click", hideGift);

giftModal.addEventListener("click", (event) => {
  if (event.target === giftModal) {
    hideGift();
  }
});

spinBtn.addEventListener("click", () => {
  wheelRotation += 1440 + Math.floor(Math.random() * 720);
  quoteWheel.style.transform = `rotate(${wheelRotation}deg)`;
  quoteDisplay.textContent = "Choosing a quote for Ate Maia...";

  setTimeout(() => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = `"${quote}"`;
  }, 4000);
});

function shuffleCards() {
  Array.from(gameCards)
    .sort(() => Math.random() - 0.5)
    .forEach((card) => card.parentElement.appendChild(card));
}

function prepareCardImages() {
  gameCards.forEach((card) => {
    card.style.setProperty("--card-image", cardImages[card.dataset.symbol]);
  });
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  boardLocked = false;
}

function flipCard(card) {
  if (boardLocked || card === firstCard || card.classList.contains("matched")) {
    return;
  }

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchGameComplete = Array.from(gameCards).every((card) => card.classList.contains("matched"));
    showGiftIfUnlocked();
    resetTurn();
    return;
  }

  boardLocked = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetTurn();
  }, 900);
}

gameCards.forEach((card) => {
  card.addEventListener("click", () => flipCard(card));
});

resetGameBtn.addEventListener("click", () => {
  gameCards.forEach((card) => {
    card.classList.remove("flipped", "matched");
  });
  matchGameComplete = false;
  giftShown = false;
  hideGift();
  resetTurn();
  shuffleCards();
});

function canMoveTile(index) {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const emptyRow = Math.floor(emptyTile / 3);
  const emptyCol = emptyTile % 3;

  return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
}

function renderPuzzle() {
  imagePuzzle.innerHTML = "";
  imagePuzzle.style.setProperty("--puzzle-image", puzzleImage);
  puzzlePreview.style.setProperty("--puzzle-image", puzzleImage);

  puzzleState.forEach((piece, index) => {
    const tile = document.createElement("button");
    tile.className = "puzzle-tile";
    tile.type = "button";
    tile.dataset.slot = index;

    if (piece === 8) {
      tile.classList.add("empty");
      tile.setAttribute("aria-label", "Empty puzzle space");
    } else {
      const row = Math.floor(piece / 3);
      const col = piece % 3;
      tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
      tile.setAttribute("aria-label", "Move image tile");
      tile.addEventListener("click", () => movePuzzleTile(index));
    }

    imagePuzzle.appendChild(tile);
  });
}

function movePuzzleTile(index) {
  if (!canMoveTile(index)) {
    puzzleFeedback.textContent = "Slide a tile beside the open space.";
    return;
  }

  [puzzleState[index], puzzleState[emptyTile]] = [puzzleState[emptyTile], puzzleState[index]];
  emptyTile = index;
  renderPuzzle();
  checkPuzzleSolved();
}

function checkPuzzleSolved() {
  const solved = puzzleState.every((piece, index) => piece === index);

  if (solved) {
    puzzleFeedback.textContent = "The picture is complete.";
    secretMessage.classList.add("show");
    puzzleGameComplete = true;
    showGiftIfUnlocked();
    return;
  }

  secretMessage.classList.remove("show");
}

function shufflePuzzle() {
  puzzleState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  emptyTile = 8;

  for (let i = 0; i < 80; i++) {
    const movable = puzzleState
      .map((piece, index) => index)
      .filter((index) => canMoveTile(index));
    const move = movable[Math.floor(Math.random() * movable.length)];
    [puzzleState[move], puzzleState[emptyTile]] = [puzzleState[emptyTile], puzzleState[move]];
    emptyTile = move;
  }

  puzzleFeedback.textContent = "";
  secretMessage.classList.remove("show");
  puzzleGameComplete = false;
  giftShown = false;
  hideGift();
  renderPuzzle();
}

resetPuzzleBtn.addEventListener("click", shufflePuzzle);

prepareCardImages();
shuffleCards();
shufflePuzzle();
