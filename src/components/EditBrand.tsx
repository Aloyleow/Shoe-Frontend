import { useState } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { displayShoeBrands, editShoeBrands } from "../services/shoeBrandsService";

const EditBrand = () => {
  const [shoeBrands, setShoeBrands] = useState<DisplayShoeBrand>()
  const [closeBrands, setCloseBrands] = useState<boolean>(true)
  const [newBrand, setNewBrand] = useState<string>("")

  const loadData = async () => {

    try {

      const retrieveData: DisplayShoeBrand = await displayShoeBrands();
      setShoeBrands(retrieveData)

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

  const handleEdit = async(brandid: number, brandname: string) => {

    try {

      await editShoeBrands({
        newbrandname: newBrand,
        brandid: brandid,
        brandname: brandname
      })
      await loadData()
      setCloseBrands(true)
      
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

    if (!shoeBrands) {
      await loadData()
    }

    setCloseBrands(false)

  }

  return (
    <>
      {closeBrands ?
        <Row>
          <Col xs={12}>
            <Button onClick={() => handleOnOpen()}>
              Edit Shoe Brands
            </Button>
          </Col>
        </Row>
        :
        <Row>
          {shoeBrands?.map((items, index) => (
            <Col xs={12} md={3} key={index}>
              <p>{items.brandname}</p>
              <input
                type="text"
                onChange={(event) => setNewBrand(event.target.value)}
              />
              <Button onClick={() => handleEdit(items.brandid, items.brandname)}>
                Edit
              </Button>
            </Col>
          ))}
          <Col xs={12}>
            <Button onClick={() => setCloseBrands(true)}>
              Close Shoe Brands
            </Button>
          </Col>
        </Row>
      }
    </>
  )
}

export default EditBrand