import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import baseStyles from './styles';

// import Header from '../components/header';
import UserInfoBar from '../components/userinfobar';

const PageWrapper = styled.div`
  width
`;

const Layout = ({ children }) => {
  baseStyles();
  return (
    <StaticQuery
      query={
        graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title,
                user {
                  name,
                  image,
                  designation,
                  email,
                  mobile,
                  github,
                  linkedin,
                  twitter,
                  blog,
                  summary,
                  skills{
                    name,
                    value,
                  }
                }
              }
            }
          }
        `
      }
      render={
        data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              bodyAttributes={{
                class: 'h-resume'
              }}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <UserInfoBar {...data.site.siteMetadata.user} />
            <PageWrapper>
              {children}
            </PageWrapper>
          </>
        )
      }
    />
  )
};

export default Layout
