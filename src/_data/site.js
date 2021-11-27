const environmentSpecificVariables = {
  development: {
    url: 'http://localhost:8080',
  },
  production: {
    url: '',
  },
};

module.exports = {
  title: '',
  author: '',
  email: '',
  description: '',
  keywords: [],
  language: 'en-US',
  ...environmentSpecificVariables[process.env.ELEVENTY_ENV],
};
