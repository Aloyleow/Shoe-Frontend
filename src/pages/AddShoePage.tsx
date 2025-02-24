import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddShoePage = () => {
  const [shoeData, setShoeData] = useState<UploadShoe>()

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name of Shoe</Form.Label>
          <Form.Control type="email" placeholder="Enter name" />
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Name of Shoe</Form.Label>
          <Form.Control type="email" placeholder="Enter name" />
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name of Shoe</Form.Label>
          <Form.Control type="email" placeholder="Enter name" />
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name of Shoe</Form.Label>
          <Form.Control type="email" placeholder="Enter name" />
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>Color of Shoe</Form.Label>
          <Form.Control type="email" placeholder="Enter color" />
          <Form.Text className="text-muted">
            Eg. Red sleek maroon
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Miscellaneous</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price of Shoe</Form.Label>
          <div className="d-flex">
           <p> SGD$ </p>
           <Form.Control type="email" placeholder="Enter name" /> 
          </div>
          
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AddShoePage
