const sounds = [
  { id: "applause", title: "Applause", icon: "👏", category: "Cheers", color: "#ffcf54", file: "applause.mp3" },
  { id: "crowd-applause", title: "Big Applause", icon: "🙌", category: "Cheers", color: "#ff9f43", file: "crowd-applause.mp3" },
  { id: "yes-sir", title: "Yes Sir", icon: "🫡", category: "Cheers", color: "#67d391", file: "yes-sir.mp3" },
  { id: "wow", title: "Anime Wow", icon: "✨", category: "Cheers", color: "#70d7f2", file: "wow.mp3" },
  { id: "yeah-boy", title: "Yeah Boy", icon: "😎", category: "Cheers", color: "#a88bff", file: "yeah-boy.mp3" },
  { id: "ding", title: "Correct!", icon: "✓", category: "Classroom", color: "#67d391", file: "ding.mp3" },
  { id: "wrong-answer", title: "Wrong Answer", icon: "✕", category: "Classroom", color: "#ff6e5b", file: "wrong-answer.mp3" },
  { id: "thinking-time", title: "Thinking Time", icon: "⏳", category: "Classroom", color: "#ffcf54", file: "thinking-time.mp3" },
  { id: "three-two-one", title: "3, 2, 1, Go!", icon: "🏁", category: "Classroom", color: "#61c7ff", file: "three-two-one-go.mp3" },
  { id: "few-moments", title: "A Few Moments Later", icon: "⌛", category: "Classroom", color: "#e7a66f", file: "few-moments-later.mp3" },
  { id: "let-them-cook", title: "Let Them Cook", icon: "🍳", category: "Classroom", color: "#ff9f43", file: "let-them-cook.mp3" },
  { id: "no-problem-hook", title: "No Problem (Quick)", icon: "😏", category: "Classroom", color: "#69c7a5", file: "no-problem-clean-hook.mp3" },
  { id: "no-problem-ramp", title: "No Problem (Ramp)", icon: "📈", category: "Classroom", color: "#8a7cf0", file: "no-problem-ramp-clean.mp3" },
  { id: "epic", title: "Epic Moment", icon: "🏆", category: "Drama", color: "#f3cf5b", file: "epic.mp3" },
  { id: "dun-dun-dun", title: "Dun Dun Dun", icon: "🎺", category: "Drama", color: "#ff765f", file: "dun-dun-dun.mp3" },
  { id: "undertaker", title: "The Bell", icon: "🔔", category: "Drama", color: "#9f8aff", file: "undertaker-bell.mp3" },
  { id: "role-reveal", title: "Role Reveal", icon: "👀", category: "Drama", color: "#ec668d", file: "role-reveal.mp3" },
  { id: "sad-trombone", title: "Sad Trombone", icon: "📉", category: "Drama", color: "#6e9cf6", file: "sad-trombone.mp3" },
  { id: "oh-no", title: "Oh No", icon: "😬", category: "Drama", color: "#ef778b", file: "oh-no.mp3" },
  { id: "fail", title: "Fail", icon: "🫠", category: "Drama", color: "#7bb5e9", file: "fail.mp3" },
  { id: "applause-boo", title: "Applause & Boo", icon: "🎭", category: "Drama", color: "#e88ba9", file: "applause-boo.mp3" },
  { id: "vine-boom", title: "Vine Boom", icon: "💥", category: "Impact", color: "#ff5f4d", file: "vine-boom.mp3" },
  { id: "metal-pipe", title: "Metal Pipe", icon: "🔩", category: "Impact", color: "#a4abb5", file: "metal-pipe.mp3" },
  { id: "airhorn", title: "Airhorn", icon: "📣", category: "Impact", color: "#f44f66", file: "airhorn.mp3" },
  { id: "mlg-airhorn", title: "Mega Airhorn", icon: "🚨", category: "Impact", color: "#ff884d", file: "mlg-airhorn.mp3" },
  { id: "error", title: "Error", icon: "⚠", category: "Impact", color: "#ef5350", file: "error.mp3" },
  { id: "bell-bong", title: "Bell Bong", icon: "🔔", category: "Impact", color: "#d6ad52", file: "bell-bong.mp3" },
  { id: "oof", title: "Oof", icon: "🧱", category: "Memes", color: "#68b2e8", file: "oof.mp3" },
  { id: "roblox-death", title: "Game Over", icon: "☠️", category: "Memes", color: "#a78cf5", file: "roblox-death.mp3" },
  { id: "bruh", title: "Bruh", icon: "😐", category: "Memes", color: "#a9a49a", file: "bruh.mp3" },
  { id: "brother-ew", title: "Brother, Ew", icon: "🤢", category: "Memes", color: "#a8cd55", file: "brother-ew.mp3" },
  { id: "baby-laugh", title: "Baby Laugh", icon: "😂", category: "Memes", color: "#f3a7bf", file: "baby-laugh.mp3" },
  { id: "aura", title: "Aura", icon: "🪄", category: "Memes", color: "#9b81f3", file: "aura.mp3" },
  { id: "rizz", title: "Rizz", icon: "🌹", category: "Memes", color: "#ee7898", file: "rizz.mp3" },
  { id: "fah", title: "Fahhh", icon: "😱", category: "Memes", color: "#e78563", file: "fah.mp3" },
  { id: "where-going", title: "Where Are You Going?", icon: "🏃", category: "Memes", color: "#6fcac0", file: "where-going.mp3" },
  { id: "ack", title: "Ack!", icon: "😵", category: "Memes", color: "#d59aec", file: "ack.mp3" }
];

