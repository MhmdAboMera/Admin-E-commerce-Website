import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function KindofProduct() {
  let { categryName } = useParams({});
  console.log(categryName);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/${categryName}`)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, []);
  const products = product.map((product) => {
    return (
      <div className="product-data" key={product.id}>
        <div className="contant-img">
          <img src={product.image} alt="" />
        </div>
        <h2>{product.title}</h2>
        <p className="des">{product.description}</p>
        <p className="price">Price : {product.price}$</p>
        {/* {props.showButton && <Button product={props.ele} /> } */}
      </div>
    );
  });
  console.log(product);
  return (
    <div>
      <h2 className="categryName">All Products of {categryName}</h2>
      <div className="product-list">{products}</div>
    </div>
  );
}
export default KindofProduct;
