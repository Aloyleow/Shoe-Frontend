import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import editShoe from "../services/editShoeService";

type EditShoeFormProps = {
  obj: DisplaySingle;
  loadDisplay: () => Promise<void>;
}

const EditShoeForm: React.FC<EditShoeFormProps> = ({ obj, loadDisplay }) => {
  const [editData, setEditData] = useState<EditShoe>({
    name: "",
    colour: "",
    miscellaneous: "",
    shoesid: obj.shoesid
  })
  const [spinner, setSpinner] = useState<boolean>(false)

  const handleSubmit = async () => {

    setSpinner(true)

    try {

      const checkData: EditShoe = {
        name: editData.name.trim() === "" ? obj.name : editData.name,
        colour: editData.colour.trim() === "" ? obj.name : editData.colour,
        miscellaneous: editData.miscellaneous.trim() === "" ? obj.name : editData.colour,
        shoesid: editData.shoesid
      }

      await editShoe(checkData)
      loadDisplay()
      setSpinner(false)

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

  return (
    <Col xs={12} md={6}>
      <Form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <Form.Group className="mb-3">
          <Form.Label>Edit name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) =>
              setEditData({ ...editData, name: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edit Color</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) =>
              setEditData({ ...editData, colour: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edit Miscellaneous</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) =>
              setEditData({ ...editData, miscellaneous: event.target.value })
            }
          />
        </Form.Group>
        {spinner ?
          <Spinner animation="border" variant="primary" />
          :
          <Button variant="primary" type="submit">
            Edit Shoe
          </Button>
        }
      </Form>

    </Col>
  )
}

export default EditShoeForm