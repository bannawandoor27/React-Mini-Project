const Table = ({ data }) => {
    return (

      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Of Birth</th>
            <th>Joined Date</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.mobile_number}</td>
              <td>{item.date_of_birth}</td>
              <td>{item.date_joined.slice(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
        
    );
  };
  
  export default Table;