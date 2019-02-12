# Playing with outputs

> To start this exercise, be sure to be in `./packages/novice/outputs` folder.
> Be sure you have [installed this repository first](../README.md#install)

Your app will normally, more dans more code.
In order to limit your bundle size, you will try to split it in separated files.

## Adding entries

Now we will force output creation by adding another entry.
This is the current dependency tree of this small app.

```
title.js
      <- color.js
             <- node_modules/lodash
      <- main.css
             <- landscape.jpg
```

Try to add `color.js` file as an entry.
Then look at the dist folder.

::: warning
You will probably have an error when you try to add another entry.
:::

<details>
<summary>Solution</summary>

```js{4-10}
const path = require("path");

module.exports = {
  entry: {
    main: "./src/title.js",
    color: "./src/color.js"
  }, // The source module of our dependency graph
  output: {
    // Configuration of what we tell webpack to generate (here, a ./dist/main.js file)
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets",
              publicPath: "dist/assets"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
```

</details>

## Generating your index file

If you find out the little trick to let webpack generate the two bundles.
You can still open your app and it'is perfectly working.

That's nice ! :clap:

You can also notice that only the matching dependency tree is in each bundle.

But there is a issue, you browser is only getting the main bundle.
You could add manually the bundle in your index.html file.
However it will be painful to do it each time you wanted to add another bundle or just when you rename it.

Your `index.html` file could be generated by Webpack thanks to a Plugin: The [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/).
For that you have to define a `plugins` key in the webpack configuration.

<details>
<summary>Solution</summary>

```js{2,34-38}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/title.js",
    color: "./src/color.js"
  }, // The source module of our dependency graph
  output: {
    // Configuration of what we tell webpack to generate (here, a ./dist/main.js file)
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets",
              publicPath: "dist/assets"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
```

</details>

## Cleaning the `dist` folder

As you might have noticed over the past guides and code example, our /dist folder has become quite cluttered. Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project.

In general it's good practice to clean the /dist folder before each build, so that only used files will be generated. Let's take care of that.

A popular plugin to manage this is the clean-webpack-plugin so let's install and configure it.

<details>
<summary>Solution</summary>
Import your plugin and add this plugin configuration as first plugin.

```js
new CleanWebpackPlugin(['dist']),
```

</details>