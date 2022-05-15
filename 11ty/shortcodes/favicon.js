const Image = require('@11ty/eleventy-img');
const site = require('../../src/_data/site');
const { imagePaths, imageUrlPath } = require('../constants/images');

/** Returns link tags for the site's favicon. */
async function faviconShortcode(src) {
  const props = {
    widths: site.favicon.widths,
    formats: [site.favicon.format],
    outputDir: imagePaths.output,
    urlPath: imageUrlPath,
  };

  const metadata = await Image(src, props);

  return metadata[site.favicon.format]
    .map((image) => `<link rel="icon" href="${image.url}" sizes="${image.width}x${image.width}">`)
    .join('\n');
}

module.exports = faviconShortcode;
