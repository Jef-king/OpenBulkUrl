# OpenBulkUrl

OpenBulkUrl is a lightweight web app that helps you paste multiple website links and open them in bulk with one click.

## What it does

- Accepts one URL per line
- Counts the number of links entered
- Automatically adds `https://` when needed
- Opens each valid URL in a new browser tab
- Includes a light/dark theme toggle
- Works as a simple static website with no backend

## Project structure

```text
OpenBulkUrl/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to use

1. Open `index.html` in a browser.
2. Paste one URL per line into the textarea.
3. Click `Open URLs`.
4. The app will open each valid link in a new tab.

You can also use:
- `Ctrl + Enter` on Windows/Linux
- `Cmd + Enter` on macOS

## Theme toggle

The app includes a built-in theme switcher:
- Default light mode
- Optional dark mode
- Theme preference is saved in the browser using local storage

## Files

- `index.html` — page structure and metadata
- `styles.css` — all layout and visual styling
- `script.js` — URL parsing, counting, opening tabs, and theme logic

## Notes

This project is designed as a static front-end tool and does not require a server or database.

## License

This project is provided as-is for personal and educational use.
