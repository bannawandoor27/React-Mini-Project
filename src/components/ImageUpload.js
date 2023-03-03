import React,{useState,useEffect} from 'react'
import UserService from '../services/user.service'

function ImageUpload() {
    const [image,setImage] = useState(null)
    useEffect(() => {
      }, [image]);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
        
    }
    const handleFileUpload = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('profile_picture',image,image.name);
        UserService.imageUpload(form_data).then(res => {

        })

    }
  return (
    <div>
        <form onSubmit={handleFileUpload}>
        <input type='file' onChange={handleFileChange}   name='profile_picture'id='file'/>
        <button type='submit'>Upload</button>
        </form>
    </div>
  )
}

export default ImageUpload