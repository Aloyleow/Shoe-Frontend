import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import DisplayPage from "./pages/DisplyaPage"
import { useState, useEffect } from "react"
import displayShoes from "./services/displayShoesService";
import AddShoePage from "./pages/AddShoePage";
import SingleShoePage from "./pages/SingleShoePage";
import CustomizePage from "./pages/CustomizePage";

function App() {
  const [shoes, setShoes] = useState<DisplayShoes>([])

  const loadDisplay = async () => {

    try {

      const retrieveData: DisplayShoes = await displayShoes();
      setShoes(retrieveData)

    } catch (error) {

      if (error instanceof TypeError) {

        console.error("Server Error, please contact admin");

      } else if (error instanceof Error) {

        console.error(`${error.message}`);

      } else {

        console.error("Client Error");

      }
      
    }
  }
  

  useEffect(() => {
    loadDisplay()
  },[])

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DisplayPage shoes={shoes} />} />
        <Route path="/addshoe" element={<AddShoePage loadDisplay={loadDisplay} />} />
        <Route path="/shoe/:shoesid" element={<SingleShoePage loadDisplay={loadDisplay} shoes={shoes}/>} />
        <Route path="/customize" element={<CustomizePage />} />
      </Routes>
    </>
  )
}

export default App
