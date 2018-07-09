import React from 'react'
import styled from 'styled-components'
import { briefcase } from 'react-icons-kit/fa/briefcase'
import Layout from "../components/layout"
import Section from '../components/section'
import skillsIcon from '../components/skills-icon'
import WorkEntry from '../components/work-entry'
import WorkingIcon from '../components/working-icon'
console.log(WorkingIcon)
const SkillEntry = styled(({ skillHeading, children, className }) => (
  <li className={className}>
    {skillHeading ? <span className="skill-heading">{skillHeading} : </span> : null}
    {children}
  </li>
))`
  margin-bottom: 15px;
  .skill-heading{
  font-weight: 700;
  }
`;


const IndexPage = () => (
  <Layout className="h-resume">
    <Section sectionHeader="Skills" sectionIcon={skillsIcon}>
      <ul>
        <SkillEntry skillHeading="Javascript Libraries/Frameworks">
          <p>
            React.js, Node.js, Angular, AngularJS, Backbone, jQuery, jQueryUI YUI
          </p>
          <p>
            Redux, Redux-Saga, Thunk, Axios, Express, D3.js, HighCharts, Socket.io
          </p>
        </SkillEntry>
        <SkillEntry skillHeading="Server Side development">
          <p>
            Node.js, Express, Hapi, PHP, FuelPHP, Spring Boot
          </p>
        </SkillEntry>
        <SkillEntry skillHeading="Hybrid Mobile development">
          <p>
            Ionic, React Native, Meteor
          </p>
        </SkillEntry>
        <SkillEntry skillHeading="Familiar with">
          <p>
            RabbitMQ, Solr, Redis, MongoDB, MySQL, Test &amp; Target, Google Maps, MapBox,
          </p>
        </SkillEntry>
        <SkillEntry skillHeading="Exploring">
          <ul>
            <li>Data Science with Python using NumPy and Pandas, </li>
            <li>Deep Learning with Tensorflow</li>
            <li>IoT with Arduino and Raspberry Pi</li>
          </ul>
        </SkillEntry>


      </ul>
    </Section>
    <Section sectionHeader="Work Experience" sectionIcon={briefcase}>
      <WorkEntry company="Walmart" start="2016-05">
        <p>I am currently involved in building an in-house forecasting application which can handle the volume of one of the largest retailers. I am extensively involved in developing the UI, collaborating on APIs which are secured by gateways, and setting up deployment pipelines with CI/CD and regression. The application is extensively developed with micro-services and the UI application, developed in React.js, is powered by a Node.js backend which handles authentication, authorization, orchestration of API calls.</p>
        <p>I have worked on building the frontend of a self-service application which enables an end user to move data from various sources. This application was built using micro-services, and the frontend was served through a Node server which acts as an orchestrator between these services.</p>
        <p>I worked in the Analytics division of Walmart labs architecting the UI application architecture and the overall engineering architecture for a BI application that allows to build custom dashboards for various applications. I have worked on building application which help the business make decisions that impact the overall revenue of the company across different geographies and markets. Some of the applications I have built are Demand forecasting utility, Campaign Performance Monitoring, 360-degree customer profile. Apart from this, I am a founding member of the UI Community for Walmart, primarily being responsible for talent engagement and development and building proof-of-concept applications.</p>
        <p>I was involved in building an application which allows for profiling of unique customers and to measure their engagement with the various businesses of Walmart.
        Most applications had their frontend built were a mix of Angular.js (1.x), React, D3.js and served using Node.js.</p>
      </WorkEntry>
      <WorkEntry company="Snapwiz" start="2015-02" end="2016-05">
        <p>
          I was leading a team of enthusiastic developers in architecting and building an application christened as Glider(<a href="www.glider.ai">www.glider.ai</a>). Glider is an application which aims to ease and improve the hiring of resources by AI driven recommendation of jobs to candidates. It also included complete candidate management, 2-way communication from recruiter to candidate from desktop to mobile, platform assessments and much more. It was built on a stack comprising of Meteor.js, Node.js, Mongo, Python etc. with a variety of services via REST and SOAP interfaces.
        </p>
        <p>
          The glider application entails parsing of documents, ingest content from various sources of candidates and jobs, building of recommendation engines with NLP and highly reactive real-time application.
        </p>
        <p>
          Prior to this project, I was involved in the development and revamp of the UI of Edulastic (www.edulastic.com). This application is hugely built on a Backbone.js frontend stack, comprising of a variety of libraries including, HighCharts, Redactor, jQuery UI and more. I was responsible for making the application compliant to standards and make it responsive. I was also tasked with developing an interface for having searchable content in the material for the application.
        </p>

      </WorkEntry>
      <WorkEntry company="Tribune Digital Ventures" start="2013-12" end="2015-02">
        <p>
          I was part of 5-member team that did an overhaul for the hugely outdated zap2it.com which was one of the flagship TV Listings medium for Tribune. The application was built on a FuelPHP framework with a YUI3 based frontend.
        </p>
        <p>
          I set up the initial development environment and the UI framework for the application building various modules that interacted with various news sources for pulling in content from third parties.
          I also implemented the search engine for the application which interfaced with articles, cast and crew for TV Shows and Movies using a Solr service. I was also responsible for developing and implementing a reusable framework to easily implement Test & Target, Google, Chartbeat and Nielsen analytics on the platform. This further allowed for a major monetization on the platform in sponsored and ad revenue.
        </p>
      </WorkEntry>
      <WorkEntry company="Flipkart" start="2013-02" end="2013-11">

        <p>
          I was part of a 6-member team that built the onboarding platform for third party sellers on the e-commerce giant. The platform was a Node.js application with Backbone.js and Angular.js.
        </p>
        <p>
          I was responsible for building the UI and implementing proper asynchronous code on the server application. I contributed mostly in building the Order Management interface and integration with the various backend systems that included a SwiftMQ message broker, a Catalog Management System, A Pricing engine and a delivery scheduling system.
        </p>
        <p>
          After the initial launch, I was tasked with identifying and resolving bottlenecks which were caused during festive and offer seasons. In course of this activity, I established various patterns and built a dashboard tool to help DevOps in helping sellers with orders that were stuck in the pipeline. This gave me an intricate understanding of the architecture of the e-commerce application.
        </p>
      </WorkEntry>
      <WorkEntry company="Dell International Services" start="2012-04" end="2013-02">
        <p>
          I was part of an international team that built A/B test campaigns that were deployed to the various Dell websites to measure and gauge customer engagement and conversion. We were working with Adobe’s Test and Target platform to build high performant scripts, that would be injected into a page’s DOM at runtime.
        </p>
        <p>
          We would be developing and delivering test scripts that would run under 100ms and ensure that the customer sees no aberrance. Many of my campaigns that catered to recommendations based on the visitor’s segment, recommendation during checkout and optimized navigation interfaces were later integrated into the web sites during the dev iterations due to positive engagement and conversion.
        </p>
      </WorkEntry>
      <WorkEntry company="Wipro" start="2008-08" end="2012-04">
        <p>
          I started my career as a frontend developer for Dish.com. I was involved in implementing mockups along with interaction using JavaScript and Flash. Apart from mock-conversion, I was involved in cross browser testing and fixing issues with UI across browsers.
        </p>
      </WorkEntry>

    </Section>
    <Section sectionHeader="Professional Trainings and Certifications">
    </Section>
    <Section sectionHeader="Personal Projects and Explorations">
    </Section>
    <Section sectionHeader="Education">
    </Section>
  </Layout>
)

export default IndexPage
