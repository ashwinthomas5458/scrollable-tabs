# scrollable-tabs

A React (Create React App) exercise implementing a scrollable, dynamic tab component (page heading: "Interview Task – Scollable Tabs").

## Overview

`src/App.js` renders `TabComponent` from `src/components/tabComponent`. The component keeps the tab list and the active tab in state, starts from sample tab data ("Tab 1 Content", "Tab 2 Content", …), and supports adding a new tab through a modal (`addNewTab.js`) and removing a tab through a confirmation modal (`confirmationModal.js`), with animated modal transitions. Styles are in `tabComponent.css` and `src/app.css`.

There are no runtime dependencies beyond React.

## Scripts

```
npm start       # development server on http://localhost:3000
npm run build   # production build
npm test        # test runner
```
