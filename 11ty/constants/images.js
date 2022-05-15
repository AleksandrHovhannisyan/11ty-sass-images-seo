const path = require('path');
const dir = require('./dir');

const imageUrlPath = '/assets/images';

const imagePaths = {
  input: path.join(dir.input, imageUrlPath),
  output: path.join(dir.output, imageUrlPath),
};

module.exports = {
  imageUrlPath,
  imagePaths,
};
