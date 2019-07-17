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
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};