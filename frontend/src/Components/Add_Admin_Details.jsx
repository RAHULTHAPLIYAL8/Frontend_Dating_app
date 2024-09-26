import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import NavBar from './NavBar';


const Add_Details = () => {
  const [button, setButton] = useState(false);
  const [value, setValue] = useState([]);
  const [state, setState] = useState({ question: '', description: '' });
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
  }, []);
  const formValues = (e) => {
    const { name, value } = e.target;

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(state)
  };
  const addNewQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dating-backend-beta.vercel.app/moderator/create-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      const data = await response.json();
      console.log("Question added: ", data);
      setValue([...value, data]); 
      setState({ question: '', description: '' }); 
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  };
  const falsestyle = {
    margin: "1vh",
    padding: "1vh",
    fontWeight: "bold",
    width: "80vw",
    display: "none",
    justifyContent: "space-between",
    cursor: "pointer",
    alignItems: "center",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    background:"white"
  };
  const truestyle = {
    margin: "1vh",
    padding: "1vh",
    fontWeight: "bold",
    width: "80vw",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    alignItems: "center",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    background:"white"
  };
  const addButtonDetail = () => {
    setButton(!button);
  };
  return (
    <>
      
      <AdminNavBar/>
      <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed", // Fixes the background image
  minHeight: "100vh", // Ensures the container covers the viewport
  width: "98.5vw", // Ensures the container covers the full width of the viewport
}}>

        {value.length === 0 ? "" : value.map((field, index) => (
          <div key={index} style={{ margin: "1vh", padding: "2vh", fontWeight: "bold", width: "80vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
            {field.question}
            <div>
              
            </div>
          </div>
        ))}
        <div onClick={addButtonDetail} style={button === true ? { display: "none" } : { margin: "1vh", padding: "1vh", fontWeight: "bold", width: "80vw", display: "flex", justifyContent: "center", cursor: "pointer", alignItems: "center", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
          <div style={{ fontWeight: "bold" }}>+</div>
        </div>
        <form onSubmit={addNewQuestion}>
          <div style={button === false ? falsestyle : truestyle}>
            <div style={{ width: "80%" }}>
              <input
                type="text"
                name="question"
                onChange={formValues}
                className="form-control"
                value={state.question}
                id="questionInput"
                placeholder="Enter Question"
              />
              <input
                type="text"
                onChange={formValues}
                value={state.description}
                name="description"
                className="form-control"
                id="descriptionInput"
                placeholder="Enter Description"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginLeft: "1vh" }}>
              Add
            </button>
            <button type="button" className="btn btn-danger" onClick={addButtonDetail}>
              Remove
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add_Details;
