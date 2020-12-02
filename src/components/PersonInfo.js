import React from 'react'
import {useState,useEffect} from 'react'


const PersonInfo = ({match}) => {
   const [userdata, setuserData] = useState([]);
   useEffect(()=>{
     const fetchData = async () => {
         const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${match.params.id}`);
         setuserData(await res.json());
     }
     fetchData();
   },[match.params.id])
   const user=userdata[0];
   return (
      <div className="PersonInfo">
         <h2>Person Details</h2>
         {user? 
            <div className="user-card">
               <p>User Name : {user.username}</p>
               <p>Email : {user.email}</p>
               <p>Phone : {user.phone}</p>
               <p>WEB : {user.website}</p>
            </div>:
            <p>Fetching About User Info.</p>
         }
      </div>
   )
}

export default PersonInfo
