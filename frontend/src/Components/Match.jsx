import React, { useState } from 'react';
const Match = () => {
const [formData, setFormData] = useState({
  admin1:'',
  admin2:'',
  match:'',
});
const [status, setStatus] = useState();
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value.trim(),
});
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch('http://localhost:3000/admin/matchpair', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      if (data.status === 'ok') {
        setStatus(data.value);
        console.log('Success:', data.value);
      } else if (data.status === 'error') {
        setStatus('Password is incorrect');
        console.log('Error:', data.value);
      } else if (data.status === 'email') {
        setStatus('Email already exists');
        console.log('Email Error:', data.value);
      } else {
        setStatus('Unexpected status');
        console.log('Unexpected Response:', data);
      }
    } catch (error) {
      setStatus('An error occurred during submission');
      console.error('Request Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Admin 1 Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="admin1"
          value={formData.admin1}
          onChange={handleChange}     
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail2" className="form-label">
          Admin 2 Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail2"
          name="admin2"
          value={formData.admin2}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="matching">
          Match Detail 
        </label>
        <input
          type="text"
          className="form-control"
          name="match"
          id="matching"
          value={formData.match}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <h1 style={{color:"green"}}> {status} </h1>
    </form>
  );
};
export default Match;
