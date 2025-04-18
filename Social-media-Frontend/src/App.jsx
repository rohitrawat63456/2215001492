import { Routes,Route } from "react-router-dom"
import { Home } from "./Components/Home";
function App() {
  return (
    <>
    <Routes>
       <Route path="/feed" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/topusers" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
