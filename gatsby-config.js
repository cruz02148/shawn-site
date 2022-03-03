module.exports = {
  siteMetadata: {
    title: 'Birch Financial Partners',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: `Birch Financial Partners`,
        short_name: `Birch Financial Partners`,
        start_url: `/`,
      },
    }
  ],
};
