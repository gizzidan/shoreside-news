import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { Link } from "gatsby";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import styled from "@emotion/styled";
import { css } from "@emotion/core";


const ArticlesFullList = () => {
  const sectiongap = '20px';
  const gap = '28px';
  const data = useStaticQuery(
    graphql`
      query { 
        allContentfulArticle(filter: {category: {ne: "sponsor content"}}, sort: {fields: date, order: DESC}, limit: 32) {
          edges {
            node {
              date(formatString: "MMM DD")
              excerpt
              slug
              title
              category 
              hero {
                fixed(width: 90, height: 90, quality:100) {
                  ...GatsbyContentfulFixed_withWebp
                 }  
              }
              body {
                childMdx {
                  timeToRead
                }
              }
              author {
                name
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `
  )
    return (
      <Container>
        <Label>The Latest</Label>
        <StyledDiv style={{
            marginBottom: sectiongap, 
            display: 'grid',
            justifyItems: 'center',
            gridTemplateColumns: '1fr',
            gridGap: gap,
        }}>
        {
          data.allContentfulArticle.edges.map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>  
                     
                    <TextContainer>
                    <ImageContainer fixed={item.node.hero.fixed}></ImageContainer>
                    <Title>
                        {item.node.title}
                    </Title>
                    
                    
                    <Excerpt>
                      {item.node.excerpt}
                    </Excerpt>
                      <MetaData>
                      <AuthorLink to={item.node.author[0].fields.slug}>{item.node.author[0].name}</AuthorLink> · {item.node.date}
                      </MetaData>
                    </TextContainer>
             
                   
                  </Item>
              </div>
              
            ) : (<div></div>)
          ))
        }
        </StyledDiv> 
      </Container>
        
      
    )
  }

export default ArticlesFullList;

const StyledDiv = styled.div`

`
const Container = styled.section`
  
`;

export const AuthorLink = styled(Link)`
  font-weight: 500;
  color: ${p => p.theme.colors.primary};
  border-bottom: 1px solid;
  &:hover {
    opacity: 0.6;
  }
`

const Label = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-family: "Noe Display";
  font-weight: 500;
  text-transform: none;
  font-size: 180px;
  text-align: center;
  margin-top: 90px;
  ${mediaqueries.desktop`
    font-size: 100px;
  `};

  ${mediaqueries.phablet`
    -webkit-text-stroke-width: 1px;
    padding-bottom: 30px;
    font-size: 70px;
    font-weight: 500;
    line-height: 1.3;
  `};
`;


const Item = styled(Link)`
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  display: block;
  text-align: left;
  position: relative;
  width: 550px;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.28s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover, &:focus {
    transform: translateY(-1px);
  }


  &:hover h2,
  &:focus h2 {
   
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    
  }

  ${mediaqueries.phablet`
    grid-template-columns: 1fr;
    padding-bottom: 10px;
    width: 90vw;
    &:hover {
      transform: none;
      box-shadow: initial;
    }

   
  `}
`;

const ImageContainer = styled(Image)`
  float: right;
  margin: 0 0 1em 1em;
  ${mediaqueries.tablet`
    
  `}

  ${mediaqueries.phablet`
    
  `}
`;

const TextContainer = styled("div")`
  width: 100%;
  padding: 0px 0px 30px 0px;
  ${mediaqueries.phablet`
    padding: 0px 0px 20px 0px;
  `}
`;

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 2;
  `}
`;


const Title = styled(Headings.h2)`
  font-size: 22px;
  line-height: 1.15 !important;
  font-family: "Noe Text";
  font-weight: 700 !important;
  text-transform: none;
  margin-bottom: 9px;
  padding: 0px;
  transition: color 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
  }

  ${mediaqueries.desktop`
    margin-bottom: 0px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
    margin-bottom: 8px;
  `}

  ${mediaqueries.phablet`
    font-size: 21px;  
    padding: 0px;
    margin-bottom: 2px;
    -webkit-line-clamp: 3;
  `}
`;

const Slogan = styled.p`
  display: none !important;
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 5px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};


  ${mediaqueries.desktop`
    
  `}

  ${mediaqueries.phablet`
    font-size: 14px;
    max-width: 100%;
    padding: 0px;
    margin-bottom: 5px;
    -webkit-line-clamp: 2;
  `}
`;

const Excerpt = styled.p`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-size: 16px;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 10px !important;
  font-weight: 400;
  opacity: 1;
  color: ${p => p.theme.colors.articleText} !important;

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}


  ${mediaqueries.phablet`
    font-size: 15px;
    margin-bottom: 5px;
    max-width: 100%;
    padding:  0;
    -webkit-line-clamp: 2;
  `}
`;

export const MetaData = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: 400;
  font-size: 14px;
  text-transform: none;
  font-style: normal;
  color: ${p => p.theme.colors.articleText};
  

  ${mediaqueries.phablet`

    max-width: 100%;
  `}
`;
