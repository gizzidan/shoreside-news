import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import AdLabel from "./Label";

export default class FeatureTwo extends Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        sizeMapping={[{ viewport: [1366, 1024], sizes: [[970, 250]] },
          { viewport: [1024, 768], sizes: [[300, 250]] }]}
         >
        <FeatureContainer>
        <AdLabel style={{ display: 'none' }}>Advertisement</AdLabel>
          <AdSlot sizes={[[300, 250]]} adUnit="feature-page-2" />
        </FeatureContainer>
      </DFPSlotsProvider>
    );
  }
}

const FeatureContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 0px;
  text-align: center;
`