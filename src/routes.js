import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'

function routes() {
  return (
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<LoginForm />} />
    </Routes>
  )
}

export default routes