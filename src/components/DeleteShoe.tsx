import React, { useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import deleteShoe from "../services/deleteShoeService";

type DeleteShoeProps = {
  singleShoe?: number;
  loadDisplay: () => Promise<void>;
}

const DeleteShoe: React.FC<DeleteShoeProps> = ({ singleShoe, loadDisplay }) => {
  const [spinner, setSpinner] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnClick = async () => {
    
    const params = singleShoe;
    if(!params){
      return (
        <h1>Sorry no shoe!</h1>
      )
    }
    setSpinner(true);

    try {

      await deleteShoe({ shoesid: params });
      await loadDisplay();
      navigate("/");

    } catch (error) {

      if (error instanceof TypeError) {

        console.error("Server Error, please contact admin");

      } else if (error instanceof Error) {

        console.error(`${error.message}`);

      } else {

        console.error("Client Error");

      }
    }
    setSpinner(false);
  }


  return (
    <>
      {spinner ?
        <Spinner animation="border" variant="primary" />
        :
        <Button variant="primary" onClick={() => handleOnClick()}>
          Nuke shoe
        </Button>
      }
    </>
  )
}

export default DeleteShoe