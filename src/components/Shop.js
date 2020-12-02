import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const Shop = () => {
   const [data, setdata] = useState([]);
   useEffect(()=>{
     const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      setdata(await res.json());
     }
     fetchData();
   },[])
   return (
      <div>
         {data.map((user)=><h1 key={user.id}>
            <Link to={`/shop/${user.id}`}>{user.name}</Link>
         </h1>)}
      </div>
   )
}

export default Shop
