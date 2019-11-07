import React, { useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { Link } from "gatsby";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import Podcast from "@components/Podcast";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Subscription from "@components/Subscription"

const TwitterContainer = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "light");
    anchor.setAttribute("data-height", "75vh");;
    anchor.setAttribute("href", "https://twitter.com/nytimes");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
  );
};

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

const ArticlesList2 = () => {
  const sectiongap = '45px';
  const gap = '25px';
  const data = useStaticQuery(
    graphql`
      query { 
        allContentfulArticle(sort: {fields: date, order: DESC}, limit: 30) {
          edges {
            node {
              date(formatString: "MMM DD")
              excerpt
              slogan
              slug
              title
              category 
              hero {
                sizes(maxWidth: 500, maxHeight: 300, quality: 100) {
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
          position: 'relative',
          display: 'flex',
          paddingTop: '70px'
          }}>
          <Label>The Latest ⌚️</Label><SeeAll to="/latest">See All →</SeeAll>
        </div>
      <Main>
      <LargeDiv>
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
                    <Slogan>
                        <p>{item.node.slogan}</p>
                      </Slogan>

                      <Title>
                        {item.node.title}
                      </Title>
                      <Excerpt>
                        {item.node.excerpt}
                      </Excerpt>
                      <MetaData>
                        {item.node.date} · {item.node.body.childMdx.timeToRead} min read 
                      </MetaData>
                    </TextContainer>
                  </ListItem>
              </div>
              
            ) : (<div></div>)
          ))
        }
        </LargeDiv> 
        <div>
        <div style={{paddingBottom: '50px',}}>ad space</div>
        {
          data.allContentfulArticle.edges.slice(1,7).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <SidebarItem to={item.node.slug}>
                  
                  <Slogan>{item.node.slogan}</Slogan>
                  <Title>{item.node.title}</Title>
                </SidebarItem>
              </div>            
            ) : (<div></div>)
          ))
        }
        <div style={{paddingBottom: '50px',}}>ad space</div>
        </div>
        </Main>
        <Podcast />
        <Subscription />
        <div style={{ 
          position: 'relative',
          display: 'flex',
          }}>
          <Label>Thoughts 🧠</Label><SeeAll to='/category/thoughts'>See All →</SeeAll>
        </div>
     
        <StyledDiv style={{
        marginBottom: sectiongap, 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: gap,
      }}> 
     
        {
          data.allContentfulArticle.edges.filter(c=>c.node.category == 'thoughts').slice(0,4).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>
            
                  <ImageContainer>
                    <Image
                      fluid={item.node.hero.sizes}
                    />
                  </ImageContainer>
                    <TextContainer>
                    <Slogan>
                        <p>{item.node.slogan}</p>
                      </Slogan>
                     
                      <Title>
                        {item.node.title}
                      </Title>
                      <Excerpt>
                        {item.node.excerpt}
                      </Excerpt>
                      <MetaData>
                        {item.node.date} · {item.node.body.childMdx.timeToRead} min read
                      </MetaData>
                    </TextContainer>
                  </Item>
              </div>
              
            ) : (<div style={{ display: 'none'}}></div>)
          ))
        }
        </StyledDiv>
        <div style={{ 
          position: 'relative',
          display: 'flex',
          }}>
          <Label>Culture 🎨</Label><SeeAll to='/category/culture'>See All →</SeeAll>
        </div>
         
        <StyledDiv style={{
        marginBottom: sectiongap, 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: gap,
      }}> 
     
        {
          data.allContentfulArticle.edges.filter(c=>c.node.category == 'culture').slice(0,4).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>

                  <ImageContainer>
                    <Image
                      fluid={item.node.hero.sizes}
                    />
                  </ImageContainer>
                    <TextContainer>
                    <Slogan>
                        <p>{item.node.slogan}</p>
                      </Slogan>
                      
                      <Title>
                        {item.node.title}
                      </Title>
                      <Excerpt>
                        {item.node.excerpt}
                      </Excerpt>
                      <MetaData>
                        {item.node.date} · {item.node.body.childMdx.timeToRead} min read
                      </MetaData>
                    </TextContainer>
                  </Item>
              </div>
              
            ) : (<div style={{ display: 'none'}}></div>)
          ))
        }
        </StyledDiv>
        <div style={{ 
          position: 'relative',
          display: 'flex',
          }}>
          <Label>Goings On 🗞</Label><SeeAll to="/category/goings-on">See All →</SeeAll>
        </div>
        <StyledDiv style={{
        marginBottom: sectiongap, 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: gap,
      }}> 
     
        {
          data.allContentfulArticle.edges.filter(c=>c.node.category == 'goings on').slice(0,4).map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>
         
                  <ImageContainer>
                    <Image
                      fluid={item.node.hero.sizes}
                    />
                  </ImageContainer>
                    <TextContainer>
                    <Slogan>
                        <p>{item.node.slogan}</p>
                      </Slogan>
                      
                      <Title>
                        {item.node.title}
                      </Title>
                      <Excerpt>
                        {item.node.excerpt}
                      </Excerpt>
                      <MetaData>
                        {item.node.date} · {item.node.body.childMdx.timeToRead} min read
                      </MetaData>
                    </TextContainer>
                  </Item>
              </div>
              
            ) : (<div style={{ display: 'none'}}></div>)
          ))
        }
        </StyledDiv>
      </Container>
        
      
    )
  }

export default ArticlesList2;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-template-rows: 1fr;
  grid-gap: 70px;
  margin-bottom: 50px;
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

const StyledDiv = styled.div`

`;
const Container = styled.section`
  
`;


const Label = styled.h2`
  font-family: "Noe Display";
  color: ${p => p.theme.colors.primary};
  font-weight: 700;
  text-transform: none;
  font-style: normal;
  font-size: 48px;
  text-align: left;
  margin-bottom: 15px;
  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 34px;
    line-height: 1.3;
  `};
`;

const SeeAll = styled(Link)`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-align: right;
  font-size: 20px;
  line-height: 1.2;
  right: 0px;
  color :${a => a.theme.colors.accent};
  font-weight: 400;
  position: absolute;
  padding-top: 19px;
  &:hover {
    border-bottom: 1px solid;
  }
  &:visited {
    color :${a => a.theme.colors.accent};
  }
  ${mediaqueries.phablet`
    padding-top: 9px;
  `};
`

const SidebarItem = styled(Link)`
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  padding-bottom: 10px;
  margin-bottom: 30px;
  position: relative;
  display: block;
  & img {
    padding-bottom: 10px;
  }
  & h2 {
    line-height: 1.25;
    padding-bottom: 10px
  }

  &:hover, &:focus {
    h2 {
      opacity: 0.5;
    }
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
    &:hover {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`
const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  

  ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 120px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0px;
    box-shadow: none;
    
  `}
`;

const MetaData = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 400;
  font-size: 15px;
  font-style: normal;
  color: ${p => p.theme.colors.primary};
  
  ${mediaqueries.tablet`
    font-size: 17px;
  `}
  ${mediaqueries.phablet`
    font-size: 15px;
    max-width: 100%;
    padding:  0px 0px 10px;
  `}
`;

const TextContainer = styled.div`
  position: relative;
  padding: 0px 0px 10px 0px;
  ${mediaqueries.phablet`
    padding: 20px 0px 20px 0px;
  `}
`;

const Excerpt = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  ${limitToTwoLines};
  font-size: 15px;
  font-style: normal;
  line-height: 1.618;
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.primary} !important;
  
  ${mediaqueries.tablet`
    font-size: 18px;
` }

  ${mediaqueries.phablet`
    font-size: 16px;
    margin-bottom: 10px;
    max-width: 100%;
    padding:  0;
    -webkit-line-clamp: 2;
  `}
`;


const Title = styled(Headings.h2)`
  font-size: 20px;
  line-height: 1.25;
  font-family: "Noe Text";
  font-weight: 700 !important;
  text-transform: none;
  margin-bottom: 10px;
  transition: color 0.3s ease-in-out;

  ${mediaqueries.desktop`
    margin-bottom: 0px;
  `}

  ${mediaqueries.tablet`
    font-size: 20px;  
    margin-bottom: 10px;
  `}

  ${mediaqueries.phablet`
    font-size: 20px;  
    padding: 0px;
    margin-bottom: 5px;
    -webkit-line-clamp: 3;
  `}
`;

const Slogan = styled.div`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 14px;
  line-height: 1.7;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};


  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.tablet`
    font-size: 16px;
  `}

  ${mediaqueries.phablet`
    font-size: 15px;
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
const Item = styled(Link)`
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
  &:hover, &:focus {
    transform: translateY(-1px);
    h2 {
      opacity: 0.5;
    }
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
    &:hover {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;

const ListItem = styled(Link)`
  align-items: top;
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
    font-size: 26px;
    -webkit-line-clamp: 2 !important;
  }
  & ${MetaData} {
    font-size: 15px !important;
  }
  & ${Excerpt} {
    font-size: 17px !important;
    -webkit-line-clamp: 2 !important;
  }
  & ${Slogan} {
    font-size: 15px !important;
  }

  &:hover, &:focus {
    transform: translateY(-1px);
    h2 {
      opacity: 0.5;
    }
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
  ${mediaqueries.tablet`
    grid-gap: 0px;
    grid-template-columns: 1fr;
    & h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
   
  `}
  ${mediaqueries.phablet`
    margin-bottom: 25px;
    &:hover {
      transform: none;
      box-shadow: initial;
    }
    & h2 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    & ${MetaData} {
      font-size: 15px !important;
    }
    & ${Excerpt} {
      font-size: 16px !important;
    }
    & ${Slogan} {
      font-size: 14px !important;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;

