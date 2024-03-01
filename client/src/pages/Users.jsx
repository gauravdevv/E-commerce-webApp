import React from "react";
import Table from "react-bootstrap/Table";

export default function Users() {
  return (
    <div style={{marginLeft:'400px'}} className="tables all">
      <h3 style={{textAlign:'center'}}>Customers</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gaurav</td>
            <td>Singh</td>
            <td>Gaurav@gmail.com</td>
            <td>224343535353</td>
            <td>Faridabad</td>
          </tr>
          <tr>
            <td>Aditya</td>
            <td>Sharma</td>
            <td>aditya@gmail.com</td>
            <td>242353535454</td>
            <td>Delhi</td>
          </tr>
          <tr>
            <td>Ashwani</td>
            <td>Mishra</td>
            <td>ashwani@gmail.com</td>
            <td>252342435345</td>
            <td>Noida</td>
          </tr>
          <tr>
            <td>Ankit</td>
            <td>Sharma</td>
            <td>ankit@gmail.com</td>
            <td>253242543243</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <td>Gaurav</td>
            <td>Singh</td>
            <td>Gaurav@gmail.com</td>
            <td>224343535353</td>
            <td>Faridabad</td>
          </tr>
          <tr>
            <td>Aditya</td>
            <td>Sharma</td>
            <td>aditya@gmail.com</td>
            <td>242353535454</td>
            <td>Delhi</td>
          </tr>
          <tr>
            <td>Ashwani</td>
            <td>Mishra</td>
            <td>ashwani@gmail.com</td>
            <td>252342435345</td>
            <td>Noida</td>
          </tr>
          <tr>
            <td>Ankit</td>
            <td>Sharma</td>
            <td>ankit@gmail.com</td>
            <td>253242543243</td>
            <td>Mumbai</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
