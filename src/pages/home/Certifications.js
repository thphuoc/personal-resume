import React from 'react'
import psdi from '../../asserts/pdf/psdi.pdf'
import aws from '../../asserts/pdf/aws.pdf'
import Helmet from 'react-helmet/es/Helmet'

const Certifications = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
    <Helmet
      title="Certifications of Phuoc Tran"
      meta={[
        {property: 'og:title', content: 'Certifications Phuoc Tran'},
      ]}/>
    <div className="my-auto">
      <h2 className="mb-5">Awards &amp; Certifications</h2>
      <ul className="fa-ul mb-0">
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>
          <a href={psdi}>Professional Scrum Developer</a>
        </li>
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>
          <a href={aws}>AWS Associate Solution Architecture</a>
        </li>
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>
          Big Data Apache Spark (In progress)
        </li>
      </ul>
    </div>
  </section>
)

export default Certifications