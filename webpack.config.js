const path = require('path');

module.exports = ({ mode } = { mode: 'production' }) => {
  return {
    mode,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      filename: 'bundle.js'
    }
  };
};
