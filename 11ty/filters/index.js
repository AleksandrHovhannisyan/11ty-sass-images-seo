const { default: slugify } = require('slugify');
const site = require('../../src/_data/site');

/** Converts the given string to a slug form. */
const slugifyString = (str) => {
  return slugify(str, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*?<>{}]/g,
    lower: true,
  });
};

/** Formats the given url as an absolute url. */
const toAbsoluteUrl = (url) => {
  return new URL(url, site.url).href;
};

/** Converts the given date string to ISO8610 format. */
const toISOString = (dateString) => new Date(dateString).toISOString();

module.exports = {
  slugifyString,
  toAbsoluteUrl,
  toISOString,
};
