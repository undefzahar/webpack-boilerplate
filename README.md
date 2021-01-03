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
* `src/js` - put custom scripts here
* `src/fonts` - put fonts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components

Production
* `dist/index.html` - main app HTML
* `dist/css` - CSS styles
* `dist/img` - images
* `dist/js` - scripts
* `dist/fonts` - fonts

Configuration
* `configuration/environment.js` - 
* `configuration/webpack.dev.config.js` - 
* `configuration/webpack.prod.config.js` - 
* `webpack.config.js` - 
* `package.json` - 

<div align="center">
  <h2>Settings:</h2>
</div>

## Import Another libs:
1. Install libs
2. Import libs in `src/index.js`
``` js
// Vue example
import Vue from 'vue'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import SASS or CSS libs:
1. Install libs
2. Go to `src/scss/app.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import 'bootstrap/dist/scss/bootstrap-grid.min';
// CSS librarys example:
@import 'bootstrap/dist/css/bootstrap-grid.min.css';
```
or local file

1. put the library in `src/scss/base/libs.scss`
2. Go to `src/scss/app.scss`
3. Import libs
``` scss
// Local style file:
@import 'base/libs';
```

## Import js files:
1. Create another js module in `src/js/` folder
2. Import modules in `src/js/scrupt.js` file
``` js
// another js file for example
import 'common.js'
```

## HTML Dir Folder:
#### Default:
* .html dir: `./src`
* Configurations: in `./build/webpack.base.conf.js`
``` js
const PAGES_DIR = PATHS.src
```
**Usage:**
All files must be created in the `./src` folder.
Example:
``` bash
./src/index.html
./src/about.html
```

#### Change HTML Default Dir Folder:
Example for `./src/pages`:
1. Create folder for all html files in `./src`. Be like: `./src/pages`
2. Change `./build/webpack.base.conf.js` const PAGES_DIR:
``` js
// Old path
// const PAGES_DIR = PATHS.src

// Your new path
const PAGES_DIR = `${PATHS.src}/pages`
```
3. Rerun webpack dev server


**Usage:**
All files must be created in the `./src/pages` folder.
Example:
``` bash
./src/pages/index.html
./src/pages/about.html
```

## Create Another HTML Files:
#### Default: 
Automatic creation any html pages:
1. Create another html file in `./src` (main folder)
2. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)
See more - [commit](https://github.com/vedees/webpack-template/commit/249e3ae3b4973a7300f271045178f9f5f431bb89)

#### Second method:
Manual (not Automaticlly) creation any html pages (Don't forget to RERUN dev server and COMMENT lines above)
1. Create another html file in `./src` (main folder)
2. Go to `./build/webpack.base.conf.js`
3. Comment lines above (create automaticlly html pages)
4. Create new page in html:
``` js
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.html`,
      filename: './index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/another.html`,
      filename: './another.html',
      inject: true
    }),
```
5. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)

#### Third method: (BEST)
Сombine the first method and the second.
Example:
``` js
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page}`
    })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/index.html`,
      filename: './about/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/portfolio.html`,
      filename: './about/portfolio.html',
      inject: true
    }),
```


## Vue install:
Default: **already have**

1. Install vue
``` bash
npm install vue --save
```
2. Init vue `index.js`:
``` js
const app = new Vue({
  el: '#app'
})
```
3. Create div id app
``` html
<div id="app">
  <!-- content -->
</div>
```

## Vuex install:
1. Install vuex
``` bash
npm install vuex --save
```
2. Import Vuex
``` js
import store from './store'
```
3. Create index.js in `./store`
``` js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // vuex content
})
```

## Add Vue Components:
Create your component in `/components/`

**HTML Usage:**
1. Init component in `index.js`:
``` js
Vue.component('example-component', require('./components/Example.vue').default)
```
2. Any html files:
``` html
 <example-component />
```

**VUE Usage:**
1. import components in .vue:
``` js
import example from '~/components/Example.vue'
```
2. Register component:
``` js
  components: {
    example
  }
```
3. Init in vue component:
``` html
<example />
```

## Add Fonts:

Сhoose one of the ways:
1. Handle menthod,
2. Use mixin;

### Handle:
Add @font-face in `/assets/scss/utils/fonts.scss`:

``` scss
// Example with Helvetica
@font-face {
  font-family: "Helvetica-Base";
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot'); /* IE9 Compat Modes */
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.woff') format('woff'), /* Pretty Modern Browsers */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.svg') format('svg'); /* Legacy iOS */
}
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mySecontFont : 'Helvetica-Base', Arial, sans-serif;
```

### Or with mixin:
By default template support only modern format fonts: .woff, .woffs;

If ypu need svg or more formaths use another mixin in `src/assets/scss/utils/mixin.scss`

**Usage:**
1. Put your font to `src/assets/fonts/FOLDERNAME/FONTNAME`.
FOLLOW: Files Required: 
Example: `.woff, .woffs` formats;
2. Go to `fonts.scss`;
3. Use mixin
Example: `@include font-face("OpenSans", "../fonts/OpenSans/opensans");`,
Example 2: `@include font-face("OpenSans", "../fonts/OpenSans/opensansItalic", 400, italic);`.
