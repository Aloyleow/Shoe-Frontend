const uploadShoe = async () => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/upload`, {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as UploadShoe;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default uploadShoe