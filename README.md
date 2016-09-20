## Website Performance Optimization portfolio project

### For index.html
- Added [media="screen"] to the style.css to every HTML file.
- Added [media="print"] to the print.css to every HTML file.
- Added async to every Google Analytics script.

### For main.js
- Modified changePizzaSizes to ensure querySelectorAll wasn't repetitive.
- For updatePositions, added a var cachedScrollTop and used it within the function to avoid rendering the entire webpage on every scroll.
