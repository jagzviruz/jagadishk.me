import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { iosCircleOutline } from 'react-icons-kit/ionicons'
import { iosCircleFilled } from 'react-icons-kit/ionicons'

import { StyledIcon } from './common'

const Hollow = styled.div``;
const Filled = styled.div``;
const RatingLabel = styled.span``;

const RatingHolder = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Hollow}, ${Filled}  {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%

    ${StyledIcon}{
      position: static;
      margin: 0 2px;
    }
  }

  ${RatingLabel}{
    margin: 0;
  }
`

const SplitHolder = styled.div`
height: 100%;
width: 50%;
${Hollow }, ${ Filled}{
  left: initial;
  right: 0;
  justify-content: flex-end;
}
`


const renderSymbols = (outOf, value, fillColor) => (
  <React.Fragment>
  {/* <Hollow>
  {
    [...Array(outOf).fill('')].map((item, index) =>
      <StyledIcon key={index} icon={iosCircleOutline} fill={fillColor} />)
  }
  </Hollow>
  <Filled>
    {
      [...Array(Math.round(value)).fill('')].map((item, index) =>
        <StyledIcon key={index} icon={iosCircleFilled} fill={fillColor} />)
    }
    </Filled> */}
    <Filled>
      {
        [...Array(Math.round(value)).fill('')].map((item, index) =>
          <StyledIcon key={index} icon={iosCircleFilled} fill={fillColor} />)
      }
      {
        [...Array(outOf-value).fill('')].map((item, index) =>
          <StyledIcon key={index} icon={iosCircleOutline} fill={fillColor} />)
      }
    </Filled>
    </React.Fragment>)

const Rating = ({
  value,
  outOf = 5,
  fillColor = '#00A8E8',
  label
}) => (
    <RatingHolder>
      {label
        ?
        (
          <React.Fragment>
            <RatingLabel>
              {label}
            </RatingLabel>
            <SplitHolder>
              {renderSymbols(outOf, value, fillColor)}
            </SplitHolder>
          </React.Fragment>
        )
        :
        renderSymbols(outOf, value, fillColor)
        }

    </RatingHolder>
);

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  outOf: PropTypes.number,
  label: PropTypes.string,
}

export default Rating;
