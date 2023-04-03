import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"

function App() {
  return (
    <>
      <Navbar />
      <div className="content box m-4">
        <Content />
      </div>
    </>
  );
}

export default App
