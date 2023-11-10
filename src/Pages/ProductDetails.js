import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams({});
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  };
  return (
    <div className="product-details">
      <h2>Product Details {productId}</h2>
      <p className="title">{product.title}</p>
      <div className="d-img">
        <img src={product.image} className="max-width" alt="" />
      </div>
      <p className="description">{product.description}</p>
      <p className="category">{product.category}</p>
      <p className="price "> Price : {product.price} $</p>
      <button className="btn-bttt">Add To Cart</button>
    </div>
  );
}
export default ProductDetails;
