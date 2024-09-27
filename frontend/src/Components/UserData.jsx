import React from 'react'

const UserData = () => {
    const submit=async()=>
        { 
            const response=await fetch("https://dating-backend-beta.vercel.app/user-profile/get-responses/66ed459b5aa737d2ce566ea7");
            const data=await response.json();
            console.log(data)
        
        }
  return (
    <button onClick={submit}>Click</button>
  )
}

export default UserData