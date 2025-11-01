import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/tailwind.css'
import "./styles/App.scss"
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
