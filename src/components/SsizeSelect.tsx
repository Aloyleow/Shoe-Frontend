import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { addShoeSize, displayShoeSizes } from '../services/shoeSizeService';
import { Button } from 'react-bootstrap';


type SsizeSelectProps = {
  setShoeData: React.Dispatch<React.SetStateAction<UploadShoe>>;
  shoeData: UploadShoe;
}

type ShoeSizeData = {
  sizecountry: string;
  sizenumber: number;
}

const SsizeSelect: React.FC<SsizeSelectProps> = ({ setShoeData, shoeData }) => {
  const [shoeSizes, setShoeSizes] = useState<DisplayShoeSize>()
  const [showAddSize, setShowAddSize] = useState<boolean>(false);
  const [newSize, setNewSize] = useState({
    sizecountry: "",
    sizenumber: "",
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

  useEffect(() => {

    loadData()

  }, [])

  const handleOptionChange = (value: string) => {

    if (value === "new") {
      setShowAddSize(true)
    } else {
      setShoeData({ ...shoeData, sizeid: parseInt(value) })
      setShowAddSize(false)
    }

  }

  const handleSubmit = async () => {

    try {

      const changeData: ShoeSizeData = {
        sizecountry: newSize.sizecountry,
        sizenumber: parseFloat(newSize.sizenumber)
      }

      await addShoeSize(changeData);
      setShowAddSize(false);
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
        <Form.Label>Size</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) =>
            handleOptionChange(event.target.value)
          }>
          <option>Select...</option>
          {shoeSizes?.map((item, index) => (
            <option value={item.sizeid} key={index}>
              {item.sizecountry}{item.sizenumber}
            </option>
          ))}
          <option value="new">Add new type</option>
        </Form.Select>
        <Form.Text className="text-muted">
          Eg. Prada
        </Form.Text>
      </Form.Group>
      {showAddSize &&
        <Form.Group className="mb-3">
          <Form.Label>Add Size</Form.Label>
          <Form.Control
            type="number"
            step={0.1}
            value={newSize.sizenumber}
            onChange={(event) => setNewSize({ ...newSize, sizenumber: event.target.value })}
          />
          <Form.Text className="text-muted">
            Eg. 8.5
          </Form.Text>
          <Form.Select
            aria-label="Default select example"
            onChange={(event) =>
              setNewSize({ ...newSize, sizecountry: event.target.value }) 
            }>
            <option value="UK">UK</option>
            <option value="US">US</option>
            <option value="EURO">EURO</option>
          </Form.Select>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Add Shoe Size
          </Button>
        </Form.Group>}
    </>
  )
}

export default SsizeSelect

