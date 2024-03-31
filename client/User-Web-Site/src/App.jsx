import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import User from './Component/User'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
