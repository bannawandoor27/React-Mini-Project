import React,{useState} from 'react'
import UserService from '../services/user.service'

function ImageUpload() {
    const [image,setImage] = useState(null)
   

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }
    const handleFileUpload = (e) => {
        const fd  = new FormData();
        fd.append('image',image,image.name)
        console.log(fd)
        UserService.imageUpload(fd).then((res) => {
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