import './App.css'
import React from 'react'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App(){
  return (
    <div className='app'>
      <Routes />
      {/* ToastContainer -> é a caixa do pop up */}
      {/* autoClose -> especifica o tempo que o pop up fica na tela */}
      <ToastContainer autoClose={3000} />
    </div>
  )
}