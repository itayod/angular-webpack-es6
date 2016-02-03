var path = require('path');

module.exports = {
    
    context: path.join(__dirname,'public'),
    entry: './entry.js',
    output:{
        filename:'bundle.js'
    },
    
    // enable loading modules relatively
    resolve: {
        root: [__dirname + "/public"]
    },
    
    module: {
        loaders: [
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel', 
                query: {
                    presets: ['es2015','stage-2'],
                    plugins: ['transform-runtime']
                }
            },
            
            { test: /\.html$/, exclude: /node_modules/, loader:"raw" },
        ]
    },
    
    devtool: "#inline-source-map"
    
    
}
