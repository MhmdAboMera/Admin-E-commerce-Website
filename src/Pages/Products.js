import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((product) => setproduct(product));
  };
  const delletProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To delete the ${product.title}`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            getAllProducts();
          });
      }
    });
  };
  const products = product.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td className="width-350">{product.title}</td>
        <td>{product.price}$</td>
        <td>{product.category}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              delletProduct(product);
            }}
          >
            Dellet
          </button>
          <Link className="btn btn-info btn-sm" to={`/products/${product.id}`}>
            View
          </Link>
          <Link
            className="btn btn-primary btn-sm"
            to={`/products/edit/${product.id}`}
          >
            Edit
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h2>Products Page</h2>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th className="width-350">Title</th>
            <th>Price</th>
            <th>category</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    </>
  );
}
export default Products;
