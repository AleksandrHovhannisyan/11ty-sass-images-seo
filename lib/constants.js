import { join } from 'node:path';

/** 11ty directory config */
export const dir = {
  input: 'src',
  output: '_site',
  includes: '_includes',
  layouts: '_layouts',
  data: '_data',
};

export const imageUrlPath = '/assets/images';
export const imagePaths = {
  input: join(dir.input, imageUrlPath),
  output: join(dir.output, imageUrlPath),
};
