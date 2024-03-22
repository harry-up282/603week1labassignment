import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  { id: 1, name: "Cologne", price: 10, image: "/cologne.jpg", quantity: 0 },
  { id: 2, name: "iwatch", price: 20, image: "/iwatch.jpg", quantity: 0 },
  { id: 3, name: "Mug", price: 30, image: "/mug.jpg", quantity: 0 },
  { id: 4, name: "Wallet", price: 30, image: "/wallet.jpg", quantity: 0 }
];

function App() {
  const siteName = "My E-commerce cart";
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

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
                {item.name}<br />
                <img src={item.image} alt={item.name} style={{
                  width: "50px",
                  height: "50px",
                  overflow: "hidden",
                }} />
              </td>
              {/* <td>Quantity: {item.quantity}</td> */}
              <td>
              <span style={{
                  border: "2px solid black",
                  padding: "10px",
                  display: "inline-block",
                  width: "27px",
                  height: "27px",
                  lineHeight: "7px",
                }}>{item.quantity}</span>: Quantity
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
