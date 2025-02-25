import { Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import DisplayPage from "./pages/DisplyaPage"
import { useState, useEffect } from "react"
import displayShoes from "./services/displayShoesService";
import AddShoePage from "./pages/AddShoePage";
import SingleShoePage from "./pages/SingleShoePage";
import CustomizePage from "./pages/CustomizePage";
import { Spinner } from "react-bootstrap";

function App() {
  const [shoes, setShoes] = useState<DisplayShoes>([])
  const [loading, setLoading] = useState<boolean>(true)

  const loadDisplay = async () => {

    try {

      const retrieveData: DisplayShoes = await displayShoes();
      setShoes(retrieveData)
      setLoading(false)

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
    <div>
      <NavigationBar />
      {loading &&
      <div>
        <h1>Hold On Tight..backend server loading</h1>
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
      }
      <Routes>
        <Route path="/" element={<DisplayPage shoes={shoes} />} />
        <Route path="/addshoe" element={<AddShoePage loadDisplay={loadDisplay} />} />
        <Route path="/shoe/:shoesid" element={<SingleShoePage loadDisplay={loadDisplay} shoes={shoes}/>} />
        <Route path="/customize" element={<CustomizePage />} />
      </Routes>
    </div>
  )
}

export default App
