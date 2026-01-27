import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () =>{
    const user = useContext(UserContext);

    return(
        <div>
            <h2>{user.name}</h2>
            <button onClick={()=>user.setName("Patel")}>Change Name</button>
        </div>
    )

}

export default Profile