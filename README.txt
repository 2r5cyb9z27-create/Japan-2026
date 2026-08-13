JAPAN 2026 TRAVEL APP - VERSION 1

What this is
------------
A lightweight Progressive Web App (PWA) generated from the 20-page Japan itinerary PDF.
It runs on iPhone, Android, Mac and PC in a normal browser.

Features
--------
- 20 itinerary pages in travel sequence
- Human-readable day / location navigation
- "Open vandaag" automatically selects the relevant itinerary date during Oct 10-24, 2026
- Full-screen page viewer
- Previous / Next navigation
- Swipe left/right between pages on phones
- Offline cache after the app has been opened once
- Add-to-Home-Screen compatible manifest and icons

Important
---------
A PWA must be served over HTTPS (or localhost) for installation/offline service-worker support.
Opening index.html directly from Files will show the app, but installation/offline caching may not work.

Quick local preview on a computer
---------------------------------
1. Unzip this folder.
2. Open Terminal / Command Prompt in the folder.
3. Run: python3 -m http.server 8000
4. Open: http://localhost:8000

For iPhone / Android installation
---------------------------------
Host the folder on any normal HTTPS static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).
Then:
- iPhone Safari: Share -> Add to Home Screen
- Android Chrome: menu -> Install app / Add to Home screen

This is deliberately a Version 1: the itinerary pages are preserved exactly as designed, while the app adds navigation around them.
