import { UserProvider } from "../context/UserContext"
import ListsTS from "./ListsTS"
import Profile from "./Profile"
const ProfilePage = ()=>{
    return(
        <div>
            <UserProvider>
                <Profile/>
            </UserProvider>
            <ListsTS/>
        </div>
    )
}
export default ProfilePage