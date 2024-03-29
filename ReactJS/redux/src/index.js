import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'

import './index.css'

import App from './App'
import configStore from './store/storeConfig'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
