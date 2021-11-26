const path = require('path')

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  optimize: {
    bundle: true,
  },
  devOptions: {
    open: 'none',
    port: 3000,
  },
  alias: {
    '@components': path.join(__dirname, 'src/components'),
  },
  exclude: ['**/node_modules/**/*', '**/*.test.*'],
}
