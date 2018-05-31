import React from 'react'
import Helmet from 'react-helmet/es/Helmet'

const Education = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <Helmet
      title="Education of Phuoc Tran"
      meta={[
        {property: 'og:title', content: 'Education Phuoc Tran'},
      ]}/>
    <div className="my-auto">
      <h2 className="mb-5">Education</h2>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">Duy Tan University</h3>
          <div className="subheading mb-3">Graduated the field Software technology in 2010</div>
          <div>In school he always lead faculty of information technology for the parts which related to programming.
            Always have a passion with software, usually ready to support for other one.
            Always active in study and learning.
          </div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">August 2006 - May 2010</span>
        </div>
      </div>

    </div>
  </section>
)

export default Education