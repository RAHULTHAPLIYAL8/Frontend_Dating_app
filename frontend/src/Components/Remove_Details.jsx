import React from 'react'
import { NavLink } from 'react-router-dom'

const Remove_Details = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rahul</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <NavLink to="/admin/adddetails" style={{ textDecoration: "none" }}>
      <button className="btn btn-outline-danger mr-3" type="submit" style={{marginRight:"1vh"}}>
      + Add 
    </button>
    </NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accepted Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accepted Users</a>
        </li>
      </ul>
      <NavLink to="/admin/removedetails" style={{ textDecoration: "none" }}>
      <button className="btn btn-outline-danger mr-3" type="submit" style={{marginRight:"1vh"}}>
      + Remove Details
    </button>
    </NavLink>
    <NavLink to="/admin/adddetails" style={{ textDecoration: "none" }}>
      <button className="btn btn-outline-danger mr-3" type="submit" style={{marginRight:"1vh"}}>
      + Add 
    </button>
    </NavLink>
    </div>
  </div>
</nav>
    
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    
    <div style={{margin:"1vh",padding:"1vh",fontWeight:"bold",width:"80vw",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          Whay is your favorite books and thoughts about relationship     <div> <button type="button" class="btn btn-danger">Remove</button></div>
    </div>
    <div style={{margin:"1vh",padding:"1vh",fontWeight:"bold",width:"80vw",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          what is your strength and weakness in relationship     <div>  <button type="button" class="btn btn-danger">Remove</button></div>
    </div>
    <div style={{margin:"1vh",padding:"1vh",fontWeight:"bold",width:"80vw",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          what is your strength and weakness in relationship     <div>  <button type="button" class="btn btn-danger">Remove</button></div>
    </div>
    <div style={{margin:"1vh",padding:"1vh",fontWeight:"bold",width:"80vw",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          what is your strength and weakness in relationship     <div>  <button type="button" class="btn btn-danger">Remove</button></div>
    </div>                                                  
    <div style={{margin:"1vh",padding:"1vh",fontWeight:"bold",width:"80vw",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          what is your strength and weakness in relationship     <div>  <button type="button" class="btn btn-danger">Remove</button></div>
    </div>
    </div>
    </>
  )
}

export default Remove_Details