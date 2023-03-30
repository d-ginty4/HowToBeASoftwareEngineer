import { Navbar } from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HowToBeASoftwareEngineer" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
