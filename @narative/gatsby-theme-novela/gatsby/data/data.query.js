/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`;


module.exports.local = {
  articles: `{
    articles: allArticle(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          secret
          title
          author
          category
          tags
          date(formatString: "MMM DD")
          dateForSEO: date
          timeToRead
          excerpt
          subscription
          body
          hero {
            list: childImageSharp {
              fixed(width: 100, height: 100, quality: 100) {
                src
              }
            }
            full: childImageSharp {
              fluid(maxWidth: 944, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            narrow: childImageSharp {
              fluid(maxWidth: 457, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            seo: childImageSharp {
              fixed(width: 1200, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }`,
  authors: `{
    authors: allAuthor {
      edges {
        node {
          authorsPage
          bio
          id
          name
          social {
            url
          }
          slug
          avatar {
            small: childImageSharp {
              fluid(maxWidth: 50, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            medium: childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            large: childImageSharp {
              fluid(maxWidth: 328, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
          }
        }
      }
    }
  }`,
};

module.exports.contentful = {
  articles: `{
    articles: allContentfulArticle(sort: {fields: [date, title], order: DESC}, limit: 1000) {
      edges {
        node {
          body {
            childMdx {
              body
              timeToRead
            }
          }
          excerpt
          title
          category
          tags
          slug
          secret
          date(formatString: "MMM DD")
          dateForSEO: date
          hero {
            file {
              url
            }
            full: fluid(maxWidth: 944, quality: 100) {
              ${GatsbyFluid_withWebp}
            }
            regular: fluid(maxWidth: 653, quality: 100) {
              ${GatsbyFluid_withWebp}
            }
            narrow: fluid(maxWidth: 457, quality: 100) {
              ${GatsbyFluid_withWebp}
            }
            seo: fixed(width: 1200, quality: 100) {
              src
            }
            title
            description
          }
          id
          author {
            name
          }
        }
      }
    }
  }
  `,
  authors: `{
    authors: allContentfulAuthor {
      edges {
        node {
          avatar {
            small: fluid(maxWidth: 50, quality: 100) {
              ${GatsbyFluid_withWebp}
            }
            medium: fluid(maxWidth: 100, quality: 100) {
              ${GatsbyFluid_withWebp}
            }
            large: fluid(maxWidth: 328, quality: 100) {
              ${GatsbyFluid_withWebp}
            }
          }
          fields {
            authorsPage
            slug
          }
          bio
          id
          name
          social
        }
      }
    }
  }`,
};
