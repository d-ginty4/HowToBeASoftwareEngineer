import { Navbar } from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Java } from "./pages/Java";
import { Error } from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HowToBeASoftwareEngineer" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="java" element={<Java />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
