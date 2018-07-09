import React from 'react'
import styled from 'styled-components'
import { vcard as ContactIcon } from 'react-icons-kit/fa/vcard'
import { mobile as MobileIcon } from 'react-icons-kit/icomoon'
import { mail as MailIcon } from 'react-icons-kit/metrize'
import { twitter as TwitterIcon} from 'react-icons-kit/icomoon'
import { socialGithub as GitHubIcon } from 'react-icons-kit/typicons'
import { blog as BlogIcon } from 'react-icons-kit/icomoon'
import { profile as SummaryIcon } from 'react-icons-kit/icomoon'
import { linkedin2 as LinkedinIcon } from 'react-icons-kit/icomoon/linkedin2'

import { StyledIcon } from './common';
import Rating from './rating';

const UserInfoHolder = styled.aside`
  width: 500px;
  background-color: hsla(225, 30%, 20%, 1);
  position: absolute;
  bottom: 0;
  top: 0;
  left: -500px;
  padding-left: 32px;
  overflow: auto;
  color: hsl(200, 65%, 90%);

  a, a:visited{
    color: inherit;
    text-decoration: none;
  }
`;

const ImageNameHolder = styled.div`
  height: 300px;
  padding-bottom: 50px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  img.user-headshot{
    width: 150px;
    border-radius: 50%;
  }

  span{
    display: block;
    margin-bottom: 0.85em;
    letter-spacing: 1px;

    &.user-name{
      font-weight: 700;
      font-family: 'Alegreya', sans-serif;
      font-size: 2.4em;
      text-shadow: 1px 2px 2px #000;
    }

    &.user-designation{
      font-weight: 500;
      font-size: 1.8em;
      color: #f3f1eb;
      letter-spacing: .1em;
      text-transform: uppercase;
      padding: 15px 35px 20px;
      border: 2px solid #f3f1eb;
      position: relative;

    }
  }
`;



const SectionInfoHolder = styled.div`
  margin: 0px 0 45px;
  position: relative;
  padding: 45px 25px 15px;

  span{
    display: block;
    margin: 5px 0;
  }

  ${StyledIcon }{
    position: absolute;
    top: 1px;
    left: 0;
    opacity: 0.75;

    svg{
      fill: #b8ff00;
    }
  }

  .section-label{
    position: absolute;
    top: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  &:before{
    content: '';
    width: 65%;
    position: absolute;
    right: 0;
    top: 10px;
    height: 1px;
    background-color: hsla(210, 10%, 50%, 1);
  }
`;

const SectionEntry = styled.div`
  position: relative;
  margin: 0 -25px 5px;
  padding: 0 25px;
`;

const SkillEntry = styled.div`
  margin: 0 0 15px;
  display: flex;
  flex-direction: row;

`

const UserInfoBar = ({
  name, image, designation, mobile, email,
  linkedin, github, twitter, blog, summary, skills,
}) => (
    <UserInfoHolder>
      <ImageNameHolder>
        <img src={image} alt={name} className="user-headshot" />
        <span className="user-name p-name">{name}</span>
        <span className="user-designation p-title">{designation}</span>

      </ImageNameHolder>
      <SectionInfoHolder className="section p-contact">
        <StyledIcon icon={ContactIcon} className="section-icon" />
        <span className="section-label">
          Contact
        </span>
        <SectionEntry className="p-tel">
          <StyledIcon icon={MobileIcon} />
          {mobile}
        </SectionEntry>
        <SectionEntry className="p-email">
          <StyledIcon icon={MailIcon} />
          {email}
        </SectionEntry>
        <SectionEntry className="p-linkedin">
          <StyledIcon icon={LinkedinIcon} />
          <a href={`//linkedin.com/${ linkedin }`} target="_blank" rel="noopener noreferrer">
            {`linkedin.com/${ linkedin }`}
          </a>
        </SectionEntry>
        <SectionEntry className="p-github">
          <StyledIcon icon={GitHubIcon} />
          <a href={`//github.com/${ github }`} target="_blank" rel="noopener noreferrer">
            {github}
          </a>
        </SectionEntry>
        <SectionEntry className="p-github">
          <StyledIcon icon={TwitterIcon} />
          <a href={`//twitter.com/${ twitter }`} target="_blank" rel="noopener noreferrer">
            {twitter}
          </a>
        </SectionEntry>
        <SectionEntry className="p-blog">
          <StyledIcon icon={BlogIcon} />
          <a href={`//${ blog }`} target="_blank" rel="noopener noreferrer">
            {blog}
          </a>
        </SectionEntry>
      </SectionInfoHolder>
      <SectionInfoHolder className="section p-summary">
        <StyledIcon icon={SummaryIcon} className="section-icon" />
        <span className="section-label">
          Summary
        </span>
        <p>
          {summary}
        </p>
      </SectionInfoHolder>
      <SectionInfoHolder className="section p-summary">
        <StyledIcon icon={SummaryIcon} className="section-icon" />
        <span className="section-label">
          Strengths
        </span>
        {
          skills.map(item => (<SkillEntry className="p-skill" key={item.name}>
            <Rating value={item.value} label={item.name} />
          </SkillEntry>))
        }
      </SectionInfoHolder>

    </UserInfoHolder>
  )

export default UserInfoBar;
