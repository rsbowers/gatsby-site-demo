const { SITE_ENV } = process.env;
const enableRobots = SITE_ENV === 'production' ? 'allow' : 'disallow';

module.exports = {
  siteMetadata: {
    title: `agnoStack`,
    description: `Provide seamless, commerce-platform agnostic, customer support for orders across all channels by leveraging Zendesk’s Support Suite combined with our agnoStack(TM) Omni-Channel Commerce Plugin. The industry’s leading solution to improve consumer experiences throughout their full lifecyle with your brand.`,
    author: `@agnostack`,
    siteUrl: `https://agnostack.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
      serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `daily`,
          priority: 0.7,
        }
      })
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-copy-files`,
      options: {
        source: `${__dirname}/src/assets`,
        destination: `/assets`
      }
    },
    {
      resolve: `gatsby-plugin-copy-files`,
      options: {
        source: `${__dirname}/src/images`,
        destination: `/images`
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `agnoStack`,
        short_name: `agnoStack`,
        start_url: `/`,
        background_color: `#682860`,
        theme_color: `#0F0C09`,
        display: `minimal-ui`,
        icon: `src/images/agnoStack-icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/molecules/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://agnostack.com',
        sitemap: 'https://agnostack.com/sitemap.xml',
        resolveEnv: () => enableRobots,
        env: {
          allow: {
            policy: [{ userAgent: '*', allow: '/' }]
          },
          disallow: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145375497-1',
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
