import { useState } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { displayShoeSizes, editShoeSizes } from "../services/shoeSizeService";

const EditSize = () => {
  const [shoeSizes, setShoeSizes] = useState<DisplayShoeSize>()
  const [closeSizes, setCloseSizes] = useState<boolean>(true)
  const [newSize, setNewSize] = useState({
    newsizecountry: "",
    newsizenumber: 0,
  })

  const loadData = async () => {

    try {

      const retrieveData: DisplayShoeSize = await displayShoeSizes();
      setShoeSizes(retrieveData)

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

  

  const handleEdit = async (sizeid: number, sizecountry: string, sizenumber: number) => {

    try {
  
      await editShoeSizes({
        newsizecountry: newSize.newsizecountry === "" ? sizecountry : newSize.newsizecountry,
        newsizenumber: newSize.newsizenumber === 0 ? sizenumber : newSize.newsizenumber,
        sizeid: sizeid,
        sizecountry: sizecountry,
        sizenumber: sizenumber,
      })
      
      await loadData()
      setCloseSizes(true)

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

  const handleOnOpen = async () => {

    if (!shoeSizes) {
      await loadData()
    }

    setCloseSizes(false)

  }

  return (
    <>
      {closeSizes ?
        <Row>
          <Col xs={12}>
            <Button onClick={() => handleOnOpen()}>
              Edit Shoe Sizes
            </Button>
          </Col>
        </Row>
        :
        <Row>
          {shoeSizes?.map((items, index) => (
            <Col xs={12} md={3} key={index}>
              <p>{items.sizecountry}{items.sizenumber}</p>     
              <label>Country</label>
              <select onChange={(event) => setNewSize({ ...newSize, newsizecountry: event.target.value })}>
                <option value="UK">UK</option>
                <option value="US">US</option>
                <option value="EURO">EURO</option>
              </select>
              <label>Size number</label>
              <input
                type="number"
                step={0.1}
                onChange={(event) => setNewSize({ ...newSize, newsizenumber: parseFloat(parseFloat(event.target.value).toFixed(1)) })}
              />
              <Button onClick={() => handleEdit(items.sizeid, items.sizecountry, items.sizenumber)}>
                Edit
              </Button>
            </Col>
          ))}
          <Col xs={12}>
            <Button onClick={() => setCloseSizes(true)}>
              Close Shoe Sizes
            </Button>
          </Col>
        </Row>
      }
    </>
  )
}

export default EditSize