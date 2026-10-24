# Social & video kit (Editorial studio)
Recreation of the v2.1 "Estúdio de exemplos" (uploads/templates.html, index.html §05) — six layout families and three video frames, built from the component primitives.
- `Piece.jsx` — container-query frame, photo, label, highlight, avatar helpers
- `FeedLayouts.jsx` — 01 FeedEditorial, 02 FeedDiagonal, 03 FeedJournal (1080×1350)
- `VideoLayouts.jsx` — 04 ReelsCover, 05 YouTubeEditorial, 06 YouTubePhoto, VideoCaption, VideoName, VideoEnd
Controls: cream/blue base (01, 02, 05), safe-margin overlay, test photo swap, editable title for 05 (≤32 chars).
Caveat: original editorial.css was not supplied; geometry is reproduced from component-specs.md measurements + the overview screenshot. Photos are crops of the overview screenshot (low-res stand-ins).
