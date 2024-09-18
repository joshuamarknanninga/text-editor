// Import CodeMirror and necessary modes
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

// Import IndexedDB methods
import { getDb, putDb } from './database';

// Initialize the editor
const initEditor = async () => {
  // Get the existing content from IndexedDB
  const content = await getDb();

  // Create a new CodeMirror instance
  const editor = CodeMirror(document.getElementById('editor'), {
    value: content || '',
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true,
  });

  // Add an event listener to handle changes
  editor.on('change', () => {
    // Get the current value
    const currentContent = editor.getValue();

    // Save the content to IndexedDB
    putDb(currentContent);
  });

  // Save content when the window loses focus
  window.addEventListener('blur', () => {
    putDb(editor.getValue());
  });
};

// Call the initialization function when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', initEditor);
