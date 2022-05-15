const Image = require('@11ty/eleventy-img');
const { imagePaths, imageUrlPath } = require('../constants/images');

/** Returns optimized image markup. Expects to receive a root-relative absolute path to the image (e.g., src/assets/images/image.png).
 * Example usage: `{% image 'src/assets/images/image.png', 'Alt text' %}`.
 */
async function imageShortcode(src, alt = '', widths = [300, 600], formats = ['avif', 'jpeg'], sizes = '100vw') {
  const metadata = await Image(src, {
    widths,
    formats,
    // e.g., _site/assets/images/
    outputDir: imagePaths.output,
    // e.g., /assets/images/name.extension
    urlPath: imageUrlPath,
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode;
