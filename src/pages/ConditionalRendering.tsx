import { useState } from "react";


interface User {
  id: number;
  name: string;
  bio:string;
}


function UserProfile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User|null>();


const handleData = ()=>{
    setUser({
        id:1,
        name:"React",
        bio:"React JS"
    });
    setLoading(false)
}

  if (loading) return <p>Loading...</p>;
  
  if (!user) return <p>User not found.</p>; 

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  ); 
}
export default UserProfile