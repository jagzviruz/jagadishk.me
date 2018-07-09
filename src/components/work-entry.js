import React from 'react'
import styled from 'styled-components'

const WorkEntry = styled(({ children, className, company, start, end, title}) => (
  <section className={className}>
    <h4 className="company-name">
      {company}
    </h4>
    <div className="company-experience">
      {children}
    </div>
  </section>
))`
  padding: 25px 25px 15px;
  max-width: 800px;
  border-bottom: 1px dashed #00A8E8;



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

    :after{
      border-left: 1px dashed #00A8E8;
      border-bottom: 1px dashed #00A8E8;
      border-radius: 0 0 0 20px;
      left: 0;
      bottom: 0;
    }

    &:before{
      left: -1px;
      bottom: -1px;
      border-left: 1px dashed #fff;
      border-bottom: 1px dashed #fff;
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
        border-left: 1px dashed #fff;
        border-top: 1px dashed #fff;
      }
    }
  }

  &:nth-child(2n){
    border-right: 1px dashed #00A8E8;

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
      border-right: 1px dashed #fff;
      border-bottom: 1px dashed #fff;
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
        border-right: 1px dashed #fff;
        border-top: 1px dashed #fff;
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
