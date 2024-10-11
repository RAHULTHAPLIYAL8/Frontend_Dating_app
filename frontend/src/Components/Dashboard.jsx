import React, { useEffect, useState } from 'react'; // Ensure both useEffect and useState are imported
import ApprovalPending from './ApprovalPending';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    const [state, setState] = useState(null); // Initialize state

    const { status } = useParams(); // Get status from URL parameters

    useEffect(() => {
        const fetchData = async () => { // Define an async function
            try {
                const response = await fetch('https://dating-backend-beta.vercel.app/match/stable-partner', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({userId:"4"}),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const value = await response.json(); // Wait for the JSON response
                setState(value.name); // Set the resolved value in state
                console.log(value); // Log the resolved value
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function

    }, []); // Empty dependency array to run once on mount

    return (
        <div>
            {status === "approve" ? (
                <>
                    <NavBar />
                    <h1>The approval status is approve</h1>
                    <div className="card" style={{ width: '18rem', margin: '20px' }}>
            <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className="card-img-top"  />
            <div className="card-body">
                <h5 style={{textAlign:"center"}} className="card-title">{state}</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quae.</p>
                <div><button href="#"  style={{width:"100%"}}className="btn btn-danger">Connect</button></div>
            </div>
        </div>
                </>
            ) : (
                <ApprovalPending />
            )}
        </div>
    );
}
