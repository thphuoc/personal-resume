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

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
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
