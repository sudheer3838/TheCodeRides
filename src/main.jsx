import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store.js';


import App from './App.jsx'
import { FireBaseProvider } from '../services/context/Firebase.jsx'
import './index.css'
import BackToTop from './utlities/BackToTop.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <FireBaseProvider>
        <App />
        <BackToTop />
      </FireBaseProvider>
    </Provider>
  </StrictMode>,
)
