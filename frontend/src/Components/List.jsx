import React, { useState, useEffect } from "react";
const Match = (props) => {
  const [detail, setDetail] = useState(null);
const [status,setStatus]=useState(null);
  const [formData, setFormData] = useState({
    admin1: props.email1,
    admin2: '',
    match: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/bucketlist");
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);
  const handleClick = (user) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      admin2: user.email,
    }));
    console.log({ ...formData, admin2: user.email }); // Log with the updated data
  };

  const answersubmit = async (e) => {
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
    <>
      <select
        style={{margin:"2rem"}}
        name="match"
        id="adminFields"
        onChange={handleChange}
        value={formData.match}
      >
        <option value="" disabled>Select Details</option>
        <option value="email">Email</option>
        <option value="bio">Bio</option>
        <option value="relationshipGoals">Relationship Goals</option>
        <option value="idealPartner">Ideal Partner</option>
        <option value="hobbiesAndInterests">Hobbies and Interests</option>
        <option value="favoriteActivities">Favorite Activities</option>
        <option value="valuesAndBeliefs">Values and Beliefs</option>
        <option value="favoriteBooksAndMovies">Favorite Books and Movies</option>
        <option value="travelExperiences">Travel Experiences</option>
        <option value="lifeAchievements">Life Achievements</option>
        <option value="futureAspirations">Future Aspirations</option>
        <option value="describeYourself">Describe Yourself</option>
        <option value="workLifeBalance">Work Life Balance</option>
        <option value="favoriteQuotes">Favorite Quotes</option>
        <option value="mostProudOf">Most Proud Of</option>
        <option value="biggestChallenges">Biggest Challenges</option>
        <option value="favoriteFoods">Favorite Foods</option>
        <option value="mostImportantLifeLesson">Most Important Life Lesson</option>
        <option value="favoriteVacationSpots">Favorite Vacation Spots</option>
      </select>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2vh",
          justifyContent: "space-around",
        }}
      >
        {detail ? (
          <>
            {detail.females.map((user, index) => (
              <div className="card" style={{ width: "20%" }} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.gender}</p>
                  <button className="btn btn-primary" onClick={() => handleClick(user)}>
                    Click
                  </button>
                </div>
              </div>
            ))}
            {detail.males.map((user, index) => (
              <div className="card" style={{ width: "20%" }} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.gender}</p>
                  <button className="btn btn-primary" onClick={() => handleClick(user)}>
                    Click
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>No users found.</div>
        )}
      </div>
      <button  style={{backgroundColor:"red",color:"white"}} onClick={answersubmit}> Submit </button>
      <h1>{status==null?`Hello ${formData.admin1}`:`The match rate is ${status}`}</h1>
    </>
  );
};

export default Match;
