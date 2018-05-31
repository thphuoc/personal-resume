import React, { Component } from 'react'
import '../../App.css'
import '../../asserts/css/resume.min.css'
import Menu from './Menu'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'
import Certifications from './Certifications'
import Helmet from 'react-helmet/es/Helmet'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Helmet
          title="About"
          meta={[
            {property: 'og:title', content: 'About'},
          ]} />
        <Menu/>
        <div className="container-fluid p-0">
          <About/>
          <Experience/>
          <Education/>
          <Skills/>
          <Interests/>
          <Certifications/>
        </div>
      </div>

    )
  }
}

export default App
