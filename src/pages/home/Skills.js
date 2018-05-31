import React from 'react'
import Helmet from 'react-helmet/es/Helmet'

const Skills = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
    <Helmet
      title="Skills of Phuoc Tran"
      meta={[
        {property: 'og:title', content: 'Skills of Phuoc Tran'},
      ]}/>
    <div className="my-auto">
      <h2 className="mb-5">Skills</h2>

      <div className="subheading mb-3">Programming Languages</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-check"/>
          Java + Lambda
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Javascript + ES6
        </li>
      </ul>

      <div className="subheading mb-3">Technicals/Framework</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-check"/>
          ReactJS Web development
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Android mobile development
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Backend development base on Spring boot, Spring cloud, Netflix stack, Microservice architecture, Kafka, Docker,...
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Amazon webservice
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Automation test base on Cucumber and Selenium framework
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Java Unit-testing base on Mockito/PowerMockito
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Javascript Unit-testing base on Jest
        </li>
      </ul>

      <div className="subheading mb-3">Management</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-check"/>
          Team lead
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Scrum master
        </li>
      </ul>

      <div className="subheading mb-3">Development Tools</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-check"/>
          Git, Webstorm, Jira, Confluence, Ubuntu, Android studio, Intellij, Teamcity, SonarQube, npm, Bitbucket, Zeplin,...
        </li>
      </ul>

      <div className="subheading mb-3">Soft skill-set</div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fa fa-check"/>
          Event organization (Team building, team outdoor activities, company trip, charity activities, trekking,...)
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Communication, sharing and supporting
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Teamwork/Solo
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Team lead/Team management
        </li>
      </ul>

      <div className="subheading mb-3">Core values</div>
      <ul className='fa-ul'>
        <li>
          <i className="fa-li fa fa-check"/>
          Collaboration
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Accountability
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Integrity
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Service
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Professional
        </li>
      </ul>

      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <i className="fa-li fa fa-check"/>
          CI/CD (Continuous Integration/Continuous Development)
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Pair code review
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Pair programming
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Cross Functional Teams
        </li>
        <li>
          <i className="fa-li fa fa-check"/>
          Agile Development &amp; Scrum
        </li>
      </ul>
    </div>
  </section>
)

export default Skills