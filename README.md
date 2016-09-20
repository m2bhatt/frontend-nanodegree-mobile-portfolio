## Website Performance Optimization portfolio project

### Run instructions
- You can access the site using - http://m2bhatt.github.io/frontend-nanodegree-mobile-portfolio/

- Or you can use ngrok to run the site by following the instructions below:

1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

2. Open a browser and visit localhost:8080
3. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080

### For index.html
- Added [media="screen"] to the style.css to every HTML file.
- Added [media="print"] to the print.css to every HTML file.
- Added async to every Google Analytics script.
- Moved the .css files to the end of the page (right before the `</body>` tag)

### For main.js
- Modified changePizzaSizes to ensure querySelectorAll wasn't repetitive.
- For updatePositions, added a var cachedScrollTop and used it within the function to avoid repeating the query scrollTop position multiple times.
