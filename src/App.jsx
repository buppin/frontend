import { HashRouter, Route, Routes } from 'react-router-dom'
import './styles/tailwind.css'
import "./styles/App.scss"
import Home from './pages/Home'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="/a" element={<Home></Home>}>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
