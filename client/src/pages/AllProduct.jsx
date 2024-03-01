import React from "react";
import Table from "react-bootstrap/Table";

export default function AllProduct() {
  return (
    <div style={{marginLeft:'400px'}} className="tables all">
      <h3 style={{textAlign:'center'}}>All Products</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Samsung A23</td>
            <td>2</td>
            <td>40000</td>
            <td>Samsung</td>
            <td>Smartphone</td>
          </tr>
          <tr>
            <td>Boat earbud</td>
            <td>3</td>
            <td>10000</td>
            <td>Boat</td>
            <td>Earbud</td>
          </tr>
          <tr>
            <td>Mama's face wash</td>
            <td>1</td>
            <td>800</td>
            <td>Mama's</td>
            <td>Face wash</td>
          </tr>
          <tr>
            <td>Milton Bottle</td>
            <td>2</td>
            <td>2200</td>
            <td>Milton</td>
            <td>Water Bottle</td>
          </tr>
          <tr>
            <td>Hp Laptop</td>
            <td>1</td>
            <td>45000</td>
            <td>Hp</td>
            <td>Laptop</td>
          </tr>
          <tr>
            <td>Samsung A23</td>
            <td>2</td>
            <td>40000</td>
            <td>Samsung</td>
            <td>Smartphone</td>
          </tr>
          <tr>
            <td>Iphone X</td>
            <td>2</td>
            <td>80000</td>
            <td>Apple</td>
            <td>Smartphone</td>
          </tr>
          <tr>
            <td>Apple 14</td>
            <td>2</td>
            <td>150000</td>
            <td>Apple</td>
            <td>Smartphone</td>
          </tr>
          <tr>
            <td>C++</td>
            <td>2</td>
            <td>1500</td>
            <td>Eagle's</td>
            <td>Book</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
