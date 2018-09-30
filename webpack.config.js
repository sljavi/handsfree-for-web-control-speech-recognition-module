const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader?cacheDirectory',
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'control-speech-recognition.js',
    library: 'controlSpeechRecognition',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      __dirname,
      path.resolve(__dirname, './node_modules')
    ]
  }
}
