module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    // Allow Tailwind at-rules like @tailwind and @apply
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
      },
    ],
    // Allow unknown properties used by Tailwind (like theme())
    'declaration-block-no-unknown': [true, { ignoreProperties: ['theme'] }],
  },
}
