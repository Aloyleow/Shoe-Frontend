import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addShoeBrand, displayShoeBrands } from '../services/shoeBrandsService';

type SbrandSelectProps = {
  setShoeData: React.Dispatch<React.SetStateAction<UploadShoe>>;
  shoeData: UploadShoe;
}

type ShoeBrandData = {
  brandname: string
}

const SbrandSelect: React.FC<SbrandSelectProps> = ({ setShoeData, shoeData }) => {
  const [shoeBrands, setShoeBrands] = useState<DisplayShoeBrand>()
  const [showAddBrand, setShowAddBrand] = useState<boolean>(false);
  const [newBrand, setNewBrand] = useState<ShoeBrandData>({
    brandname: ""
  })

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

  useEffect(() => {

    loadData()

  }, [])

  const handleOptionChange = (value: string) => {

    if (value === "new") {
      setShowAddBrand(true)
    } else {
      setShoeData({ ...shoeData, brandid: parseInt(value) })
      setShowAddBrand(false)
    }

  }

  const handleSubmit = async () => {

    try {

      await addShoeBrand(newBrand);
      setShowAddBrand(false);
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
        <Form.Label>Brand</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) =>
            handleOptionChange(event.target.value)
          }>
          <option>Select...</option>
          {shoeBrands?.map((item, index) => (
            <option value={item.brandid} key={index}>
              {item.brandname}
            </option>
          ))}
          <option value="new">Add new type</option>
        </Form.Select>
        <Form.Text className="text-muted">
          Eg. Prada
        </Form.Text>
      </Form.Group>
      {showAddBrand &&
        <Form.Group className="mb-3">
          <Form.Label>Add Brand</Form.Label>
          <Form.Control 
            type="text"
            value={newBrand.brandname}
            onChange={(event) => setNewBrand({brandname: event.target.value})} 
          />
          <Button variant="primary" onClick={() => handleSubmit()}>
            Add Shoe Brand
          </Button>
        </Form.Group>}
    </>
  )
}

export default SbrandSelect