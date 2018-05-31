import React from 'react'
import Helmet from 'react-helmet/es/Helmet'

const Experience = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <Helmet
      title="Experience Phuoc Tran"
      meta={[
        {property: 'og:title', content: 'Experience Phuoc Tran'},
      ]}/>
    <div className="my-auto">
      <h2 className="mb-5">Experience</h2>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Senior Web Developer</h3>
          <div className="subheading mb-3">Project: <a href='https://kta.commbank.co.id/'>Personal Loan</a></div>
          <p>Allow individual customer have a loan online and then they have to go to a Kiosk to scan finger print, proof of resident,... and finally the loan will be transfer to balance account of customer</p>
          <p>
            Technical: ReactJS, Redux, HTML5, CSS3, bootstrap 4, RxJS,...<br/>
            Middleware: Epic, Enzyme, Jest, jQuery, react-router,...<br/>
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2016 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Senior Android Developer</h3>
          <div className="subheading mb-3">Project: <a href='http://www.whatsnewjakarta.com/commonwealth-bank-introduces-a-faster-new-way-of-banking/'>Kiosk</a></div>
          <p>As I mentioned above, after customer make a loan on website they have to go to a nearby Kiosk to verify ID Card, Payslip, scan finger print and then they will have a card with loan amount inside.</p>
          <p>
            Technical: Android, Retrofit, RxJava,...<br/>
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2016 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Senior Android Developer</h3>
          <div className="subheading mb-3">Project: Smart App (in development)</div>
          <p>This project provide for end use manage individual financial. It like other Internet banking app in Vietnam that we are using.</p>
          <p>
            Technical: Android, Retrofit, RxJava, Dagger2,...
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2016 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Java backend developer</h3>
          <div className="subheading mb-3">Project: Core banking</div>
          <p>This project we build a core banking base on <a href='https://www.mambu.com/'> mambu cloud banking</a> which will be provide as a global platform for Commonwealth Bank on the world leverage the Microservice architecture and Spring framework.</p>
          <p>
            Technical: String boot, String cloud, Netflix stack,...<br/>
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2016 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Senior Android developer</h3>
          <div className="subheading mb-3">Project: <a href='https://timo.vn/?referredBy=PEFGK'>Timo</a></div>
          <p>This product like an Internet banking app but free transfer money fee.</p>
          <p>
            Technical: Android, Retrofit, RxJava, Dagger2,...
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2016 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Technical lead Freelancer team</h3>
          <div className="subheading mb-3">Project: Q_POS (Position of sell)</div>
          <p>This product provide for seller a tool to make report to sell manager the information like: revenue, shop status, display/testing device in shops broken or not... This product use for internal</p>

          <p>
            Technical: Android, Retrofit, RxJava,...
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">July 2015 - March 2016</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Senior Android developer (Work at Foody)</h3>
          <div className="subheading mb-3">Project: <a href='http://foody.vn'>Foody</a></div>
          <p>This product provide for end user a tool to search food location, reserve table, review,...</p>
          <p>
            Technical: Android, Retrofit, RxJava,...
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">March 2013 - May 2015</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Android Video Game developer (Work Gameloft)</h3>
          <div className="subheading mb-3">Project: <a href='https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftR7HM'>Asphalt 8, Modern Combat 5, Real Football</a></div>
          <p>During this time I work in retail department. It mean we just fix bug and posting game from iOS to Android. In this duration as well I have learned many skill regarding Android, debug,...</p>

          <p>
            Technical: Android, C/C++
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">2010 - 2013</span>
        </div>
      </div>

    </div>

  </section>
)

export default Experience