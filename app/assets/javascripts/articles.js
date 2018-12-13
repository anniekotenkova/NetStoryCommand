
// Get element
var folder = document.GetElementById('#folder');
var folderfolder = document.GetElementById('#folderfolder');
var close-btn = document.GetElementById('#close-btn')[0];

// Events
folderfolder.addEventListener('click', openFolder);
close-btn.addEventListener('click', closeFolder);

// Open
function openFolder() {
  folder.style.display = 'block';
});

// Close
function closeFolder() {
  folder.style.display = 'none';
});
