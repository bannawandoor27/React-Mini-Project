import React,{useState,useEffect,useRef} from 'react';
import userService from '../services/user.service';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';  
import Image from '../components/ImageUpload'
const BoardUser= ()=>{

    const [content,setContent]=useState('');
    
    useEffect(()=>{
        userService.getUserBoard().then((response)=>{
            setContent(response.data);
        },
        (error)=>{
            const _content = (
                error.response &&
                error.response.data &&
                error.response.data.message)||
                error.message||
                error.toString();
            setContent(_content);
        }
        )
    },[])

    const header = (
        <img alt="Card" src={`http://127.0.0.1:8000/${content.profile_picture}`} style={{borderRadius:'100px',height:'200px',width:'200px'}}/>
    );
    const footer = (
        <div className="flex flex-wrap justify-content-center gap-2">
                {console.log(content)}
                <Image/>
        </div>
    );

    return(
        <div className="container">
        <header className="jumbotron">

        <div className="card flex justify-content-center">
            <Card title={content.username} subTitle={content.is_superuser?'Admin':'User'} footer={footer} header={header} className="md:w-25rem">
                <li>
                    Phone Number: {content.mobile_number}
                </li>
                <li>
                    Email: {content.email}
                </li>
                <li>
                    Date Of Birth: {content.date_of_birth}

                </li>
            </Card>
        </div>

        </header>
      </div>
    );
};

export default BoardUser;