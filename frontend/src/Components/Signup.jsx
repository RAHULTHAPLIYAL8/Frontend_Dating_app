import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import bgPhoto from '../assets/bgphoto.jpg';
import bgFormPhoto from '../assets/bgformphoto.jpg';


const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: '',
    password: '',
    gender: '',
  });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
      });
      const data = await response.json();

      if (data.status === "ok") {
        navigate(`/details/${data.value._id}`);
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
    <section className="vh-100 d-flex justify-content-center align-items-center" style={{ height: "50vh", margin: 0, backgroundImage:`url(${bgPhoto})`, backgroundSize: 'cover',
      backgroundPosition: 'center',}}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-lg" style={{ borderRadius: "10px", padding: "15px", backgroundImage:`url(${bgFormPhoto})`, backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
            <div className="card-body p-5">
              <h3 className="mb-2 text-center" style={{color:"white"}}>Sign Up</h3>
              {status && <p className="text-danger text-center">{status}</p>} 
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="typeEmailX-2" className="form-label">Name</label>
                  <input
                    type="text"
                    id="typeEmailX-2"
                    name="name"
                    autoComplete='off'
                    className="form-control"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", fontSize: "1rem" }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="typeEmailX-2" className="form-label">Email</label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    name="email"
                    className="form-control"
                    autoComplete='off'
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", fontSize: "1rem" }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="typePasswordX-2" className="form-label">Password</label>
                  <input
                    type="password"
                    id="typePasswordX-2"
                    name="password"
                    autoComplete='off'
                    className="form-control"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", fontSize: "1rem" }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                  <div className="m-2" style={{ fontSize: "18px" }}>
                    <input className='m-2' onChange={handleInputChange} type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="m-2" style={{ fontSize: "18px" }}>
                    <input className="m-2" type="radio" id="female" name="gender" onChange={handleInputChange} value="female" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <div className="d-grid gap-2">
                <button className="btn btn-danger btn-block" type="submit" style={{ padding: "12px", fontSize: "20px"}}>
  Sign up
</button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <p>Already have an account? <NavLink to="/signin" style={{ textDecoration: "none" }}>Sign in</NavLink></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
