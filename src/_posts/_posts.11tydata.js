export default {
  layout: 'default',
  tags: ['post'],
  permalink: (data) => `/blog/${data?.page?.fileSlug}/`,
};
