import React from 'react'
import Header from './Header'
import Main from './Main'
import Nav from './Nav'
export const App = () => {
  return (
    <div className='app bg-slate-900  '>

      <Header/>
      <Nav/>
      <Main/>
    </div>
  )
}
export default App

