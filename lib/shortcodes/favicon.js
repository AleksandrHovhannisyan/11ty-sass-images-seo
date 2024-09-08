import Image from '@11ty/eleventy-img';
import site from '../../src/_data/site.js';
import { imagePaths, imageUrlPath } from '../constants.js';

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

export default faviconShortcode;
