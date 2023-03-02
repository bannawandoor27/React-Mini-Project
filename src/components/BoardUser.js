import React,{useState,useEffect} from 'react';
import userService from '../services/user.service';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
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
        <img alt="Card" src={`http://127.0.0.1:8000/${content.profile_picture}`} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Change Profile Picture" icon="pi pi-check" severity="success" />
                {console.log(content)}
        </div>
    );

    return(
        <div className="container">
        <header className="jumbotron">

        <div className="card flex justify-content-center">
            <Card title={content.username} subTitle={content.is_admin?'Admin':'User'} footer={footer} header={header} className="md:w-25rem">
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