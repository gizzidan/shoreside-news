/** @jsx jsx */
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
import React, { Component, useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import Img from "gatsby-image"
import { Link } from "gatsby";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import Podcast from "@components/Podcast";
import styled from "@emotion/styled";
import Subscription from "@components/Subscription"
import Sidebar from '@components/Sidebar';
import HomeFeature from '@components/Sponsored/HomeFeature';
import Sidenav from '@components/Sidenav/Sidenav';
import Leaderboard from '@components/Ads/Leaderboard';
import MidLeaderboard from '@components/Ads/MidLeaderboard';


export const limitToTwoLines = css`
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

const ArticlesList2 = () => {
  const sectiongap = '55px';
  const gap = '35px';
  const data = useStaticQuery(
    graphql`
      query { 
        allContentfulArticle(filter: {title: {ne: "The Voting Shell Game"}, category: {ne: "sponsor content"}}, sort: {fields: date, order: DESC}, limit: 30) {
          edges {
            node {
              date(formatString: "MMM DD")
              excerpt
              slug
              title
              category 
              hero {
                sizes(maxWidth: 500, maxHeight: 309, quality: 100) {
                  ...GatsbyContentfulSizes_withWebp
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
       <div style={{
            
            }}>
        <Leaderboard />
       
        <Main>
          
          
          <LargeDiv id="latest">
          
            <HomeFeature/>
            {
              data.allContentfulArticle.edges.slice(0,3).map((item, i) => (
                item.node.hero ? (
                  <div key={i}>
                    <ListItem to={item.node.slug}>
                    <ImageContainer>
                        <Image
                          fluid={item.node.hero.sizes}
                        />
                      </ImageContainer>            
                        <TextContainer>
                    

                          <Title>
                            {item.node.title}
                          </Title>
                          <Excerpt>
                            {item.node.excerpt}
                          </Excerpt>
                          <MetaData>
                            By <AuthorLink to={item.node.author[0].fields.slug}>{item.node.author[0].name}</AuthorLink>
                          </MetaData>
                        </TextContainer>
                      </ListItem>
                  </div>
                  
                ) : (<div></div>)
              ))
            }
            </LargeDiv> 
          <Sidebar />
          </Main>
          <Podcast />
          <Subscription />
          <MidLeaderboard />
        <LabelContainer style={{ 
          position: 'relative',
          display: 'flex',
          }}>
          <Label id="thoughts">Thoughts</Label><SeeAll to='/category/thoughts'>See All →</SeeAll>
        </LabelContainer>
     
        <StyledDiv style={{
        marginBottom: sectiongap, 
        display: 'grid',
        gridGap: gap,
      }}> 
     
        {
          data.allContentfulArticle.edges.filter(c=>c.node.category == 'thoughts').slice(0,6).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>
            
                  <ImageContainer>
                    <Image
                      fluid={item.node.hero.sizes}
                    />
                  </ImageContainer>
                    <TextContainer>
                
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
              
            ) : (<div style={{ display: 'none'}}></div>)
          ))
        }
        </StyledDiv>
        <LabelContainer style={{ 
          position: 'relative',
          display: 'flex',
          }}>
          <Label id="culture">Culture</Label><SeeAll to='/category/culture'>See All →</SeeAll>
        </LabelContainer>
         
        <StyledDiv style={{
        marginBottom: sectiongap, 
        display: 'grid',
       
        gridGap: gap,
      }}> 
     
        {
          data.allContentfulArticle.edges.filter(c=>c.node.category == 'culture').slice(0,6).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>

                  <ImageContainer>
                    <Image
                      fluid={item.node.hero.sizes}
                    />
                  </ImageContainer>
                    <TextContainer>
                
                      
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
              
            ) : (<div style={{ display: 'none'}}></div>)
          ))
        }
        </StyledDiv>
        <LabelContainer style={{ 
          position: 'relative',
          display: 'flex',
          }}>
          <Label id="goings-on">Goings On</Label><SeeAll to="/category/goings-on">See All →</SeeAll>
        </LabelContainer>
        <StyledDiv style={{
        marginBottom: sectiongap, 
        display: 'grid',
        
        gridGap: gap,
      }}> 
     
        {
          data.allContentfulArticle.edges.filter(c=>c.node.category == 'goings on').slice(0,6).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>
         
                  <ImageContainer>
                    <Image
                      fluid={item.node.hero.sizes}
                    />
                  </ImageContainer>
                    <TextContainer>
            
                      
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
              
            ) : (<div style={{ display: 'none'}}></div>)
          ))
        }
        </StyledDiv>    
       </div>
      </Container>
        
      
    )
  }

export default ArticlesList2;


const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr;
  grid-gap: 70px;
  margin-top: 50px;
  margin-bottom: 20px;
  position: relative;
  ${mediaqueries.desktop`
    grid-gap: 10px;
    grid-template-columns: 1fr;
  `};
  ${mediaqueries.tablet`
    grid-gap: 10px;
    grid-template-columns: 1fr;
  `};
`
const LargeDiv = styled.div`
 
  ${mediaqueries.tablet`
    padding-right: 0;
    border-right: none;
  `};
`;

export const StyledDiv = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  ${mediaqueries.tablet`
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `};
`;
const Container = styled.section`
  
`;

export const AuthorLink = styled(Link)`
  color: black;
  font-weight: 500;
  color: ${p => p.theme.colors.primary};
  border-bottom: 1px solid;
  &:hover {
    opacity: 0.6;
  }
`

