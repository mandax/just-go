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
    ],
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [{
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript' },
        }],
        enforce: 'pre',
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};