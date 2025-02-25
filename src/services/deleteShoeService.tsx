const deleteShoe = async (shoeid: NukeShoe) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/display/shoe`, {

      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(shoeid)
      
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

export default deleteShoe