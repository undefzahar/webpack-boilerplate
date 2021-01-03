<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Webpack 5 starter template</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
</div>


## Build Setup:

``` bash
# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:
Development
* `src/templates/index.html` - main app HTML
* `src/scss` - put custom app SCSS styles. Don't forget to import them in `index.js`
* `src/img` - put images here. Don't forget to use correct path: `img/content/some.jpg`
* `src/js` - put custom app scripts here
* `src/fonts` - Fonts
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components

Production
* `dist/index.html` - main app HTML
* `dist/css` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `dist/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `dist/js` - put custom app scripts here
* `dist/fonts` - fonts

<div align="center">
  <h2>Settings:</h2>
</div>