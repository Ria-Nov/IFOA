import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyCard from './components/AllTheBooks';
import ButtonComponent from './components/ButtonComponent'

function App() {

  return (
    <>
    <div>
    <MyNav />
    <MyJumbotron />
    <ButtonComponent />
    <MyCard />
    <MyFooter />
    </div>
    </>
  )
}

export default App
