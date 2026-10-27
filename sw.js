const CACHE = "class-instants-v2";
const APP_SHELL = [
  "./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon.svg"
];
const AUDIO = [
  "ack.mp3", "airhorn.mp3", "applause-boo.mp3", "applause.mp3", "aura.mp3", "baby-laugh.mp3",
  "bell-bong.mp3", "brother-ew.mp3", "bruh.mp3", "crowd-applause.mp3", "ding.mp3", "dun-dun-dun.mp3",
  "epic.mp3", "error.mp3", "fah.mp3", "fail.mp3", "few-moments-later.mp3", "let-them-cook.mp3",
  "metal-pipe.mp3", "mlg-airhorn.mp3", "oh-no.mp3", "oof.mp3", "rizz.mp3", "roblox-death.mp3",
  "no-problem-clean-hook.mp3", "no-problem-ramp-clean.mp3",
  "role-reveal.mp3", "sad-trombone.mp3", "thinking-time.mp3", "three-two-one-go.mp3", "undertaker-bell.mp3",
  "vine-boom.mp3", "where-going.mp3", "wow.mp3", "wrong-answer.mp3", "yeah-boy.mp3", "yes-sir.mp3"
].map((file) => `./audio/${file}`);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([...APP_SHELL, ...AUDIO])).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
