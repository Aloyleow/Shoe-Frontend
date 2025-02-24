import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addShoeTypes, displayShoeTypes } from '../services/shoeTypesService';

type StypeSelectProps = {
  setShoeData: React.Dispatch<React.SetStateAction<UploadShoe>>;
  shoeData: UploadShoe;
}

type ShoeTypeData = {
  typename: string
}

const StypeSelect: React.FC<StypeSelectProps> = ({ setShoeData, shoeData }) => {
  const [shoeTypes, setShoeTypes] = useState<DisplayShoeType>()
  const [showAddType, setShowAddType] = useState<boolean>(false);
  const [newType, setNewType] = useState<ShoeTypeData>({
    typename: ""
  })

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

  useEffect(() => {

    loadData()

  }, [])

  const handleOptionChange = (value: string) => {

    if (value === "new") {
      setShowAddType(true)
    } else {
      setShoeData({ ...shoeData, typeid: parseInt(value)})
      setShowAddType(false)
    }

  }

  const handleSubmit = async () => {

    try {

      await addShoeTypes(newType);
      setShowAddType(false);
      await loadData();

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
    <>
      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) =>
            handleOptionChange(event.target.value)
          }>
          <option>Select...</option>
          {shoeTypes?.map((item, index) => (
            <option value={item.typeid} key={index}>
              {item.typename}
            </option>
          ))}
          <option value="new">Add new type</option>
        </Form.Select>
        <Form.Text className="text-muted">
          Eg. Loafers
        </Form.Text>
      </Form.Group>
      {showAddType &&
        <Form.Group className="mb-3">
          <Form.Label>Add Type</Form.Label>
          <Form.Control 
            type="text"
            value={newType.typename}
            onChange={(event) => setNewType({typename: event.target.value})} 
          />
          <Button variant="primary" onClick={() => handleSubmit()}>
            Add Shoe Type
          </Button>
        </Form.Group>}
    </>

  )
}

export default StypeSelect