const categoryOrder = ["All", "Favorites", "Classroom", "Cheers", "Drama", "Impact", "Memes", "My sounds"];
const state = {
  activeCategory: "All",
  search: "",
  volume: Number(localStorage.getItem("class-instants-volume") ?? 78) / 100,
  muted: false,
  mix: localStorage.getItem("class-instants-mode") === "mix",
  favorites: new Set(JSON.parse(localStorage.getItem("class-instants-favorites") || "[]")),
  customSounds: [],
  activeAudio: new Map()
};

const el = {
  grid: document.querySelector("#sound-grid"),
  filters: document.querySelector("#filters"),
  count: document.querySelector("#result-count"),
  search: document.querySelector("#search"),
  empty: document.querySelector("#empty-state"),
  now: document.querySelector("#now-playing"),
  nowTitle: document.querySelector("#now-title"),
  volume: document.querySelector("#volume"),
  mute: document.querySelector("#mute-button"),
  volumeIcon: document.querySelector("#volume-icon"),
  mode: document.querySelector("#mode-button"),
  modeLabel: document.querySelector("#mode-label"),
  toast: document.querySelector("#toast")
};

let toastTimer;

function currentSounds() {
  const allSounds = [...sounds, ...state.customSounds];
  const query = state.search.trim().toLowerCase();
  return allSounds.filter((sound) => {
    const categoryMatch = state.activeCategory === "All"
      || (state.activeCategory === "Favorites" && state.favorites.has(sound.id))
      || state.activeCategory === sound.category;
    const searchMatch = !query || `${sound.title} ${sound.category}`.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
}

function categoryCount(category) {
  if (category === "All") return sounds.length + state.customSounds.length;
  if (category === "Favorites") return state.favorites.size;
  return [...sounds, ...state.customSounds].filter((sound) => sound.category === category).length;
}

function renderFilters() {
  el.filters.innerHTML = categoryOrder.map((category) => `
    <button class="filter-button" type="button" data-category="${category}" aria-pressed="${state.activeCategory === category}">
      ${category}<span>${categoryCount(category)}</span>
    </button>
  `).join("");
}

function renderSounds() {
  const visible = currentSounds();
  el.count.textContent = visible.length;
  el.empty.hidden = visible.length !== 0;
  el.grid.hidden = visible.length === 0;
  el.grid.innerHTML = visible.map((sound, index) => `
    <article class="sound-card" data-sound-id="${sound.id}" style="--sound:${sound.color}">
      ${index < 9 ? `<span class="key-badge" aria-hidden="true">${index + 1}</span>` : ""}
      <button class="sound-button" type="button" data-play="${sound.id}" aria-label="Play ${sound.title}">
        <span aria-hidden="true">${sound.icon}</span>
      </button>
      <div class="sound-meta">
        <div class="sound-copy">
          <strong title="${sound.title}">${sound.title}</strong>
          <small>${sound.category}</small>
        </div>
        <button class="favorite-button" type="button" data-favorite="${sound.id}" aria-label="${state.favorites.has(sound.id) ? "Remove from" : "Add to"} favorites" aria-pressed="${state.favorites.has(sound.id)}">★</button>
      </div>
    </article>
  `).join("");
}

function findSound(id) {
  return [...sounds, ...state.customSounds].find((sound) => sound.id === id);
}

function playSound(sound) {
  if (!sound) return;
  if (!state.mix) stopAll(false);

  const audio = new Audio(sound.url || `./audio/${sound.file}`);
  audio.volume = state.muted ? 0 : state.volume;
  const token = `${sound.id}-${Date.now()}-${Math.random()}`;
  state.activeAudio.set(token, { audio, sound });
  markPlaying(sound.id, true);
  updateNowPlaying(sound.title);

  const cleanUp = () => {
    state.activeAudio.delete(token);
    if (![...state.activeAudio.values()].some((item) => item.sound.id === sound.id)) markPlaying(sound.id, false);
    if (state.activeAudio.size === 0) hideNowPlaying();
  };
  audio.addEventListener("ended", cleanUp, { once: true });
  audio.addEventListener("error", () => {
    cleanUp();
    showToast(`Couldn’t play “${sound.title}”`);
  }, { once: true });
  audio.play().catch(() => {
    cleanUp();
    showToast("Your browser blocked playback. Tap the button again.");
  });
}

function stopAll(showMessage = true) {
  state.activeAudio.forEach(({ audio, sound }) => {
    audio.pause();
    audio.currentTime = 0;
    markPlaying(sound.id, false);
  });
  state.activeAudio.clear();
  hideNowPlaying();
  if (showMessage) showToast("All sounds stopped");
}

function markPlaying(id, playing) {
  document.querySelector(`[data-sound-id="${CSS.escape(id)}"]`)?.classList.toggle("is-playing", playing);
}

function updateNowPlaying(title) {
  el.nowTitle.textContent = state.mix && state.activeAudio.size > 1 ? `${state.activeAudio.size} sounds mixing` : title;
  el.now.classList.add("is-visible");
  el.now.setAttribute("aria-hidden", "false");
}

function hideNowPlaying() {
  el.now.classList.remove("is-visible");
  el.now.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => el.toast.classList.remove("is-visible"), 1800);
}

function syncVolume() {
  const level = state.muted ? 0 : state.volume;
  state.activeAudio.forEach(({ audio }) => { audio.volume = level; });
  el.mute.classList.toggle("is-muted", state.muted);
  el.mute.setAttribute("aria-label", state.muted ? "Unmute sounds" : "Mute sounds");
  el.volumeIcon.textContent = state.muted || state.volume === 0 ? "◖×" : state.volume < 0.45 ? "◖)" : "◖))";
}

function syncMode() {
  el.mode.setAttribute("aria-pressed", String(state.mix));
  el.modeLabel.textContent = state.mix ? "Mix mode" : "Solo mode";
  el.mode.title = state.mix ? "Sounds may overlap" : "Playing a sound stops the previous one";
}

el.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.activeCategory = button.dataset.category;
  renderFilters();
  renderSounds();
});

