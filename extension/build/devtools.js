/* This file is included as a script tag in devtools.html.
   Its only purpose is to create the devtools panel. */
chrome.devtools.panels.create('Chromogen', null, 'panel.html', null);
// args - panel title, icon, html, and a callback function.