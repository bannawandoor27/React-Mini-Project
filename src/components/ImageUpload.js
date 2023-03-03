import React,{useState,useEffect} from 'react'
import UserService from '../services/user.service'

function ImageUpload() {
    const [image,setImage] = useState(null)
    useEffect(() => {
        const formData = new FormData()
        formData.append('filename',image);
        UserService.imageUpload(formData).then((res)=>{

        })
      }, [image]);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
        console.log(image);
        
    }
    const handleFileUpload = (e) => {
        const formData = new FormData()
        formData.append('filename',image);
        UserService.imageUpload(formData).then((res)=>{

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