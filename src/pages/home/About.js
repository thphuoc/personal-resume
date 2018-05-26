import React from 'react'

const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0">{`Tran `}
        <span className="text-primary">Huu Phuoc</span>
      </h1>
      <div className="subheading mb-5">{`Dien Bien Phu st, Binh Thanh district, Ho Chi Minh city `}
        <a href="mailto:tranhuuphuoc88@gmail.com">tranhuuphuoc88@gmail.com</a>
      </div>
      <p className="mb-5" style={{width: 600, textAlign: 'justify'}}>
        He was born and grown in a countryside in Ha Tinh province. With a passion for computer from very soon.
        He become a Senior software engineer in Android/ReactJs/Java backend with over 7 years of experience util now.
        After graduated he spend a few months work in FPT Software in Da Nang city at position Android developer, 3 years in Gameloft just focus on Video Game,
        2 years in Foody and build up a product on Android for more than 38 milions user util now,
        1 year work Freelancer (In that duration have a few months work for VPBank) and join Commonwealth Bank from 03/2016 util now.
        During that time he has got a lot of experiences, knowledge and skill-set regarding development process and technical skill,…
        And also in that duration, he has developed so many products was launch production consist of mobile app and website.
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