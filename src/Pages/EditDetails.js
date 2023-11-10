import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDetails() {
  let { productID } = useParams({});
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/products/${productID}`, {
        title,
        price,
      })
      .then((data) => {
        navigate("/products");
      });
  };
  return (
    <>
      <h2>Edit Product {productID}</h2>
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
          Edit
        </button>
      </form>
    </>
  );
}
export default EditDetails;
