import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 10px auto 50px;
  color: ${p => p.theme.colors.articleText};
  font-style: normal;
  padding-left: 35px;
  max-width: 630px;
  

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
    max-width: 90vw;
    padding-left: 15px;
  `};

  & > p {
    font-family: ${p => p.theme.fonts.sansSerif};
    background: ${p => p.theme.colors.blockquote};
    padding: 30px;
    width: 100%;
    margin: 0 auto;
    font-size: 19px;
    line-height: 1.618;
    font-weight: 400;

    ${mediaqueries.tablet`
      font-size: 17px;
      
    `};

    ${mediaqueries.phablet`
      
    `};
  }
`;

export default Blockquote;
