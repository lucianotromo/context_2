import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Context from './context/context'
import { useState, useEffect } from "react"
import Home from './views/home'
import Pokemon from './views/Pokemon'
import Pokemones from './views/Pokemones'
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState([])
  const globalState = { data }

  useEffect(()=> {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res)=> res.json())
    .then((json)=> setData(json.results))
    .catch((e)=> console.log(e))
  }, [])

  return (
    <div className="App">
      <Context.Provider value={globalState}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/Pokemones' element={ <Pokemones/>}></Route>
        <Route path='/Pokemones/:name' element={ <Pokemon/>}></Route>
      </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  )
}


export default App 

