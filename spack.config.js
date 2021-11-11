const { config } = require("@swc/core/spack");
const path = require("path");

module.exports = config({
  mode: "production",
  entry: {
    build: path.join(__dirname, "src/main.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  options: {
    "jsc": {
      "parser": {
        "syntax": "ecmascript"
      },
      "minify": {
        "compress": true,
        "mangle": true
      },
      "target": "es5",
      "loose": false,
      "externalHelpers": false,
      "keepClassNames": false
    },
    "module": {
      "type": "commonjs",
      "strict": true,
      "strictMode": true,
      "lazy": false,
      "noInterop": true,
      "ignoreDynamic": false
    },
    "env": {
      "mode": "entry"
    },
    "minify": true
  }
});