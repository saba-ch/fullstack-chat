import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/Main'
import EnterName from './pages/EnterName'
import JoinSection from './pages/JoinSection'
import Section from './pages/Section'

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Main} />
      <Route exact path='/enter-name' component={EnterName} />
      <Route exact path='/join-section' component={JoinSection} />
      <Route exact path='/section/:sectionId' component={Section} />
    </BrowserRouter>
  )
}

export default Router
