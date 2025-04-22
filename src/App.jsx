import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Download from "./pages/Download"


const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download-womanpreneur-mindset-for-success" element={<Download />} />
      </Routes>
    </main>
  )
}

export default App