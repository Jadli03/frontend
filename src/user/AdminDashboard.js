import React from "react";
import { isAuthenticated } from "../auth";
import Menu from '../core/Menu';
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const {
        user: {name, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            Manage Products
                        </Link>
                    </li>

                   
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <div>
        <Menu />
        <br/><br/> <br/><br/>
            <div className="container">
            <div className="row">
            <div className="col-9">{adminInfo()}</div>
                <div className="col-sm">{adminLinks()}</div>
             
            </div>
            </div>
            </div>
    );
};

export default AdminDashboard;