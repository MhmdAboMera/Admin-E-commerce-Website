import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <ul className ="list-unstyled">
            <li>
                <Link to= '/products'>get All Products</Link>
            </li>
            <li>
                <Link to= '/categories'>get All Cateogries</Link>
            </li>
        </ul>
    )
}
export default Sidebar;