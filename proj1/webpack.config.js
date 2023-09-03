const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientPath = path.resolve(__dirname, '../output/proj1');

module.exports = (env, argv) => {
  const config = {
    target: 'web',
    devtool: 'source-map',
    entry: {
      index: path.resolve(__dirname, './', 'index'),
    },
    output: {
      filename: '[name].js',
      path: clientPath,
      assetModuleFilename: 'assets/[hash][ext][query]',
    },
    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['index'],
        scriptLoading: 'blocking',
        title: 'TEST',
        template: path.resolve(__dirname, './', 'index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          loader: 'esbuild-loader',
        },
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: argv.mode === 'development',
              },
              emitCss: true,
            },
          },
        },
      ],
    },
    resolve: {
      fallback: {
        fs: false,
        module: false,
        crypto: false,
        util: false,
      },
      modules: [
        'node_modules',
      ],
      alias: {
        '@shared': path.resolve(__dirname, '../shared'),
        svelte: path.resolve('node_modules', 'svelte/src/runtime'),
      },
      extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
      conditionNames: ['svelte', 'browser', 'import'],
    },
  };

  return config;
};
