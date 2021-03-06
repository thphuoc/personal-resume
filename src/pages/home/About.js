import React from 'react'
import Helmet from 'react-helmet/es/Helmet'

const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <Helmet
      title="About Phuoc Tran"
      meta={[
        {property: 'og:title', content: 'About Phuoc Tran'},
      ]}/>
    <div className="my-auto">
      <h1 className="mb-0">{`Nguyen `}
        <span className="text-primary">Van A</span>
      </h1>
      <div className='subheading'>Senior Software Engineer</div>
      <div className="subheading mb-5">{`Mobile: (+84)1666-459-432, Email: `}
        <a href="mailto:tranhuuphuoc88@gmail.com">tranhuuphuoc88@gmail.com</a>
        {`, Skype: tranhuuphuoc88, Birthday: 12/05/1988`}
      </div>
      <div className='text-primary mb-5'>Apply for the position: <strong>ReactJS/Android technical lead</strong></div>
      <p className="mb-5" style={{width: 1000, textAlign: 'justify'}}>
        I was born and grown in a countryside in Ha Tinh province. With a passion for computer from very soon.
        I become a Senior software engineer in <strong>ReactJs/Android/Java backend</strong> with over 7 years of experience.
        After graduated I spend a few months work in FPT Software in Da Nang city at the position Android developer, 3 years in Gameloft just focus on Video Game,
        2 years in <a href='http://foody.vn'>Foody</a> and build up a product on Android for more than 38 million users,
        1 year work Freelancer (In that duration have a few months work for VPBank) then back to FPT again with the role is <strong>Solution Architecture</strong> and work ODC at customer side is CBA (A software development HUB belong <a href="https://www.commbank.com.au/">Commonwealth Bank</a>) from <strong>03/2016 until now</strong>.
        During that time I've got lots of hands-on experiences at the positions like Android developer, ReactJs web developer, Backend developer, Scrum Master, DevOpts and Automation QA.
        Beside that I usually organize outdoor activities, team building, charity events for team and company. So that everyone usually called me is "party leader" ^^.
      </p>
      <ul className="list-inline list-social-icons mb-0">
        <li className="list-inline-item">
          <a href="https://www.facebook.com/phuocth4" target="_blank" rel='noopener noreferrer'>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/phuoc-tran-78375412a/" target="_blank" rel='noopener noreferrer'>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://github.com/thphuoc" target="_blank" rel='noopener noreferrer'>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default About