// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');


module.exports = async () => {
  /** @type {import('expo/metro-config').MetroConfig} */
  const config = getDefaultConfig(__dirname);

  config.resolver.sourceExts =['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'];
  config.resolver.assetExts = ['glb', 'gltf', 'png', 'jpg','ttf'];

  return config;
}

