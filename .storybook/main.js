module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    // Without stats = false, building will generate an error at node_modules/@storybook/builder-webpack5/dist/cjs/index.js:181
    // TypeError: Cannot read property 'forEach' of undef
    config.stats = false;

    return config;
  },
};
