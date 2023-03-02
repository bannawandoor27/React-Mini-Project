import React,{useState} from 'react'
import UserService from '../services/user.service'
function ImageUpload() {
    const handleFileChange = (e) => {
        console.log(e.target.files[0])
    }
    const handleFileUpload = (e) => {
    }
  return (
    <div>
        <input type='file' onChange={handleFileChange}   />
        <button onClick={handleFileUpload}>Upload</button>
    </div>
  )
}

export default ImageUpload