import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Categorise() {
  const [categorise, setCategorise] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/categories")
      .then((res) => res.json())
      .then((categorise) => setCategorise(categorise));
  }, []);
  const category = categorise.map((categorise) => {
    return (
      <tr key={categorise}>
        <td>{categorise}</td>
        <td>Available</td>
        <td>
          <Link
            className="btn btn-info btn-sm"
            to={`/products/category/${categorise}`}
          >
            View
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <>
      {}
      <h2> Categorise Page</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>name</th>
            <th>Count</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{category}</tbody>
      </table>
    </>
  );
}
export default Categorise;
