import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home";
import "./index.scss"
import { useState } from "react";


function App() {

  const [mode, SetMode] = useState(false)

  const handleModeChange = () => {
    SetMode(!mode)
  }

  return (
    <div className={`App ${mode ? 'dark-mode' : ''}`}>
      <Navbar mode={mode} onModeChange={handleModeChange} />
      <Home mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
