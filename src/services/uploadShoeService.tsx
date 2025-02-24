const uploadShoe = async (shoeData: UploadShoe, imageFile?: File) => {

  try {

    const formData = new FormData();

    formData.append("shoedata", JSON.stringify(shoeData))

    if (imageFile) {
      formData.append("imageAWS", imageFile)
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/upload`, {

      method: "POST",
      body: formData,
      
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

export default uploadShoe