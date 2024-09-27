import React from 'react';
import ApprovalPending from './ApprovalPending';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    const { status } = useParams();  

    return (
        <div>
            {status === "approve" ? (
                <>
                    <NavBar />
                    <h1>The approval status is approve</h1>
                </>
            ) : (
                <ApprovalPending />
            )}
        </div>
    );
}
