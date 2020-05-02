

module.exports = {
entry: __dirname + "/client/index.jsx",
module: {
    rules: [
    {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        include: __dirname,
        use: {
        loader: "babel-loader",
        options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
    },
    ],
        },
        output: { filename: "bundle.js", path: __dirname + "/client/dist" },
};
