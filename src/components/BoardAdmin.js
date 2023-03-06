import React, { useState,useEffect } from 'react'
import AdminServices from '../services/admin.service'
import Table from './AdminTable'
function BoardAdmin() {

const [query,setQuery] = useState('')
const [userdata,setUserdata] = useState([])

useEffect(()=>{
   AdminServices.adminSearch(query).then((response)=>{
    setUserdata(response.data)
   }) 
},[query])
  return (
    <div className='d-flex justify-content-center '>
    <div className=""><h1>Admin Dashboard</h1> 

  <div className="form-outline">
    <input type="search" id="form1" className="form-control" placeholder='Search Users..' onChange={(e)=>{setQuery(e.target.value)}} />
  </div>
  <Table data={userdata}/>

</div>
    

    </div>
  )
}

export default BoardAdmin