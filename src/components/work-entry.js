import React from 'react'
import styled from 'styled-components'
import { StyledIcon as Icon } from './common'

const DateDisplay = styled(({ year, month, className }) => (
  <div className={className}>
    <span className="year">
      {year}
    </span>
    <span className="month">
      {
        [
          '', 'Jan', 'Feb', 'Mar', 'Apr',
          'May', 'Jun', 'Jul', 'Aug',
          'Sep', 'Oct', 'Nov', 'Dec'
        ][parseInt(month)]
    }
    </span>
  </div>
))`
  margin: 3px 5px;
  background: #fff;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 5px 5px 3px;
  text-align: center;

  & + &{
    margin-left: 40px;
    position: relative;

    :before {
      content: '\\279E';
      position: absolute;
      left: -30px;
      top: 50%;
      margin-top: -10px;
    }
  }



  *{
    margin: 0;
  }
  .year{
    background: #333;
    color: #fff;
    margin: -6px -6px 5px;
  }
`;

const WorkEntry = styled(({ children, className, company, start, end=null, title, trackIcon=null, trackIconStyling=null}) => (
  <section className={className}>
    <h4 className="company-name">
      {company}
    </h4>
    <div className="sub-heading">
      <span className="designation">{title}</span>
      <div className="dates">

        <DateDisplay year={start.split('-')[0]} month={start.split('-')[1]} />
        {end ?
          (
            <DateDisplay year={end.split('-')[0]} month={end.split('-')[1]} />
          )
          :
          <span style={{ alignSelf: 'center'}}>Onwards</span>}
      </div>
    </div>
    <div className="company-experience">
      {children}
    </div>
    {trackIcon ? <Icon size={128} icon={trackIcon} {...trackIconStyling} /> : null}
  </section>
))`
  padding: 25px 25px 25px;
  max-width: 800px;
  border-bottom: 1px dashed #00A8E8;

  .sub-heading{
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    > span{
      margin-bottom: 5px;
      &.designation{
        font-weight: 700;
        opacity: 0.6;
      }
    }

    .dates{
      width: 300px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-top: -30px;
    }

  }

  ${Icon}{
    position: absolute;
    width: 128px;
    height: 128px;
    top: 50%;
    left: -100px;
    opacity: 0.8;
    margin-top: -64px;
  }


  &:first-child{
    padding-top: 0;

    .company-name{
      &:after,&:before{
        display: none;
      }
    }
  }

  &:after{
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;

    position: absolute;
    z-index: 3;
  }

  &:before{
    content: '';
    width: 11px;
    height: 11px;

    position: absolute;
    z-index: 2;
  }

  .company-name{
    margin-bottom: 15px;
    font-weight: 500;

    &:after,&:before{
      content: '';
      position: absolute;
      width: 11px;
      height: 11px;
      z-index: 2;
    }

  }

  &:nth-child(2n+1){
    border-left: 1px dashed #00A8E8;

    &:after{
      border-left: 1px dashed #00A8E8;
      border-bottom: 1px dashed #00A8E8;
      border-radius: 0 0 0 20px;
      left: 0;
      bottom: 0;
    }

    &:before{
      left: -1px;
      bottom: -1px;
      background: #fff;
    }

    .company-name {
      :after{
        border-left: 1px dashed #00A8E8;
        border-top: 1px dashed #00A8E8;
        border-radius: 20px 0 0 0;
        left: 0;
        top: 0;
        z-index: 3;
      }

      &:before{
        left: -1px;
        top: -1px;
        background: #fff;
      }
    }

  }

  &:nth-child(2n){
    border-right: 1px dashed #00A8E8;

    ${Icon}{
      left: initial;
      right: -100px;
    }

    :after{
      border-radius: 0 0 20px 0;
      border-right: 1px dashed #00A8E8;
      border-bottom: 1px dashed #00A8E8;
      right: 0;
      bottom: 0;
    }

    &:before{
      right: -1px;
      bottom: -1px;
      background: #fff;
    }

    .company-name {
      :after{
        border-right: 1px dashed #00A8E8;
        border-top: 1px dashed #00A8E8;
        border-radius: 0 20px 0 0;
        right: 0;
        top: 0;
        z-index: 3;
      }

      &:before{
        right: -1px;
        top: -1px;
        background: #fff;
      }
    }
  }

  > svg{
    width: 80px;
    opacity: 0.3;
    position: absolute;
    left: -80px;
  }

  p{
    margin-bottom: 10px;
  }
`;

export default WorkEntry;
