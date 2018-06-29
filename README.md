# travel-site
Nicely configured GULP + WEBPACK + BABEL project

## gulp watch for dev
  ./app/index.html
  ./app/assets/styles/**/*.css  form PostCss
  ./app/assets/scripts/**/*.js
  ./app/temp/styles/styles.css for normalozed css

## gulp build for prod
  ./dist/index.html minified Html
  ./distdist/styles/ for minified CSS
  ./dist/scripts/ for minified JS
  ./dist/assets/images for compressed Images
  
## npm run build to start webpack + babel
  webpack output file 'App-bundle.js'
  babel preset: ['es2015']
