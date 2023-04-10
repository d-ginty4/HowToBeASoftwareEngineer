import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Error } from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="content box m-4">
        <BrowserRouter>
          <Routes>
            <Route path="/HowToBeASoftwareEngineer" element={<Content />} />
            <Route
              path="/HowToBeASoftwareEngineer/:page"
              element={<Content />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
