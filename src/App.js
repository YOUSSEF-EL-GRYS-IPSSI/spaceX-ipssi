import './styles/App.css'
import React from 'react'
import Router from './router/Router'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {
   return (
      <>
         <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
         />
         <ToastContainer />
         <Router />
      </>
   )
}

export default App
