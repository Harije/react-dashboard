import { Link } from "react-router-dom";



function Sidebar(){
    return(
        <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light fw-bolder">Admin Panel</div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/">Dashboard</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/users">Users</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/products">Products</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/vendors">Vendors</Link>
                </div>
        </div>
    )
}

export default Sidebar;