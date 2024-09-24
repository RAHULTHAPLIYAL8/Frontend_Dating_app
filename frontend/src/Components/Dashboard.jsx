import React, { useState, useEffect } from 'react';
import ApprovalPending from './ApprovalPending';
import List from './List';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    const { email,status} = useParams();  
    const [isApprovalClear, setIsApprovalClear] = useState(false);
    useEffect(() => {
        
        if (status==="approve") {
            setIsApprovalClear(true);
        }
    }, [email]); 
    return (
        <div>
            <NavBar />
            {isApprovalClear ? (
                // <List email1={email}/>
                <h1>The approval status is approve</h1>
            ) : (
                <ApprovalPending />
            )}
        </div>
    );
}
