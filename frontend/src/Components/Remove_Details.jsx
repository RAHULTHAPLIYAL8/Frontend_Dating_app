import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';

const Remove_Details = () => {
  const [value, setValue] = useState([]);
  const [state,setState]=useState(null)
  const remove=async (id)=>
  {
    try {
      const response = await fetch(`https://dating-backend-beta.vercel.app/moderator/delete-question/${id}`,
        {
          method:"DELETE"
        }
      );
      const data=await response.json();
      if(data.status==="success")
      setState(data._id)
    } catch (error) {
      console.error("Error fetching questions: ", error);
    }
  }
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://dating-backend-beta.vercel.app/moderator/get-questions");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setValue(data); 
        console.log("Fetched questions: ", data);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };
  
    fetchQuestions();
  }, [state]); 
  return (
    <>
     <AdminNavBar/>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"3vh"}}>
    {value.length === 0 ? "" : value.map((field, index) => (
           <div style={{margin:"1vh",padding:"1vh",fontWeight:"bold",width:"80vw",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
           {field.question}    <div> <button type="button" class="btn btn-danger" onClick={()=>
            {
              remove(field._id)
            }
           }>Remove</button></div>
     </div>
        ))}
    </div>
    </>
  )
}

export default Remove_Details