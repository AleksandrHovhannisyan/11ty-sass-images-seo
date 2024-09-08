import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import { toISOString, toAbsoluteUrl } from "./lib/filters.js";
import { dir } from './lib/constants.js';
import faviconShortcode from './lib/shortcodes/favicon.js';

// Template language for the site: https://www.11ty.dev/docs/languages/liquid/
const TEMPLATE_ENGINE = 'liquid';

/**
 * @type {(eleventyConfig: import('@11ty/eleventy/src/UserConfig')) => ReturnType<import('@11ty/eleventy/src/defaultConfig')>}
 */
export default (eleventyConfig) => {
  // Watch targets
  eleventyConfig.addWatchTarget(`${dir.input}/assets/styles`);

  // Plugins
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: 'html',
    // optional, output image formats
    formats: ['jpg', 'webp'],
    // optional, output image widths
    widths: ['auto', 400, 800],
    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: 'lazy',
      sizes: '100vw',
      decoding: 'async',
    },
  });

  // Custom shortcodes
  eleventyConfig.addShortcode('favicon', faviconShortcode);

  // Custom filters
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  eleventyConfig.addFilter('toIsoString', toISOString);
  eleventyConfig.addFilter('toJson', JSON.stringify);
  eleventyConfig.addFilter('fromJson', JSON.parse);
  eleventyConfig.addFilter('keys', Object.keys);
  eleventyConfig.addFilter('values', Object.values);
  eleventyConfig.addFilter('entries', Object.entries);

  return {
    dir,
    dataTemplateEngine: TEMPLATE_ENGINE,
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    templateFormats: ['html', 'md', TEMPLATE_ENGINE],
  };
};
