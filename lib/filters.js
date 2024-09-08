import slugify from 'slugify';
import site from '../src/_data/site.js';

/** Converts the given string to a slug form.
 * @param {string} str
 */
export const slugifyString = (str) => {
  return slugify(str, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*?<>{}]/g,
    lower: true,
  });
};

/** Formats the given url as an absolute url.
 * @param {string} url
 */
export const toAbsoluteUrl = (url, baseUrl = site.url) => {
  return new URL(url, baseUrl).href;
};

/** Converts the given date string to ISO8610 format.
 * @param {Date|string} date
 */
export const toISOString = (date) => new Date(date).toISOString();
