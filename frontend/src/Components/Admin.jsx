import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
const Admin = () => {
  const [detail,setDetail]=useState([]);
  const Acceptfunction= async (id)=>
  {
    try {
      const response = await fetch(`http://localhost:3000/user/approve-user/${id}`, {
        method: 'PATCH',
      })
      const data= await response.json();
      console.log(data)
      
    }catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

  }
  const Rejectfunction= async (id)=>
    {
      try {
        const response = await fetch(`http://localhost:3000/user/reject-user/${id}`, {
          method: 'PATCH',
        })
        const data= await response.json();
        console.log(data)
        
      }catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
  
    }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/all");
        const data = await response.json();
        console.log(data)
        setDetail(data)
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);
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
          <a class="nav-link active" aria-current="page" href="#">All Users</a>
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
    {
  detail.length === 0 ? " " : detail.map((field, index) => (
    <div 
      key={index} 
      style={{
        margin: "1vh",
        padding: "1vh",
        fontWeight: "bold",
        width: "80vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }}
    >
      {field.name} <span>{field.gender}</span>
      <div>
        <button type="button" className="btn btn-primary" style={{marginRight:"10px"}} onClick={()=>{Acceptfunction(field._id)}}>Accept</button>
        <button type="button" className="btn btn-danger" onClick={()=>{Rejectfunction(field._id)}}>Reject</button>
      </div>
    </div>
  ))
}
    </div>
    </>
  )
}

export default Admin