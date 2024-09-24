import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Add_Details = () => {
  const [button, setButton] = useState(false);
  const [value, setValue] = useState([]);
  const [state, setState] = useState({ question: '', description: '' });
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3000/moderator/get-questions");
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
      const response = await fetch('http://localhost:3000/moderator/create-question', {
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
  };
  const addButtonDetail = () => {
    setButton(!button);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rahul</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">All Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Accepted Users</a>
              </li>
            </ul>
            <NavLink to="/admin/removedetails" style={{ textDecoration: "none" }}>
              <button className="btn btn-outline-danger mr-3" type="submit" style={{ marginRight: "1vh" }}>
                + Remove Details
              </button>
            </NavLink>
            <NavLink to="/admin/adddetails" style={{ textDecoration: "none" }}>
              <button className="btn btn-outline-danger mr-3" type="submit" style={{ marginRight: "1vh" }}>
                + Add Details
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {value.length === 0 ? "" : value.map((field, index) => (
          <div key={index} style={{ margin: "1vh", padding: "1vh", fontWeight: "bold", width: "80vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
            {field.question}
            <div>
              <button type="button" className="btn btn-danger">Edit</button>
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
