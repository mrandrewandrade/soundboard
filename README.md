# Class Instants

A classroom-friendly instant soundboard built from the curated audio library in the adjacent `video-editor` project.

Live site: <https://mrandrewandrade.github.io/soundboard/>

## Use it

Double-click **Launch Class Instants.cmd**. It starts a small local server and opens the board in your browser. Close the minimized **Class Instants Server** window when you are finished.

No internet connection is required. The board includes 37 bundled sounds and also lets you add temporary audio files for the current browser session.

## Controls

- Click or tap any large coloured button to play it.
- Press `1`–`9` to play the first nine visible sounds.
- Press `/` to search and `Esc` to stop everything.
- **Solo mode** stops the previous clip; **Mix mode** allows overlap.
- Favorites, volume, and playback mode are remembered in the browser.

## Project structure

The complete static site is in `dist/`. It has no build step or third-party runtime dependencies.

The published site is served from the repository's `gh-pages` branch.
