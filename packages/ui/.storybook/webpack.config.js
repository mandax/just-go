module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ]
  });
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [{
      loader: require.resolve('@storybook/addon-storysource/loader'),
      options: { parser: 'typescript' }
    }],
    enforce: 'pre',
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};