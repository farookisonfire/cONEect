module.exports = {
  devtool: 'source-map',
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
  },
  {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
]
}
}
