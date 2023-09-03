const webpack = require('webpack');
const path = require('path');

const serverPath = path.resolve(__dirname, '../output/proj2');

module.exports = (env, argv) => {
  const config = {
    target: 'node',
    devtool: 'source-map',
    entry: {
      index: path.resolve(__dirname, './index'),
    },
    output: {
      filename: '[name].js',
      path: serverPath,
    },
    optimization: {
      minimize: false,
    },
    context: __dirname,
    node: {
      __filename: true,
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'esbuild-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      fallback: {
        fs: false,
        module: false,
      },
      modules: [
        'node_modules',
      ],
      alias: {
        '@shared': path.resolve(__dirname, '../shared'),
      },
      extensions: ['.js', '.json', '.ts'],
    },
  };

  return config;
};
