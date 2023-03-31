import { Navbar } from "./components/Navbar"
import { Page } from "./components/Page"

function App() {
  return (
    <>
      <Navbar />
      <div className="content box m-4">
        <Page />
      </div>
    </>
  );
}

export default App
