import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'

import AppContenxt from "../contexts/AppContext"
import reducer from '../reducers'


const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContenxt.Provider value={{ state, dispatch }} >
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContenxt.Provider>
  )
}

export default App
