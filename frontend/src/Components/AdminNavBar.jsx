import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{paddingTop:"10px",color:"white",fontWeight:"bold",fontSize:"3vh",position:"relative",bottom:"-2px"}}>ADMIN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <NavLink to="/admin" style={{ textDecoration: "none" }}>
              <button className="btn btn-primary mr-3" type="submit" style={{ marginRight: "1vh" }}>
                All user 
              </button>
            </NavLink>
              
             
              <NavLink to="/admin/approve" style={{ textDecoration: "none" }}>
              <button className="btn btn-primary mr-3" type="submit" style={{ marginRight: "1vh" }}>
                Accepted User
              </button>
            </NavLink>
              
            </ul>
            <NavLink to="/admin/removedetails" style={{ textDecoration: "none" }}>
              <button className="btn btn-outline-danger mr-3" type="submit" style={{ marginRight: "1vh" }}>
                + Remove
              </button>
            </NavLink>
            <NavLink to="/admin/adddetails" style={{ textDecoration: "none" }}>
              <button className="btn btn-outline-success mr-3" type="submit" style={{ marginRight: "1vh" }}>
                + Add 
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
  )
}

export default AdminNavBar