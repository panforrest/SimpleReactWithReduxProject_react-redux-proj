import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
// import Intro from './components/presentation/Intro'

import { Users, CurrentUsers } from './components/containers'


const app = (
	<Provider store={store.configure(null)}>
	  <div>
        <Users />
        <CurrentUsers />
      </div>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))