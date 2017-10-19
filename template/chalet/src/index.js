import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import 'normalize.css'

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

render()