el.grid.addEventListener("click", (event) => {
  const playButton = event.target.closest("[data-play]");
  const favoriteButton = event.target.closest("[data-favorite]");
  if (playButton) playSound(findSound(playButton.dataset.play));
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
    localStorage.setItem("class-instants-favorites", JSON.stringify([...state.favorites]));
    renderFilters();
    renderSounds();
  }
});

el.search.addEventListener("input", () => {
  state.search = el.search.value;
  renderSounds();
});

el.volume.value = Math.round(state.volume * 100);
el.volume.addEventListener("input", () => {
  state.volume = Number(el.volume.value) / 100;
  state.muted = false;
  localStorage.setItem("class-instants-volume", String(el.volume.value));
  syncVolume();
});

el.mute.addEventListener("click", () => { state.muted = !state.muted; syncVolume(); });
el.mode.addEventListener("click", () => {
  state.mix = !state.mix;
  localStorage.setItem("class-instants-mode", state.mix ? "mix" : "solo");
  syncMode();
  showToast(state.mix ? "Mix mode: sounds can overlap" : "Solo mode: one sound at a time");
});

document.querySelector("#stop-button").addEventListener("click", () => stopAll());
document.querySelector("#dock-stop").addEventListener("click", () => stopAll());
document.querySelector("#random-button").addEventListener("click", () => {
  const visible = currentSounds();
  if (visible.length) playSound(visible[Math.floor(Math.random() * visible.length)]);
});
document.querySelector("#reset-search").addEventListener("click", () => {
  state.activeCategory = "All";
  state.search = "";
  el.search.value = "";
  renderFilters();
  renderSounds();
});

document.querySelector("#sound-upload").addEventListener("change", (event) => {
  const additions = [...event.target.files].map((file, index) => ({
    id: `custom-${Date.now()}-${index}`,
    title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    icon: "🎙️",
    category: "My sounds",
    color: ["#67d391", "#ffcf54", "#70d7f2", "#ec668d"][index % 4],
    url: URL.createObjectURL(file)
  }));
  state.customSounds.push(...additions);
  state.activeCategory = "My sounds";
  state.search = "";
  el.search.value = "";
  renderFilters();
  renderSounds();
  showToast(`${additions.length} sound${additions.length === 1 ? "" : "s"} added for this session`);
  event.target.value = "";
});

document.querySelector("#help-button").addEventListener("click", () => document.querySelector("#help-dialog").showModal());

document.addEventListener("keydown", (event) => {
  const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);
  if (event.key === "/" && !typing) {
    event.preventDefault();
    el.search.focus();
  }
  if (event.key === "Escape") stopAll();
  if (event.code === "Space" && !typing && document.activeElement.tagName !== "BUTTON") {
    event.preventDefault();
    stopAll();
  }
  if (/^[1-9]$/.test(event.key) && !typing) {
    const sound = currentSounds()[Number(event.key) - 1];
    if (sound) playSound(sound);
  }
});

window.addEventListener("beforeunload", () => state.customSounds.forEach((sound) => sound.url && URL.revokeObjectURL(sound.url)));

renderFilters();
renderSounds();
syncVolume();
syncMode();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
