const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          "useBabel": true,
          "babelOptions": {
              "babelrc": false, /* Important line */
              "presets": [
                ["@babel/preset-env", { "targets": "last 2 versions, ie 11", "modules": false }],
                "@babel/preset-react"
              ]
          },
          "babelCore": "@babel/core", // needed for Babel v7
        }
      },
    ],
  });
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['postcss-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};