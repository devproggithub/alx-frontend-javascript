module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Specify the environment targets
        },
      },
    ],
  ],
};
