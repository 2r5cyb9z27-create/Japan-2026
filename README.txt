JAPAN 2026 — V2.1

WHAT CHANGED
============
- Every original graphical itinerary page is ALWAYS visible.
- The graphics are the original PNG files embedded in the latest Excel workbook.
- No JPEG recompression: about 1.6–2.6 MB per page instead of ~160–220 KB.
- Tap any graphical page for a full-screen high-resolution viewer.
- Viewer supports pinch zoom, double-tap zoom, + / - and Fit.
- All V2 features remain: master.json admin workflow, Today, hotel routing,
  attraction route/website links, phrasebook + Japanese speech, print/PDF, offline cache.

IMPORTANT
=========
V2.1 is much larger (~45 MB) because the graphical pages are deliberately kept high quality.
The first load on a phone may therefore take longer, but subsequent use is cached for offline use.

GITHUB UPDATE
=============
For this upgrade, upload the entire contents of this V2.1 folder to the existing japan-2026
repository and commit directly to main. It replaces index.html, service-worker.js, manifest
and pages/, while preserving master.json.

After GitHub Pages redeploys:
1. Open the GitHub Pages URL once in Safari.
2. Refresh.
3. Fully close and reopen the Home Screen app.
If iOS still shows old cached content, remove the Home Screen icon and add it again once.

FUTURE ITINERARY EDITS
======================
Admin -> edit -> Export master.json -> replace ONLY master.json on GitHub.
You do not need Excel/PDF/app rebuilding for normal schedule changes.
