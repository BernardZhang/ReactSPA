const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

const webpack = require('webpack');

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
const DEBUG = true;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;


const deps = [
  // 'react/dist/react.min.js',
  // 'react-dom/dist/react-dom.min.js'
];

const common = {

  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  // entry: PATHS.app,
  entry: {
    app: [path.join(PATHS.app, '/app.jsx')],
    about: [path.join(PATHS.app, '/views/About.jsx')],
    inbox: [path.join(PATHS.app, '/views/Inbox.jsx')],
    message: [path.join(PATHS.app, '/views/Message.jsx')],
    vendors: ['react', 'react-dom', 'react-router']
  },
  // Add resolve.extensions. '' is needed to allow imports
  // without an extension. Note the .'s before extensions!!!
  // The matching will fail without!
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },
  output: {
    path: PATHS.build,
    filename: DEBUG ? '[name].js' : '[name].[hash].js'
    // filename: 'app.js'
  },
  module: {
    noParse: [],
    loaders: [
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      // LESS
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        // loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'survivejs-kanban']
        },
        include: PATHS.app
        // exclude: [node_modules_dir]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'ReactSPA',
      appMountId: 'app',
      chunks: ['vendors', 'app']
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', DEBUG ? 'vendors.[hash].js' : 'vendors.js')
  ]
};

// Run through deps and extract the first part of the path, 
// as that is what you use to require the actual node modules 
// in your code. Then use the complete path to point to the correct
// file and make sure webpack does not try to parse it
// deps.forEach(function (dep) {
//   var depPath = path.resolve(node_modules_dir, dep);
//   common.resolve.alias[dep.split(path.sep)[0]] = depPath;
//   common.module.noParse.push(depPath);
// });


// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    devtool: 'eval-source-map',
    
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
