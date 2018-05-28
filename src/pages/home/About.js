import React from 'react'

const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0">{`Tran `}
        <span className="text-primary">Huu Phuoc</span>
      </h1>
      <div className='subheading'>Senior Software Engineer</div>
      <div className="subheading mb-5">{`Mobile: (+84)1666-459-432, Email: `}
        <a href="mailto:tranhuuphuoc88@gmail.com">tranhuuphuoc88@gmail.com</a>
        {`, Skype: tranhuuphuoc88`}
      </div>
      <p className="mb-5" style={{width: 600, textAlign: 'justify'}}>
        He was born and grown in a countryside in Ha Tinh province. With a passion for computer from very soon.
        He become a Senior software engineer in Android/ReactJs/Java backend with over 7 years of experience.
        After graduated he spend a few months work in FPT Software in Da Nang city at the position Android developer, 3 years in Gameloft just focus on Video Game,
        2 years in Foody and build up a product on Android for more than 38 million users,
        1 year work Freelancer (In that duration have a few months work for VPBank) and then join Commonwealth Bank from 03/2016 until now.
        During that time he's had hands-on experience at many positions like Android developer, ReactJs web developer, Backend developer, Scrum Master, DevOpts and Automation QA.
        He usually active organize outdoor activities, team building events for team and company. So everyone called him by a pretty title is "party leader" ^^.
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