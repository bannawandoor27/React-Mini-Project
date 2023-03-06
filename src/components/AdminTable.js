import React,{useState} from "react";
import Modal from './AdminModal'
const Table = ({ data,setModal }) => { 
    const [modalOpen,setModalOpen] = useState(false);
    const[selectedUser,setSelectedUser] = useState('');
    const handleOpen = () => setModalOpen(true);
    return (
        <>
      
      {modalOpen && <Modal setOpenModal={setModalOpen} username = {selectedUser} />} 
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Of Birth</th>
            <th>Joined Date</th>
            <th>Edit</th>
          </tr>
          {data.map((item) => (
            <>
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.mobile_number}</td>
              <td>{item.date_of_birth}</td>
              <td>{item.date_joined.slice(0,10)}</td>
              <td><button onClick={handleOpen}>Edit</button></td>      
            </tr>

            </>
          ))}
        </tbody>
      </table>
      </>
    );
  };
  
  export default Table;