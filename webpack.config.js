module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: './dist/public',
    inline: true
  },
  module: {
loaders: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', // 'babel-loader' is also a legal name to reference
    query: {
      presets: ['es2015', 'react']
    }
  }
]
}
}
