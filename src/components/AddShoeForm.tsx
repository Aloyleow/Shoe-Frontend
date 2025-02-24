import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import StypeSelect from './StypeSelect';
import SbrandSelect from './SbrandSelect';
import SsizeSelect from './SsizeSelect';
import uploadShoe from '../services/uploadShoeService';
import { useNavigate } from 'react-router-dom';

type AddShoeFormProps = {
  setShoeData: React.Dispatch<React.SetStateAction<UploadShoe>>;
  shoeData: UploadShoe
  loadDisplay: () => Promise<void>;
}

const AddShoeForm: React.FC<AddShoeFormProps> = ({ setShoeData, shoeData, loadDisplay}) => {
  const [file, setFile] = useState<File>()
  const [spinner, setSpinner] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {

    setSpinner(true)

    try {
      
      if (!file){
        await uploadShoe(shoeData)
      } else if (file){
        await uploadShoe(shoeData, file)
      }

      loadDisplay()
      navigate("/")
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
    <>
      <Form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <Form.Group className="mb-3">
          <Form.Label>Name of Shoe</Form.Label>
          <Form.Control 
            type="text"
            onChange={(event) =>
              setShoeData({ ...shoeData, name: event.target.value })
            }
          />
          <Form.Text className="text-muted">
            Eg. Super Duper Kicks
          </Form.Text>
        </Form.Group>
        <StypeSelect setShoeData={setShoeData} shoeData={shoeData}/>
        <SbrandSelect setShoeData={setShoeData} shoeData={shoeData}/>
        <SsizeSelect setShoeData={setShoeData} shoeData={shoeData}/>
        <Form.Group className="mb-3">
          <Form.Label>Color of Shoe</Form.Label>
          <Form.Control 
            type="text"
            onChange={(event) =>
              setShoeData({ ...shoeData, colour: event.target.value })
            }
          />
          <Form.Text className="text-muted">
            Eg. Red sleek maroon
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Miscellaneous</Form.Label>
          <Form.Control 
            type="text"
            onChange={(event) =>
              setShoeData({ ...shoeData, miscellaneous: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price of Shoe</Form.Label>
          <div className="d-flex">
            <p> SGD$ </p>
            <Form.Control 
              type="number"
              step={0.01}
              onChange={(event) =>
                setShoeData({ ...shoeData, costprice: parseFloat(parseFloat(event.target.value).toFixed(2)) })
              }
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files?.[0];
              if (file) {
                setFile(file);
                setShoeData({ ...shoeData, picture: true })
              }
            }}
          />
        </Form.Group>
        {spinner ? 
        <Spinner animation="border" variant="primary"/> 
        :
        <Button variant="primary" type="submit">
          Add Shoe
        </Button>
        }
      </Form>
    </>
  )
}

export default AddShoeForm
