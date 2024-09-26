import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const Admin = () => {
  const [detail, setDetail] = useState([]);
  const [state,setStatus]=useState(null)

  const Acceptfunction = async (id) => {
    try {
      const response = await fetch(`https://dating-backend-beta.vercel.app/user/approve-user/${id}`, {
        method: 'PATCH',
      });
      const data = await response.json();
      console.log(data);
      setStatus(data)

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const Rejectfunction = async (id) => {
    try {
      const response = await fetch(`https://dating-backend-beta.vercel.app/user/reject-user/${id}`, {
        method: 'PATCH',
      });
      const data = await response.json();
      console.log(data);
      setStatus(data)
      // Optionally update state or show feedback
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dating-backend-beta.vercel.app/user/all");
        const data = await response.json();
        console.log(data);
        setDetail(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, [state]);

  return (
    <>
     <AdminNavBar/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",margin:"20px" }}>
        {
          detail.length === 0 ? " " : detail.filter(field => field.status === "approve").map((field, index) => (
            <div 
              key={index} 
              style={{
                margin: "1vh",
                padding: "2vh",
                fontWeight: "bold",
                width: "80vw",
                display: "flex",
                border:"2px solid black",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius:"10px",
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }}
            >
                <h5 style={{width:"20%"}}>{field.name} </h5><h5 style={{width:"20%"}}>{field.gender}</h5>
              <div>
                <button 
                  type="button" 
                  className="btn btn-success" 
                  style={{ marginRight: "10px" }} 
                
                >
                  Approved
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Admin;
