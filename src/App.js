import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  { id: 1, desc: 'Unisex Cologne',  image: './products/cologne.jpg', value: 0 },
  { id: 2, desc: 'Apple iWatch',  image: './products/iwatch.jpg', value: 0 },
  { id: 3, desc: 'Unique Mug',  image: './products/mug.jpg', value: 0 },
  { id: 4, desc: 'Mens Wallet',  image: './products/wallet.jpg', value: 0 }
];

function App() {
  const siteName = "My E-commerce cart";
 
  return (
    <div className="App">
      <h1  style={{ margin: "auto", textAlign: "center", marginBottom:"15px", marginTop:"15px" }}>
        {siteName}  
      </h1>
      <table style={{
        border: "1px solid black",
        borderCollapse: "collapse",
        width: "500px",
        margin: "auto",
        
      }}>
        <thead>
          <tr style={{
       backgroundColor: "#09D0EF",
        height: "80px",
        
      }}>
            <th >Shop to React</th>
            <th ><FontAwesomeIcon icon={faShoppingCart} />0 items</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} style={{ border: "1px solid black" }}>
              <td>
                {item.desc}<br />
                <img src={item.image} alt={item.desc} style={{
                  width: "50px",
                  height: "50px",
                  overflow: "hidden",
                }} />
              </td>
             
              <td>
              <span style={{
                  border: "2px solid black",
                  padding: "10px",
                  display: "inline-block",
                  width: "27px",
                  height: "27px",
                  lineHeight: "7px",
                }}>{item.value}</span>: Quantity
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
