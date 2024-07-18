import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 flex flex-col">
          <Login />
        </div>
      </Router>
    </>
  )
}

export default App
