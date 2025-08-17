import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:8000/api/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded: ' + response.data.filename);
    } catch (error) {
      console.error(error);
      alert('Upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="200" />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
