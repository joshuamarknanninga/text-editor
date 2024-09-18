// Get a reference to the install button
const installButton = document.getElementById('buttonInstall');

// Initialize deferredPrompt for use later
let deferredPrompt;

// Add an event listener for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI to notify the user they can install the PWA
  installButton.style.display = 'block';
});

// Add a click event handler on the install button
installButton.addEventListener('click', async () => {
  if (!deferredPrompt) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // Reset the deferredPrompt variable, since it can only be used once
  deferredPrompt = null;
  // Hide the install button
  installButton.style.display = 'none';
});

// Add an event listener for the 'appinstalled' event
window.addEventListener('appinstalled', () => {
  // Hide the install button
  installButton.style.display = 'none';
  // Log install to analytics
  console.log('PWA was installed');
});
