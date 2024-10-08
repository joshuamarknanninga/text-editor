import './editor';
import './database';
import './install';
import '../css/styles.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './editor';
import './database';
import './install';
import '../css/styles.css';

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      });
    });
  }
  