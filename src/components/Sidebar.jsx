import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-dark vh-100 py-3 ps-3 pe-5">
      <div>
        <a href="" className="p-3 text-decoration-none text-white">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="fs-3">Sidebar</span>
        </a>
        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li className={active === 1 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={() => setActive(1)}>
            <Link to="/" className="p-1 text-white text-decoration-none">
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-4">Dashboard</span>
            </Link>
          </li>
          <li className={active === 2 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={() => setActive(2)}>
            <Link to="/users" className="p-1 text-white text-decoration-none">
              <i className="bi bi-people me-3 fs-4"></i>
              <span className="fs-4">Users</span>
            </Link>
          </li>
          <li className={active === 3 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={() => setActive(3)}>
            <Link to="/orders" className="p-1 text-white text-decoration-none">
              <i className="bi bi-table me-3 fs-4"></i>
              <span className="fs-4">Orders</span>
            </Link>
          </li>
          <li className={active === 4 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={() => setActive(4)}>
            <span className="p-1 text-white text-decoration-none">
              <i className="bi bi-grid me-3 fs-4"></i>
              <span className="fs-4">Report</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-white" />
        <div className="nav-items p-2">
          <a href="" className="p-1 text-decoration-none text-white">
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4">
              <strong>Richard</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
