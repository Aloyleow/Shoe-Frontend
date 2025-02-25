const editShoe = async (data: EditShoe) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/display/shoe`, {

      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default editShoe