export const LabelContainer = styled.div`
  
`
export const Label = styled.h2`
  font-family: "Noe Display";
  color: ${p => p.theme.colors.primary};
  font-weight: 700;
  text-transform: none;
  border-top: 5px solid ${p => p.theme.colors.primary};
  font-style: normal;
  font-size: 42px;
  text-align: left;
  margin-bottom: 15px;
  padding-top: 3px;
  ${mediaqueries.desktop`
    font-size: 36px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 34px;
    line-height: 1.3;
  `};
`;

export const SeeAll = styled(Link)`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-align: right;
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  right: 0px;
  color :${a => a.theme.colors.accent};
  font-weight: 500;
  position: absolute;
  padding-top: 28px;
  &:hover {
    border-bottom: 1px solid;
  }
  &:visited {
    color :${a => a.theme.colors.accent};
  }
  ${mediaqueries.phablet`
    padding-top: 23px;
  `};
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.3s var(--ease-out-quad),
  box-shadow 0.3s var(--ease-out-quad);
  

  ${mediaqueries.tablet`
    margin-bottom: 0px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0px;
    box-shadow: none;
    
  `}
`;

export const MetaData = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  text-transform: none;
  opacity: 1;
  color: ${p => p.theme.colors.articleText};
  
  ${mediaqueries.tablet`
    font-size: 17px;
  `}
  ${mediaqueries.phablet`
    font-size: 15px;
    max-width: 100%;
    padding:  0px 0px 10px;
  `}
`;

export const TextContainer = styled.div`
  position: relative;
  padding: 0px 0px 10px 0px;
  ${mediaqueries.phablet`
    padding: 10px 0px 10px 0px;
  `}
  
`;

export const Excerpt = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  ${limitToTwoLines};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.45;
  margin-top: 0px;
  margin-bottom: 12px;
  color: ${p => p.theme.colors.articleText} !important;
  
  ${mediaqueries.tablet`
    font-size: 16px;
` }

  ${mediaqueries.phablet`
    font-size: 15px;
    margin-bottom: 10px;
    max-width: 100%;
    padding:  0;
    -webkit-line-clamp: 2;
  `}
`;


export const Title = styled(Headings.h2)`
  font-size: 22px;
  line-height: 1.2 !important;
  font-family: "Noe Text";
  font-weight: 700 !important;
  text-transform: none;
  margin-bottom: 9px;
  margin-top: 20px;
  padding: 0px;
  transition: color 0.3s ease-in-out;
  color: ${p => p.theme.colors.primary};
  &:hover {
    opacity: 0.5;
  }

  ${mediaqueries.desktop`
    margin-bottom: 0px;
  `}

  ${mediaqueries.tablet`
    margin-top: 20px; 
    margin-bottom: 5px;
  `}

  ${mediaqueries.phablet`
    font-size: 21px;  
    padding: 0px;
    margin-bottom: 5px;
    -webkit-line-clamp: 3;
  `}
`;

export const Slogan = styled.div`
  display: none !important;
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 13px;
  line-height: 1.7;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  

  ${mediaqueries.desktop`
    
  `}

  ${mediaqueries.tablet`
    font-size: 15px;
  `}

  ${mediaqueries.phablet`
    font-size: 14px;
    max-width: 100%;
    padding:  0;
    margin-bottom: 5px;
    -webkit-line-clamp: 2;
  `}
`;

const SecondFeature = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  & h2 {
    font-size: 28px;
    -webkit-line-clamp: 2 !important;
  }
`
export const Item = styled(Link)`
  text-align: left;
  position: relative;
  display: block;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.28s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  & ${Slogan} {
    padding-top: 15px;
    ${mediaqueries.phablet`
      padding-top: 0px;
    `}
  }
  &:hover {
    transform: translateY(-1px);

  }
  
  ${mediaqueries.phablet`
    &:hover {
      transform: none;
      box-shadow: initial;
    }
  `}
`;

export const ListItem = styled(Link)`
  align-items: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  padding-bottom: 25px;
  position: relative;
  transition: all 0.28s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  & h2 {
    margin-top: 0px;
    font-size: 28px;
    -webkit-line-clamp: 2 !important;
  }
  & ${MetaData} {
    font-size: 15px !important;
  }
  & ${Excerpt} {
    font-size: 17px !important;
    -webkit-line-clamp: 4 !important;
    
  }
  & ${Slogan} {
    font-size: 14px !important;
  }

  &:hover{
    transform: translateY(-1px);
    h2 {
      opacity: 0.5;
    }
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
  ${mediaqueries.tablet`
    &:hover{
      h2 {
        opacity: 1;
      }
    }
    align-items: top;
    border: none;
    grid-gap: 15px;
    grid-template-columns: 1fr;
    & h2 {
      margin-top: 10px;
      font-size: 24px;
      margin-bottom: 10px;
    }
   
  `}
  ${mediaqueries.phablet`
    margin-bottom: 5px;
    padding-bottom: 20px;
    grid-gap: 0px;
    &:hover {
      transform: none;
    }
    & h2 {
      font-size: 21px;
      margin-bottom: 5px;
    }
    & ${MetaData} {
      font-size: 15px !important;
    }
    & ${Excerpt} {
      font-size: 17px !important;
    }
    & ${Slogan} {
      font-size: 14px !important;
    }

  `}
`;

