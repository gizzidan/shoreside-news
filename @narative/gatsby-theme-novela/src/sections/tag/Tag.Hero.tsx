import React from 'react';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const TagHero = ({ tag }) => {
  return (
    <Hero>
      <Label>{tag}</Label>
    </Hero>
  );
};

export default TagHero;

const Hero = styled.section`
  
`;

const Label = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-family: "Noe Display";
  font-weight: 500;
  line-height: 1.01 !important;
  text-transform: capitalize;
  font-size: 180px;
  text-align: center;
  margin-top: 90px;
  margin-bottom: 20px;
  ${mediaqueries.desktop`
    font-size: 100px;

  `};

  ${mediaqueries.phablet`
    padding-bottom: 10px;
    -webkit-text-stroke-width: 1px;
    font-size: 74px;
    font-weight: 500;

  `};
`;

const Subheading = styled.div`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;
  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;