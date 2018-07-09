import React from 'react'
import styled from 'styled-components'

import {StyledIcon as Icon } from './common'
import Header from './header'

const SectionHeader = styled(Header)`
  margin-bottom: 15px;
`;

const StyledSection = styled.section`
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  margin: 25px;
  padding: 25px;
  position: relative;
  min-height: 256px;

  &.has-section-header{
    padding-left: 100px;
  }

  ${SectionHeader}{
    font-weight: 700;
  }

  ${Icon}{
    position: absolute;
    right: 15px;
    bottom: 0px;
    opacity: 0.04;

    svg{
      filter: drop-shadow(1px 1px 7px rgba(0,0,0,0.5));
    }
  }
`

const Section = ({ children, className='', sectionHeader='', sectionIcon=null }) => (
  <StyledSection className={`${ className }  ${ sectionHeader ? 'has-section-header' : null }`}>
    {sectionIcon ?
      <Icon size={128} icon={sectionIcon} />
      : null}
    {sectionHeader ?
      <SectionHeader>
        { sectionHeader }
      </SectionHeader>
      : null}
    <div className="section-content">
      {children}
    </div>
  </StyledSection>
);

export default Section
