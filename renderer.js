
const { clipboard } = require('electron');

const editor = document.getElementById('editor');
const findInput = document.getElementById('find-input');
const replaceInput = document.getElementById('replace-input');
const replaceBtn = document.getElementById('replace-btn');
const replaceAllBtn = document.getElementById('replace-all-btn');
const copyBtn = document.getElementById('copy-btn');
const wordCount = document.getElementById('word-count');

const marker = new Mark(editor);

editor.addEventListener('input', () => {
    const text = editor.innerText;
    const words = text.trim().split(/\s+/).filter(Boolean);
    wordCount.textContent = `${words.length} words`;
    marker.unmark();
    if (findInput.value) {
        marker.mark(findInput.value);
    }
});

editor.addEventListener('paste', (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
});

findInput.addEventListener('input', () => {
    marker.unmark();
    if (findInput.value) {
        marker.mark(findInput.value);
    }
});

replaceBtn.addEventListener('click', () => {
    const findValue = findInput.value;
    const replaceValue = replaceInput.value;
    if (findValue) {
        let editorText = editor.innerText;
        const regex = new RegExp(findValue); // No 'g' flag for single replacement
        editor.innerText = editorText.replace(regex, replaceValue);
        marker.unmark(); // Unmark existing highlights
        marker.mark(findValue); // Re-mark with updated text
    }
});

replaceAllBtn.addEventListener('click', () => {
    const findValue = findInput.value;
    const replaceValue = replaceInput.value;
    if (findValue) {
        marker.unmark();
        editor.innerText = editor.innerText.replace(new RegExp(findValue, 'g'), replaceValue);
    }
});

copyBtn.addEventListener('click', () => {
    clipboard.writeText(editor.innerText);
});

editor.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNodeContents(editor);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
});

findInput.addEventListener('click', () => {
    findInput.select();
});

replaceInput.addEventListener('click', () => {
    replaceInput.select();
});
