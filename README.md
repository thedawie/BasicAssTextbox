# BasicAssTextbox

A simple Electron app to remove text formatting from copied text.

## Features
- Paste text and remove formatting instantly
- Native menu bar support
- Cross-platform (macOS, Windows, Linux)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/)

### Install dependencies
```sh
npm install
```

### Run the app in development
```sh
npm start
```

### Package the app for macOS
This will create a native `.app` in the project directory (for both Apple Silicon and Intel Macs):
```sh
npm run package-mac
```
The packaged app will be in `BasicAssTextbox-darwin-arm64/` and/or `BasicAssTextbox-darwin-x64/`.

## Usage
1. Open the app.
2. Paste or type your text into the window.
3. Copy the cleaned, unformatted text for use anywhere.

## License
ISC
