import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import DisplayPage from "./pages/DisplyaPage"
import { useState, useEffect } from "react"
import displayShoes from "./services/displayShoesService";

function App() {
  const [shoes, setShoes] = useState<DisplayShoes>([])

  useEffect(() => {

    const loadData = async() => {

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
    loadData()

  },[shoes])

  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DisplayPage shoes={shoes}/>} />
      </Routes>

    </>
  )
}

export default App
