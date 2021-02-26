# **Vue form Using Axios**

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#   Commands to install all the dependencies
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
touch postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
touch src/assets/styles/index.css
add the following lines
@tailwind base;
@tailwind components;
@tailwind utilities;
# add the following line in
//src/main.js
import "./assets/styles/index.css";
```
If there is an error like
Error: PostCSS plugin tailwindcss requires PostCSS 8.
then run the following command
```
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
**check if some of tailwind commands are working**




