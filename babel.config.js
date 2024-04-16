module.exports = {
  presets: ['module:@react-native/babel-preset'],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@/env',
        path: 'env/.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
};
