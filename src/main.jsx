import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import { FireBaseProvider } from '../services/context/Firebase.jsx'
import './index.css'
import BackToTop from './utlities/BackToTop.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
        

    <FireBaseProvider>
      <App />
      <BackToTop />
    </FireBaseProvider>
  </StrictMode>,
)
