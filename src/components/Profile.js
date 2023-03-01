import React,{useRef} from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Form from 'react-validation/build/form';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';     
const Profile = () => {
  const toast = useRef(null);
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const onUpload = () => {
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  
  return (
    <div className="container">
      <header className="jumbotron">
        <img style={{
          width:'200px',
          height:'200px',
          borderRadius:'50%',
          objectFit:'cover'

        }}  
        src={currentUser.profile_picture} alt="profile" 
        />
        {console.log(currentUser.profile_picture)}

        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Your Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>User ID : </strong> {currentUser.user_id}
      </p>
      <p>
        <strong>Your Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
        <h4>Change Profile Picture here</h4>
        
        <div className="card flex justify-content-center" >
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} auto chooseLabel="Browse" />
        </div> 
    </div>
  );
};

export default Profile;