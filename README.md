# NIT Puducherry Wi-Fi portal

Static front-end demo. It keeps both the Terms page (`index.html`) and the Sign-in page (`login.html`).

The demo accepts IDs in this format: `cs|ec|ee|me|ce + YY + b|m + 4 digits` — for example, `cs23b1045`. The matching local-demo password is `cs23b1045@nitpy!`. No credential is sent or stored.

For real Wi-Fi access, replace this demo validation with the authorised NIT captive-portal/RADIUS backend over HTTPS.


## Liquid Glass redesign

The interface has been redesigned as a full Liquid Glass / frosted-glass UI:
- translucent layered surfaces
- backdrop blur and saturation
- glass navigation and status pills
- frosted inputs and buttons
- translucent network information cards
- soft ambient background lighting
- responsive mobile layout

The existing demo logic and HTML structure are preserved.


### Rounded Liquid Glass update
The network panel now has rounded outer corners, glass edge highlights, softer inner cards, hover depth, and matching mobile bottom corners.


### Final rounded-panel refinement
- All four desktop network-panel corners are rounded.
- The panel has a small outer margin so its glass edge is visible.
- Network/Encryption/Support cards have increased height and line spacing.
- Text now wraps safely and does not overlap.
- Mobile keeps the bottom-only rounded shape without creating an unwanted gap.


### Content alignment update
The network panel contents now have a consistent left/right inset. The Network, Encryption, Support, and Need Help cards no longer sit too close to the panel edge.


### Final spacing and overlap fix
The Network, Encryption, Support, and Need Help cards now use fixed minimum heights, vertical flex alignment, larger internal padding, consistent margins, and safe text wrapping. Media-query overrides were corrected so the desktop compact layout no longer squeezes the content.


### Extra spacing refinement
Increased the internal padding, card height, vertical gaps, label/value spacing, and Help card spacing so text stays clearly away from the rounded glass edges.


### Compact centered network panel
The Network/Encryption/Support cards are now smaller, with centered labels and values, tighter but safe spacing, and a compact centered Need Help card.
