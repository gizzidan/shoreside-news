/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { SidebarItem, STextContainer, InnerContainer, SSlogan, STitle, SMetaData, CatLink, SImageContainer } 
        from '@components/Sidebar/Sidebar';

const Sidebar = () => {
	const data = useStaticQuery(
    graphql`
      query { 
        allContentfulArticle(filter: {title: {eq: ""}},
                            sort: {fields: date, order: DESC}, limit: 30) {
          edges {
            node {
              date(formatString: "MMM DD")
              excerpt
              slug
              title
              category 
              hero {
                sizes(maxWidth: 400, maxHeight: 400, quality: 100) {
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
		<div>
				{
					data.allContentfulArticle.edges.map((item, i) => (
						item.node.hero ? (
							<div key={i}>
								<SidebarItem to={item.node.slug}>
									<STextContainer>
										<InnerContainer>
										
											<STitle>{item.node.title}</STitle>
											<SMetaData><span style={{ opacity: '0.8', }}>{item.node.author[0].name} in </span><CatLink to={"/category/" + item.node.category}>{item.node.category}</CatLink>
												
											</SMetaData>
										</InnerContainer>
									</STextContainer>
									<SImageContainer>
										<Image fluid={item.node.hero.sizes}></Image>
									</SImageContainer>
								</SidebarItem>
							</div>            
						) : (<div></div>)
					))
				}
		</div>
	)
}

export default Sidebar;