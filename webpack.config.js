module.exports = {
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          ]
        }
      ]
        //loaders: [{
            //test: /\.jsx$/,
            //exclude: /node_modules/,
            //loader: 'babel-loader',
            //query: {
                //presets: ['react', 'es2015']
            //}
        //}]
    }
}
