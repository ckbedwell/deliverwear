import './App.css'
import React from 'react'

import { Header } from './Header'
import { Wearables } from './Wearables'
import { AddWearableForm } from './AddWearableForm'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mock-api/browser')
  worker.start()
}

function App() {
  return (
    <div className="app">
      
      <Header />
      <Wearables />
      <AddWearableForm />
    </div>
  )
}

export default App
