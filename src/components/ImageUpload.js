import React,{useState} from 'react'
import UserService from '../services/user.service'

function ImageUpload() {
    const [image,setImage] = useState(null)
   

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }
    const handleFileUpload = (e) => {
        const formData = new FormData()
        formData.append('filename',image);
        UserService.imageUpload(formData).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div>
        <input type='file' onChange={handleFileChange}   />
        <button onClick={handleFileUpload}>Upload</button>
    </div>
  )
}

export default ImageUpload