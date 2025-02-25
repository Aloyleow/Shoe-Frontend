import { useState } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { displayShoeTypes, editShoeTypes } from "../services/shoeTypesService";
import Button from "react-bootstrap/Button";

const EditType = () => {

  const [shoeTypes, setShoeTypes] = useState<DisplayShoeType>()
  const [closeTypes, setCloseTypes] = useState<boolean>(true)
  const [newType, setNewType] = useState<string>("")

  const loadData = async () => {

    try {

      const retrieveData: DisplayShoeType = await displayShoeTypes();
      setShoeTypes(retrieveData)

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

  const handleEdit = async(typeid: number, typename: string) => {

    try {
      
      await editShoeTypes({
        newtypename: newType,
        typeid: typeid,
        typename: typename
      })
      await loadData()
      setCloseTypes(true)
      
      
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

    if (!shoeTypes) {
      await loadData()
    }

    setCloseTypes(false)

  }

  return (
    <>
      {closeTypes ?
        <Row>
          <Col xs={12}>
            <Button onClick={() => handleOnOpen()}>
              Edit Shoe Types
            </Button>
          </Col>
        </Row>
        :
        <Row>
          {shoeTypes?.map((items, index) => (
            <Col xs={12} md={3} key={index}>
              <p>{items.typename}</p>
              <input
                type="text"
                onChange={(event) => setNewType(event.target.value)}
              />
              <Button onClick={() => handleEdit(items.typeid, items.typename)}>
                Edit
              </Button>
            </Col>
          ))}
          <Col xs={12}>
            <Button onClick={() => setCloseTypes(true)}>
              Close Shoe Types
            </Button>
          </Col>
        </Row>
      }
    </>
  )
}

export default EditType