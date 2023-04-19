//your JS code here. If required.
const div = document.getElementById('browser-info');
const info = navigator.userAgent;
div.innerText = 'You are using ' + info;