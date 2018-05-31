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
import Switch from 'react-router-dom/es/Switch'
import Route from 'react-router-dom/es/Route'

class App extends Component {
  render () {
    return (
      <div>
        <Menu/>
        <div className="container-fluid p-0">
          <Switch>
            <Route exact path='/' render={About}/>
            <Route exact path='/experience' render={Experience}/>
            <Route exact path='/education' render={Education}/>
            <Route exact path='/skills' render={Skills}/>
            <Route exact path='/interests' render={Interests}/>
            <Route exact path='/certifications' render={Certifications}/>
          </Switch>
        </div>
      </div>

    )
  }
}

export default App
