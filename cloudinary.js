import axios from "axios";

const App=async(file)=> {
    try {
        
    

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ktw1osrt'); // Reemplaza con tu upload preset

      const response = await axios.post('https://api.cloudinary.com/v1_1/dk4amlgtk/image/upload', formData)
        return response.data.secure_url
    } catch (error) {
        console.error('Error al subir el archivo:', error)
        
    }
}

export default App;