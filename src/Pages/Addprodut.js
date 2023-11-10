import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Addproduct() {
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/products", {
        title,
        price,
      })
      .then((data) => {
        navigate("/products");
      });
    // fetch("http://localhost:9000/products", {
    //     method: "POST",
    //     // headers: {
    //     //     `Content-Type`: `application/json`,
    //     // },
    //     body: JSON.stringify({
    //         title,
    //         price
    //     })
    // }).then((res)=>{res.json()}).then((data)=>{console.log(data)})
  };
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <>
      <h2>Add products</h2>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="product title"
            className="form-control"
            id="productTitle"
            aria-describedby="product title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="product price"
            className="form-control"
            id="productPrice"
            aria-describedby="product price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
export default Addproduct;
