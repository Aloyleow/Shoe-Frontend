import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StypeSelect from './StypeSelect';
import SbrandSelect from './SbrandSelect';
import SsizeSelect from './SsizeSelect';

type AddShoeFormProps = {
  setShoeData: React.Dispatch<React.SetStateAction<UploadShoe>>;
  shoeData: UploadShoe
}

const AddShoeForm: React.FC<AddShoeFormProps> = ({ setShoeData, shoeData }) => {

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name of Shoe</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        <StypeSelect setShoeData={setShoeData} shoeData={shoeData}/>
        <SbrandSelect setShoeData={setShoeData} shoeData={shoeData}/>
        <SsizeSelect setShoeData={setShoeData} shoeData={shoeData}/>
        <Form.Group className="mb-3">
          <Form.Label>Color of Shoe</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Eg. Red sleek maroon
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Miscellaneous</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price of Shoe</Form.Label>
          <div className="d-flex">
            <p> SGD$ </p>
            <Form.Control type="number" placeholder="00.00" />
          </div>
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Shoe
        </Button>
      </Form>
    </>
  )
}

export default AddShoeForm
