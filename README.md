# Pilates studio


# Getting started

After checking out the repo, run:

```
npm install
npm start
```

open http://localhost:3000 

`HtmlWebpackPlugin` in `webpack.config.js` like this:

```
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.ja.pug',
        filename: 'index.html',
        inject: false
      }
    )
  ]
```