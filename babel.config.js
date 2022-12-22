module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~/',
            rootPathSuffix: './src',
          },
          {
            rootPathPrefix: '~assets/',
            rootPathSuffix: './assets',
          },
        ],
      },
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            paths: [
              {
                rootPathPrefix: '~/',
                rootPathSuffix: './src',
              },
              {
                rootPathPrefix: '~assets/',
                rootPathSuffix: './assets',
              },
            ],
          },
        ],
      ],
    },
  },
}
