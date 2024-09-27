import React, { useState, useEffect } from 'react';
import ApprovalPending from './ApprovalPending';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    const { status } = useParams();  
    const [isApprovalClear, setIsApprovalClear] = useState(false);
   
    useEffect(() => {
        if (status === "approve") {
            setIsApprovalClear(true);
        } else {
            setIsApprovalClear(false); // Reset state if status is not "approve"
        }
    }, [status]); // Run effect when status changes
    
    return (
        <div>
            <NavBar />
            {isApprovalClear ? <h1>The approval status is approve</h1> : <ApprovalPending />}
        </div>
    );
} 
