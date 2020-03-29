import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'

import AppContenxt from "../contexts/AppContext"
import reducer from '../reducers'

console.log(AppContenxt)

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContenxt.Provider value={"Hello Provider"} >
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContenxt.Provider>
  )
}

export default App
