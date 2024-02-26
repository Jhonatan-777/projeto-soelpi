import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./assets/components/footer/Footer"
import Header from "./assets/components/header/Header"
import Home from "./pages/home/Home"
import PersonPage from "./pages/person/Person"
import WordPage from "./pages/word/WordPage"


function App()
{

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/word" element={<WordPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
