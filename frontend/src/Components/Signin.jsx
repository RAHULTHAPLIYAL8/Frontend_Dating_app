import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import bgPhoto from '../assets/bgphoto.jpg';
import bgFormPhoto from '../assets/bgformphoto.jpg';

const Sign = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();  
  
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const response = await fetch('https://dating-backend-beta.vercel.app/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
      });
      const data = await response.json();

      if (data.status === "ok") {
        navigate(`/dashboard/${data.value.email}/${data.value.status}`);
      } else if (data.status === "error") {
        setStatus("Password is incorrect");
      } else if (data.status === "email") {
        setStatus("Email already exists");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setStatus("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <section className="vh-100 d-flex justify-content-center align-items-center" style={{ height: "50vh", margin: 0, backgroundImage:`url(${bgPhoto})`, backgroundSize: 'cover',
      backgroundPosition: 'center',}}>

        <div className="container d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-lg" style={{ borderRadius: "10px", padding: "20px", backgroundImage:`url(${bgFormPhoto})`, backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
              <div className="card-body p-5">
                <h3 className="mb-4 text-center" style={{color:"white"}}>Sign In</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-2">
                    <label htmlFor="typeEmailX-2" className="form-label" ><h5>Email</h5></label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      name="email"
                      className="form-control"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                      style={{ padding: "10px", fontSize: "1rem" }}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="typePasswordX-2" className="form-label"> <h5>Password</h5></label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      name="password"
                      className="form-control"
                      value={formValues.password}
                      onChange={handleInputChange}
                      required
                      style={{ padding: "10px", fontSize: "1rem" }}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-danger btn-block" type="submit" style={{ padding: "12px", fontSize: "1rem" }}>
                      Sign In
                    </button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                  <NavLink to="/signup" style={{ textDecoration: "none" }}>Signup</NavLink>
                    <NavLink to="/forgot" style={{ textDecoration: "none" }}>Forgot Password?</NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign;
