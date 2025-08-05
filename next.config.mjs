import withBundleAnalyzer from '@next/bundle-analyzer'

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  productionBrowserSourceMaps: true,
  experimental: {
    legacyBrowsers: false,
    esmExternals: 'loose',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      if (typeof config.optimization.splitChunks === 'object') {
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'chunk-vendors',
            chunks: 'all',
            enforce: true,
          },
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'chunk-react',
            chunks: 'all',
            priority: 20,
            enforce: true,
          },
          uiLibs: {
            test: /[\\/]node_modules[\\/](swiper|@mui|@emotion|framer-motion)[\\/]/,
            name: 'chunk-ui',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
        }
      }
    }

    return config
  }

})

export default config
