import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { recentRecords } from "../Api";
import '../components/RecentOrders.css'

export default function Ordres() {
  const [source, setSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    recentRecords().then((res) => {
      setSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <div className="tables">
        <h3 style={{textAlign:'center'}}>Recent Orders</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Samsung A23</td>
          <td>2</td>
          <td>40000</td>
        </tr>
        <tr>
          <td>Boat earbud</td>
          <td>3</td>
          <td>10000</td>
        </tr>
        <tr>
          <td>Mama's face wash</td>
          <td>1</td>
          <td>800</td>
        </tr>
        <tr>
          <td>Milton Bottle</td>
          <td>2</td>
          <td>2200</td>
        </tr>
        <tr>
          <td>Hp Laptop</td>
          <td>1</td>
          <td>45000</td>
        </tr>
        <tr>
          <td>Samsung A23</td>
          <td>2</td>
          <td>40000</td>
        </tr>
        <tr>
          <td>Samsung A23</td>
          <td>2</td>
          <td>40000</td>
        </tr>
        <tr>
          <td>Samsung A23</td>
          <td>2</td>
          <td>40000</td>
        </tr>
        <tr>
          <td>Samsung A23</td>
          <td>2</td>
          <td>40000</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}
